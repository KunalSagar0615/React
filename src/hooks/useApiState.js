import { useCallback, useMemo, useRef, useState } from 'react'

export function useApiState({ slowAfterMs = 4500 } = {}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [slow, setSlow] = useState(false)
  const startedAtRef = useRef(null)
  const slowTimerRef = useRef(null)

  const start = useCallback(() => {
    startedAtRef.current = Date.now()
    setLoading(true)
    setError(null)
    setSlow(false)
    if (slowTimerRef.current) window.clearTimeout(slowTimerRef.current)
    slowTimerRef.current = window.setTimeout(() => setSlow(true), slowAfterMs)
  }, [slowAfterMs])

  const finish = useCallback(() => {
    setLoading(false)
    if (slowTimerRef.current) window.clearTimeout(slowTimerRef.current)
    slowTimerRef.current = null
    setSlow(false)
  }, [])

  const fail = useCallback((err) => {
    setError(err)
  }, [])

  const durationMs = useMemo(() => {
    if (!startedAtRef.current) return 0
    return Date.now() - startedAtRef.current
  }, [loading, slow])

  return { loading, error, slow, durationMs, start, finish, fail, setError }
}

