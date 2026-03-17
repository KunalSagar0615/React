import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { FormInput } from '../components/FormInput.jsx'
import { Button } from '../components/Button.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { useToast } from '../context/ToastContext.jsx'

export function LoginPage() {
  const { login, getApiErrorMessage } = useAuth()
  const { push } = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const canSubmit = useMemo(() => email.trim() && password && !loading, [email, password, loading])

  async function onSubmit(e) {
    e.preventDefault()
    const nextErrors = {}

    if (!email.trim()) nextErrors.email = 'Email is required'
    if (!password) nextErrors.password = 'Password is required'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) return

    try {
      setLoading(true)
      await login({ email, password })

      push({
        type: 'success',
        title: 'Welcome back',
        message: 'Signed in successfully.',
      })

      setEmail('')
      setPassword('')
    } catch (err) {
      push({
        type: 'error',
        title: 'Login failed',
        message: getApiErrorMessage(err),
      })

      setErrors((p) => ({ ...p, form: getApiErrorMessage(err) }))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:py-20">

        {/* LEFT SIDE - BANKING INFO */}
        <div className="flex flex-col justify-center">

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Live backend connected
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">
            KeyStone Core Banking Services
          </h1>

          <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
            Trusted • Secure • Scalable
          </p>

          <p className="mt-2 text-sm font-medium text-emerald-600">
            Secure Banking Infrastructure for the Digital Era
          </p>

          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            KeyStone Core Banking Services provides a secure and scalable
            banking platform designed for modern financial institutions.
            Manage customer accounts, transactions, deposits, withdrawals
            and internal banking operations efficiently with enterprise-grade
            security powered by your Spring Boot banking backend.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold text-slate-700">
                Admin Console
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Monitor analytics, manage employees, configure banking policies.
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold text-slate-700">
                Employee Portal
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Manage customer accounts, deposits, withdrawals and transactions.
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT SIDE - LOGIN CARD */}
        <div className="flex items-center justify-center">

          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.10)]">

            <div className="text-sm font-semibold text-slate-900">
              Sign in
            </div>

            <div className="mt-1 text-xs text-slate-500">
              Use your email and password to continue.
            </div>

            {errors.form ? (
              <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                {errors.form}
              </div>
            ) : null}

            <form onSubmit={onSubmit} autoComplete="off" className="mt-5 flex flex-col gap-4">

              {/* Fake fields to prevent browser autofill */}
              <input type="text" name="fake-user" autoComplete="username" style={{ display: "none" }} /> 
              <input type="password" name="fake-pass" autoComplete="new-password" style={{ display: "none" }} />

              <FormInput
                label="Email"
                placeholder="admin@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="username"
                required
                error={errors.email}
                rightSlot={<Mail className="h-4 w-4 text-slate-400" />}
              />

              <FormInput
                label="Password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                error={errors.password}
                rightSlot={
                  <button type="button"
                    className="rounded-lg p-1 text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                    onClick={() => setShowPassword((s) => !s)} 
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                }
              />

              <Button type="submit" disabled={!canSubmit}>
                <Lock className="h-4 w-4" />
                {loading ? 'Signing in…' : 'Sign in'}
              </Button>

              <div className="text-center text-xs text-slate-500">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-slate-900 hover:underline"
                >
                  Register
                </Link>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  )
}