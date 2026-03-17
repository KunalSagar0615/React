export function PageShell({ title, subtitle, right, children }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-lg font-semibold tracking-tight text-slate-900">{title}</div>
          {subtitle ? <div className="mt-1 text-sm text-slate-600">{subtitle}</div> : null}
        </div>
        {right ? <div className="flex items-center gap-2">{right}</div> : null}
      </div>
      {children}
    </div>
  )
}

