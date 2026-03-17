import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authService, getApiErrorMessage } from '../services/index.js'
import { getRoleFromJwt, isJwtExpired } from '../utils/jwt.js'

const AuthContext = createContext(null)

function getStoredAuth() {
  const token = localStorage.getItem('token')
  const email = localStorage.getItem('email')
  const role = localStorage.getItem('role')
  return { token, email, role }
}

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [token, setToken] = useState(() => getStoredAuth().token)
  const [email, setEmail] = useState(() => getStoredAuth().email)
  const [role, setRole] = useState(() => getStoredAuth().role)
  const [isBootstrapping, setIsBootstrapping] = useState(true)

  const isAuthenticated = Boolean(token) && !isJwtExpired(token)

  useEffect(() => {
    const stored = getStoredAuth()
    if (stored.token && isJwtExpired(stored.token)) {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      localStorage.removeItem('email')
      setToken(null)
      setRole(null)
      setEmail(null)
    }
    setIsBootstrapping(false)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('email')
    setToken(null)
    setRole(null)
    setEmail(null)
    navigate('/login', { replace: true })
  }, [navigate])

  const login = useCallback(
    async ({ email: inputEmail, password }) => {
      const safeEmail = String(inputEmail ?? '').trim()
      const safePassword = String(password ?? '')
      if (!safeEmail || !safePassword) {
        const err = new Error('Email and password are required')
        err.code = 'VALIDATION'
        throw err
      }

      const res = await authService.login(safeEmail, safePassword)
      const newToken = res?.data?.token
      if (!newToken) throw new Error('Token missing in response')

      const derivedRole = getRoleFromJwt(newToken)
      if (!derivedRole) throw new Error('Role missing in JWT token')

      localStorage.setItem('token', newToken)
      localStorage.setItem('email', safeEmail)
      localStorage.setItem('role', derivedRole)
      setToken(newToken)
      setEmail(safeEmail)
      setRole(derivedRole)

      if (derivedRole === 'ADMIN') navigate('/admin/dashboard', { replace: true })
      else navigate('/employee/dashboard', { replace: true })
    },
    [navigate],
  )

  const value = useMemo(
    () => ({
      token,
      email,
      role,
      isAuthenticated,
      isBootstrapping,
      login,
      logout,
      getApiErrorMessage,
    }),
    [token, email, role, isAuthenticated, isBootstrapping, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

