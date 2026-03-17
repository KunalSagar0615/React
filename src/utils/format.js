export function formatINR(amount) {
  const n = Number(amount)
  if (!Number.isFinite(n)) return '—'
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(n)
  } catch {
    return `₹${Math.round(n).toLocaleString('en-IN')}`
  }
}

export function formatNumber(n) {
  const v = Number(n)
  if (!Number.isFinite(v)) return '—'
  return v.toLocaleString('en-IN')
}

export function toDateLabel(value) {
  if (!value) return '—'
  const d = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(d.getTime())) return String(value)
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

export function toTimeLabel(value) {
  if (!value) return '—'
  const d = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(d.getTime())) return String(value)
  return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
}

export function normalizeAccountType(t) {
  const s = String(t ?? '').toUpperCase()
  if (s.includes('SAV')) return 'SAVING'
  if (s.includes('CUR')) return 'CURRENT'
  return s || '—'
}

