import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'

const ToastContext = createContext(null)

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const timeoutsRef = useRef(new Map())

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
    const t = timeoutsRef.current.get(id)
    if (t) window.clearTimeout(t)
    timeoutsRef.current.delete(id)
  }, [])

  const push = useCallback(
    (toast) => {
      const id = uid()
      const item = {
        id,
        type: toast?.type ?? 'info',
        title: toast?.title ?? '',
        message: toast?.message ?? '',
        durationMs: toast?.durationMs ?? 3500,
      }
      setToasts((prev) => [item, ...prev].slice(0, 4))
      const timeout = window.setTimeout(() => removeToast(id), item.durationMs)
      timeoutsRef.current.set(id, timeout)
      return id
    },
    [removeToast],
  )

  const value = useMemo(() => ({ toasts, push, removeToast }), [toasts, push, removeToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-4 z-50 flex w-[360px] max-w-[calc(100vw-2rem)] flex-col gap-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.10)]"
            role="status"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                {t.title ? (
                  <div className="text-sm font-semibold text-slate-900">{t.title}</div>
                ) : null}
                {t.message ? (
                  <div className="mt-1 text-sm text-slate-600">{t.message}</div>
                ) : null}
                <div className="mt-2">
                  <span
                    className={[
                      'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
                      t.type === 'success' && 'bg-emerald-50 text-emerald-700',
                      t.type === 'error' && 'bg-rose-50 text-rose-700',
                      t.type === 'warning' && 'bg-amber-50 text-amber-700',
                      t.type === 'info' && 'bg-sky-50 text-sky-700',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {String(t.type).toUpperCase()}
                  </span>
                </div>
              </div>
              <button
                onClick={() => removeToast(t.id)}
                className="rounded-lg px-2 py-1 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                aria-label="Close toast"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

