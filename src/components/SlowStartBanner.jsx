export function SlowStartBanner({ show }) {
  if (!show) return null
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 shadow-sm">
      <div className="font-semibold">Backend is waking up (cold start)</div>
      <div className="mt-1 text-amber-800">
        This can take up to ~30 seconds on Render. Please keep this tab open.
      </div>
    </div>
  )
}

