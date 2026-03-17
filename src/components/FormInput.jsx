export function FormInput({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  name,
  required,
  disabled,
  error,
  helperText,
  rightSlot,
}) {
  return (
    <div className="w-full">
      {label ? (
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          {label} {required ? <span className="text-rose-600">*</span> : null}
        </label>
      ) : null}
      <div className="relative">
        <input
          className={[
            'w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition',
            error ? 'border-rose-300 focus:border-rose-400 focus:ring-4 focus:ring-rose-100' : 'border-slate-200 focus:border-slate-300 focus:ring-4 focus:ring-slate-100',
            disabled ? 'cursor-not-allowed bg-slate-50 text-slate-500' : '',
            rightSlot ? 'pr-10' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          required={required}
          disabled={disabled}
        />
        {rightSlot ? <div className="absolute right-2.5 top-1/2 -translate-y-1/2">{rightSlot}</div> : null}
      </div>
      {error ? <div className="mt-1 text-xs font-medium text-rose-700">{error}</div> : null}
      {helperText && !error ? <div className="mt-1 text-xs text-slate-500">{helperText}</div> : null}
    </div>
  )
}

