import { LogOut, ShieldCheck } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { Button } from './Button.jsx'

export function TopNavbar() {
  const { email, role, logout } = useAuth()

  return (
    <header className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white">KS Banking</div>
          <div>
            <div className="text-sm font-semibold text-slate-900">KeyStone Banking Application</div>
            <div className="text-xs text-slate-500">Core Banking Services ltd</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 sm:flex">
            <ShieldCheck className="h-4 w-4 text-slate-500" />
            <div className="max-w-[220px] truncate">{email ?? '—'}</div>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
              {role ?? 'USER'}
            </span>
          </div>
          <Button variant="secondary" onClick={logout}>
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}

