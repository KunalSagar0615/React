import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Pencil } from 'lucide-react'

import { PageShell } from '../components/PageShell.jsx'
import { FormInput } from '../components/FormInput.jsx'
import { Button } from '../components/Button.jsx'
import { SlowStartBanner } from '../components/SlowStartBanner.jsx'
import { useApiState } from '../hooks/useApiState.js'
import { accountService, getApiErrorMessage } from '../services/index.js'
import { useToast } from '../context/ToastContext.jsx'

export function UpdateAccountPage() {
  const { push } = useToast()
  const apiState = useApiState()
  const [params] = useSearchParams()

  const [acno, setAcno] = useState(params.get('acno') ?? '')
  const [form, setForm] = useState({ name: '', email: '', mob: '', address: '' })

  useEffect(() => {
    const p = params.get('acno')
    if (p) setAcno(p)
  }, [params])

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (!acno.trim()) return

    apiState.start()
    try {
      const payload = {
        name: form.name.trim() || undefined,
        email: form.email.trim() || undefined,
        mob: form.mob.trim() || undefined,
        address: form.address.trim() || undefined,
      }
      await accountService.updateAccount(acno.trim(), payload)
      push({ type: 'success', title: 'Updated', message: `Account ${acno.trim()} updated.` })
      setForm({ name: '', email: '', mob: '', address: '' })
    } catch (err) {
      push({ type: 'error', title: 'Update failed', message: getApiErrorMessage(err) })
      apiState.fail(err)
    } finally {
      apiState.finish()
    }
  }

  return (
    <PageShell title="Update Account" subtitle="Update name, email, mobile, or address by account number.">
      <SlowStartBanner show={apiState.slow} />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormInput
            label="Account Number"
            value={acno}
            onChange={(e) => setAcno(e.target.value)}
            placeholder="615025123456"
            required
          />
          <div className="hidden md:block" />
          <FormInput label="Name" value={form.name} onChange={(e) => setField('name', e.target.value)} placeholder="Updated Name" />
          <FormInput label="Email" type="email" value={form.email} onChange={(e) => setField('email', e.target.value)} placeholder="updated@email.com" />
          <FormInput label="Mobile" value={form.mob} onChange={(e) => setField('mob', e.target.value)} placeholder="9876543210" />
          <FormInput label="Address" value={form.address} onChange={(e) => setField('address', e.target.value)} placeholder="New Address" />

          <div className="md:col-span-2 mt-2 flex items-center gap-2">
            <Button type="submit" disabled={apiState.loading || !acno.trim()}>
              <Pencil className="h-4 w-4" />
              {apiState.loading ? 'Updating…' : 'Update account'}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setForm({ name: '', email: '', mob: '', address: '' })
                apiState.setError(null)
              }}
              disabled={apiState.loading}
            >
              Clear
            </Button>
          </div>
        </form>
      </div>

      {apiState.error ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {getApiErrorMessage(apiState.error)}
        </div>
      ) : null}
    </PageShell>
  )
}

