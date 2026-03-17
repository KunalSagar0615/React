import { useState } from 'react'
import { PageShell } from '../components/PageShell.jsx'
import { FormInput } from '../components/FormInput.jsx'
import { Button } from '../components/Button.jsx'
import { SlowStartBanner } from '../components/SlowStartBanner.jsx'
import { useApiState } from '../hooks/useApiState.js'
import { accountService, getApiErrorMessage } from '../services/index.js'
import { useToast } from '../context/ToastContext.jsx'
import { formatINR } from '../utils/format.js'

export function TransactionPage({ title, subtitle, action, icon: Icon }) {

  const { push } = useToast()
  const apiState = useApiState()

  const [acno, setAcno] = useState('')
  const [amount, setAmount] = useState('')
  const [balance, setBalance] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()

    if (!acno.trim() || !amount) return

    apiState.start()

    try {

      if (action === "deposit") {
        await accountService.deposit(acno.trim(), Number(amount))
      } else {
        await accountService.withdraw(acno.trim(), Number(amount))
      }

      push({
        type: 'success',
        title: `${title} successful`,
        message: `${title} ${formatINR(amount)} completed`
      })

      const balRes = await accountService.checkBalance(acno.trim())
      setBalance(balRes?.data ?? null)

    } catch (err) {

      push({
        type: 'error',
        title: `${title} failed`,
        message: getApiErrorMessage(err)
      })

      apiState.fail(err)

    } finally {
      apiState.finish()
    }
  }

  return (
    <PageShell title={title} subtitle={subtitle}>

      <SlowStartBanner show={apiState.slow} />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">

          <FormInput
            label="Account Number"
            value={acno}
            onChange={(e) => setAcno(e.target.value)}
            required
          />

          <FormInput
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            required
          />

          <div className="md:col-span-2 mt-2 flex gap-2">

            <Button type="submit" disabled={apiState.loading}>
              <Icon className="h-4 w-4" />
              {apiState.loading ? "Processing..." : title}
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setAcno('')
                setAmount('')
                setBalance(null)
              }}
            >
              Clear
            </Button>

          </div>

        </form>

      </div>

      {balance && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold">Updated balance</div>
          <div className="mt-2">
            {balance?.name}: {formatINR(balance?.balance)}
          </div>
        </div>
      )}

    </PageShell>
  )
}