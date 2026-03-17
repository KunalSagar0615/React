import { useMemo, useState } from 'react'
import { UserPlus } from 'lucide-react'

import { PageShell } from '../components/PageShell.jsx'
import { FormInput } from '../components/FormInput.jsx'
import { Button } from '../components/Button.jsx'
import { accountService, getApiErrorMessage } from '../services/index.js'
import { useToast } from '../context/ToastContext.jsx'
import { SlowStartBanner } from '../components/SlowStartBanner.jsx'
import { useApiState } from '../hooks/useApiState.js'

function Segmented({ value, onChange, options }) {
  return (
    <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={[
            'rounded-xl px-3 py-2 text-sm font-semibold transition',
            value === o.value ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50',
          ].join(' ')}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export function CreateAccountPage() {

  const { push } = useToast()
  const apiState = useApiState()

  const [type, setType] = useState('SAVING')

  const [form, setForm] = useState({
    name: '',
    email: '',
    adharNo: '',
    mob: '',
    address: '',
    balance: '',
  })

  const [errors, setErrors] = useState({})

  const options = useMemo(
    () => [
      { value: 'SAVING', label: 'Saving Account' },
      { value: 'CURRENT', label: 'Current Account' },
    ],
    [],
  )

  function setField(key, value) {
    setForm((p) => ({ ...p, [key]: value }))
  }

  async function onSubmit(e) {

    e.preventDefault()

    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!form.email.trim()) nextErrors.email = 'Email is required'
    if (!String(form.mob).trim()) nextErrors.mob = 'Mobile is required'
    if (!String(form.adharNo).trim()) nextErrors.adharNo = 'Adhar is required'
    if (!String(form.balance).trim()) nextErrors.balance = 'Opening balance is required'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) return

    apiState.start()

    try {

      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        adharNo: Number(form.adharNo),
        mob: String(form.mob).trim(),
        address: form.address.trim(),
        balance: Number(form.balance),
      }

      if (type === 'SAVING')
        await accountService.createSavingAccount(payload)
      else
        await accountService.createCurrentAccount(payload)

      push({
        type: 'success',
        title: 'Account created',
        message: `${type} account created successfully.`,
      })

      setForm({
        name: '',
        email: '',
        adharNo: '',
        mob: '',
        address: '',
        balance: '',
      })

      setErrors({})

    } catch (err) {

      push({
        type: 'error',
        title: 'Create failed',
        message: getApiErrorMessage(err),
      })

      apiState.fail(err)

    } finally {

      apiState.finish()

    }
  }

  return (
    <PageShell title="Create Account" subtitle="Create a new SAVING or CURRENT account.">

      <SlowStartBanner show={apiState.slow} />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm font-semibold text-slate-900">Account details</div>
          <Segmented value={type} onChange={setType} options={options} />
        </div>

        <form onSubmit={onSubmit} className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">

          <FormInput
            label="Name"
            placeholder="Kunal Sagar"
            value={form.name}
            onChange={(e) => setField('name', e.target.value)}
            error={errors.name}
            required
          />

          <FormInput
            label="Email"
            placeholder="user@email.com"
            type="email"
            value={form.email}
            onChange={(e) => setField('email', e.target.value)}
            error={errors.email}
            required
          />

          <FormInput
            label="Adhar No"
            placeholder="93316895565"
            value={form.adharNo}
            onChange={(e) => setField('adharNo', e.target.value)}
            error={errors.adharNo}
            required
          />

          <FormInput
            label="Mobile"
            placeholder="7249176496"
            value={form.mob}
            onChange={(e) => setField('mob', e.target.value)}
            error={errors.mob}
            required
          />

          <FormInput
            label="Address"
            placeholder="Atpadi Maharashtra"
            value={form.address}
            onChange={(e) => setField('address', e.target.value)}
          />

          <FormInput
            label="Opening Balance"
            placeholder="60000"
            type="number"
            value={form.balance}
            onChange={(e) => setField('balance', e.target.value)}
            error={errors.balance}
            required
          />

          <div className="md:col-span-2 mt-2 flex items-center gap-2">

            <Button type="submit" disabled={apiState.loading}>
              <UserPlus className="h-4 w-4" />
              {apiState.loading ? 'Creating…' : 'Create account'}
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setForm({ name: '', email: '', adharNo: '', mob: '', address: '', balance: '' })
                setErrors({})
              }}
              disabled={apiState.loading}
            >
              Reset
            </Button>

          </div>

        </form>

      </div>

    </PageShell>
  )
}