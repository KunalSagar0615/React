import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { Loader } from '../components/Loader.jsx'

export function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, isBootstrapping, role } = useAuth()
  const location = useLocation()

  if (isBootstrapping) return <Loader label="Loading session…" />

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  if (requiredRole && role && String(role).toUpperCase() !== String(requiredRole).toUpperCase()) {
    const fallback = role === 'ADMIN' ? '/admin/dashboard' : '/employee/dashboard'
    return <Navigate to={fallback} replace />
  }

  return children
}

