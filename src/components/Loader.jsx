export function Loader({ label = 'Loading…' }) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
        <div className="text-sm font-medium text-slate-700">{label}</div>
      </div>
    </div>
  )
}

