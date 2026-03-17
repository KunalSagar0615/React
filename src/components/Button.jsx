export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition shadow-sm disabled:cursor-not-allowed disabled:opacity-60'
  const sizes =
    size === 'sm' ? 'px-3 py-2 text-sm' : size === 'lg' ? 'px-5 py-3 text-sm' : 'px-4 py-2.5 text-sm'
  const variants =
    variant === 'secondary'
      ? 'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
      : variant === 'danger'
        ? 'bg-rose-600 text-white hover:bg-rose-700'
        : 'bg-slate-900 text-white hover:bg-slate-800'

  return (
    <button className={[base, sizes, variants, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}

