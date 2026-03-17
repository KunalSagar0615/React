export function decodeJwtPayload(token) {
  if (!token || typeof token !== 'string') return null
  const parts = token.split('.')
  if (parts.length < 2) return null

  try {
    const base64Url = parts[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, '=')
    const json = decodeURIComponent(
      atob(padded)
        .split('')
        .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
        .join(''),
    )
    return JSON.parse(json)
  } catch {
    return null
  }
}

export function getRoleFromJwt(token) {
  const payload = decodeJwtPayload(token)
  if (!payload) return null

  const role =
    payload.role ??
    payload.roles?.[0] ??
    payload.authority ??
    payload.authorities?.[0] ??
    payload?.claims?.role

  if (typeof role === 'string') return role.toUpperCase()
  if (role && typeof role === 'object' && typeof role.authority === 'string') {
    return role.authority.toUpperCase()
  }
  return null
}

export function isJwtExpired(token, clockSkewSeconds = 10) {
  const payload = decodeJwtPayload(token)
  const exp = payload?.exp
  if (!exp || typeof exp !== 'number') return false
  const now = Math.floor(Date.now() / 1000)
  return exp <= now + clockSkewSeconds
}

