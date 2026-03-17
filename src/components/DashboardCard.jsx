export function DashboardCard({ title, value, icon: Icon, tone = 'slate', subtext }) {
  const toneClasses =
    tone === 'emerald'
      ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
      : tone === 'sky'
        ? 'bg-sky-50 text-sky-700 border-sky-100'
        : tone === 'violet'
          ? 'bg-violet-50 text-violet-700 border-violet-100'
          : tone === 'amber'
            ? 'bg-amber-50 text-amber-800 border-amber-100'
            : 'bg-slate-50 text-slate-700 border-slate-100'

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-sm font-medium text-slate-600">{title}</div>
          <div className="mt-2 truncate text-2xl font-semibold tracking-tight text-slate-900">{value}</div>
          {subtext ? <div className="mt-1 text-xs text-slate-500">{subtext}</div> : null}
        </div>
        {Icon ? (
          <div className={['rounded-xl border px-3 py-3', toneClasses].join(' ')}>
            <Icon className="h-5 w-5" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

