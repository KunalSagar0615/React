export function Modal({ open, title, children, onClose, footer }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        className="absolute inset-0 bg-slate-900/20"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">{title}</div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-700"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="px-5 py-4">{children}</div>
        {footer ? <div className="border-t border-slate-100 px-5 py-4">{footer}</div> : null}
      </div>
    </div>
  )
}

