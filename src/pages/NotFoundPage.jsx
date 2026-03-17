import { Link } from 'react-router-dom'
import { Button } from '../components/Button.jsx'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="text-6xl font-semibold tracking-tight text-slate-900">404</div>
        <div className="mt-2 text-sm text-slate-600">This page doesn’t exist.</div>
        <div className="mt-6 flex items-center gap-3">
          <Link to="/login">
            <Button>Go to Login</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

