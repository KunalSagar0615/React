import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

import { PageShell } from '../components/PageShell.jsx'
import { FormInput } from '../components/FormInput.jsx'
import { Button } from '../components/Button.jsx'
import { Loader } from '../components/Loader.jsx'
import { SlowStartBanner } from '../components/SlowStartBanner.jsx'
import { useApiState } from '../hooks/useApiState.js'
import { accountService, getApiErrorMessage } from '../services/index.js'
import { normalizeAccountType } from '../utils/format.js'

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

export function AccountSearchPage() {
  const apiState = useApiState()
  const [mode, setMode] = useState('ACCOUNT') // ACCOUNT | EMAIL | MOBILE
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)

  const options = useMemo(
    () => [
      { value: 'ACCOUNT', label: 'By Account Number' },
      { value: 'EMAIL', label: 'By Email' },
      { value: 'MOBILE', label: 'By Mobile' },
    ],
    [],
  )

  async function onSearch() {
    if (!query.trim()) return
    apiState.start()
    try {
      let res
      if (mode === 'EMAIL') res = await accountService.searchByEmail(query.trim())
      else if (mode === 'MOBILE') res = await accountService.searchByMobile(query.trim())
      else res = await accountService.searchByAccountNumber(query.trim())

      const data = res?.data
      setResult(data)
    } catch (err) {
      apiState.fail(err)
      setResult(null)
    } finally {
      apiState.finish()
    }
  }

  return (
    <PageShell title="Search Account" subtitle="Find account details and quickly check balance from operations pages.">
      <SlowStartBanner show={apiState.slow} />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Select label="Search mode" value={mode} onChange={setMode} options={options} />
          <div className="md:col-span-2">
            <FormInput
              label="Query"
              placeholder={mode === 'EMAIL' ? 'user@email.com' : mode === 'MOBILE' ? '9876543210' : '615025123456'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rightSlot={<Search className="h-4 w-4 text-slate-400" />}
            />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Button onClick={onSearch} disabled={!query.trim() || apiState.loading}>
            {apiState.loading ? 'Searching…' : 'Search'}
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setQuery('')
              setResult(null)
              apiState.setError(null)
            }}
            disabled={apiState.loading}
          >
            Clear
          </Button>
        </div>
      </div>

      {apiState.loading ? <Loader label="Fetching account…" /> : null}

      {apiState.error ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {getApiErrorMessage(apiState.error)}
        </div>
      ) : null}

      {result ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Result</div>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            <Field label="Account Number" value={result?.acno ?? result?.accountNumber ?? result?.accountNo} />
            <Field label="Account Type" value={normalizeAccountType(result?.type ?? result?.accountType)} />
            <Field label="Name" value={result?.name} />
            <Field label="Email" value={result?.email} />
            <Field label="Mobile" value={result?.mob ?? result?.mobile} />
            <Field label="Address" value={result?.address} />
          </div>
        </div>
      ) : null}
    </PageShell>
  )
}

function Field({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
      <div className="text-xs font-semibold text-slate-600">{label}</div>
      <div className="mt-1 truncate text-sm text-slate-900">{value ?? '—'}</div>
    </div>
  )
}

