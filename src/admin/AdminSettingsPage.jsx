import { useMemo, useState } from 'react'
import { PageShell } from '../components/PageShell.jsx'
import { FormInput } from '../components/FormInput.jsx'
import { Button } from '../components/Button.jsx'
import { adminService, getApiErrorMessage } from '../services/index.js'
import { useToast } from '../context/ToastContext.jsx'
import { SlowStartBanner } from '../components/SlowStartBanner.jsx'
import { useApiState } from '../hooks/useApiState.js'

function Select({ label, value, onChange, options }) {
  return (
    <div className="w-full">
      <label className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
      <select
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export function AdminSettingsPage() {
  const { push } = useToast()
  const apiState = useApiState({ slowAfterMs: 4000 })

  const [minType, setMinType] = useState('SAVING')
  const [withdrawType, setWithdrawType] = useState('SAVING')

  const [minBalance, setMinBalance] = useState('')
  const [withdrawLimit, setWithdrawLimit] = useState('')

  const typeOptions = useMemo(
    () => [
      { value: 'SAVING', label: 'SAVING' },
      { value: 'CURRENT', label: 'CURRENT' },
    ],
    [],
  )

  async function updateMin() {
    apiState.start()
    try {
      await adminService.updateMinBalance(minType, Number(minBalance))
      push({ type: 'success', title: 'Updated', message: `Min balance updated for ${minType}.` })
    } catch (err) {
      push({ type: 'error', title: 'Update failed', message: getApiErrorMessage(err) })
      apiState.fail(err)
    } finally {
      apiState.finish()
    }
  }

  async function updateWithdraw() {
    apiState.start()
    try {
      await adminService.updateWithdrawLimit(withdrawType, Number(withdrawLimit))
      push({ type: 'success', title: 'Updated', message: `Withdraw limit updated for ${withdrawType}.` })
    } catch (err) {
      push({ type: 'error', title: 'Update failed', message: getApiErrorMessage(err) })
      apiState.fail(err)
    } finally {
      apiState.finish()
    }
  }

  return (
    <PageShell title="Rules & Settings" subtitle="Configure account rules for SAVING and CURRENT types.">
      <SlowStartBanner show={apiState.slow} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Minimum Balance</div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Select label="Account type" value={minType} onChange={setMinType} options={typeOptions} />
            <FormInput label="Amount" type="number" placeholder="5000" value={minBalance}
              onChange={(e) => setMinBalance(e.target.value)} />
          </div>
          <div className="mt-4">
            <Button onClick={updateMin} disabled={!minBalance || apiState.loading}>
              {apiState.loading ? 'Updating…' : 'Update minimum balance'}
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Withdraw Limit</div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Select label="Account type" value={withdrawType} onChange={setWithdrawType} options={typeOptions} />
            <FormInput label="Amount" type="number" placeholder="10000" value={withdrawLimit}
              onChange={(e) => setWithdrawLimit(e.target.value)} />
          </div>
          <div className="mt-4">
            <Button onClick={updateWithdraw} disabled={!withdrawLimit || apiState.loading}>
              {apiState.loading ? 'Updating…' : 'Update withdraw limit'}
            </Button>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

