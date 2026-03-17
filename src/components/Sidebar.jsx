import { NavLink } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

function getIcon(name) {
  return Icons?.[name] ?? Icons.Circle
}

export function Sidebar({ brand = 'Dashboard', items = [], onItemClick }) {
  const { role } = useAuth()

  return (
    <aside className="w-full md:w-[260px] shrink-0">

      <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-900">{brand}</div>

          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
            {role ?? 'USER'}
          </span>
        </div>

        <nav className="mt-4 flex flex-col gap-1">

          {items.map((item) => {
            const Icon = getIcon(item.icon)

            return (
              <NavLink
                onClick={onItemClick}
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition',
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-50',
                  ].join(' ')
                }
              >
                <Icon className="h-4 w-4" />
                <span className="truncate">{item.label}</span>
              </NavLink>
            )
          })}

        </nav>

        <div className="mt-4 rounded-xl bg-slate-50 p-3">
          <div className="text-xs font-semibold text-slate-700">
            <i>“Banking built on trust, powered by technology.”</i>
          </div>

          <div className="mt-1 text-xs text-slate-500">
            <h6>KS Bankings</h6>
          </div>
        </div>

      </div>

    </aside>
  )
}