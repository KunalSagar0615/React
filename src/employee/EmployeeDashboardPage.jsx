import { useEffect, useMemo, useState } from 'react'
import { ArrowDownToLine, ArrowUpFromLine, Layers3, RefreshCcw, ReceiptText } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { PageShell } from '../components/PageShell.jsx'
import { DashboardCard } from '../components/DashboardCard.jsx'
import { Loader } from '../components/Loader.jsx'
import { SlowStartBanner } from '../components/SlowStartBanner.jsx'
import { Button } from '../components/Button.jsx'
import { useApiState } from '../hooks/useApiState.js'
import { accountService, transactionService, getApiErrorMessage } from '../services/index.js'
import { formatINR, formatNumber, normalizeAccountType, toDateLabel } from '../utils/format.js'

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-4 h-[260px]">{children}</div>
    </div>
  )
}

export function EmployeeDashboardPage() {
  const apiState = useApiState()
  const [accounts, setAccounts] = useState([])
  const [recentTx, setRecentTx] = useState([])

  async function load() {
    apiState.start()
    try {
      const accRes = await accountService.getAllAccounts()
      const acc = Array.isArray(accRes?.data) ? accRes.data : accRes?.data?.accounts ?? []
      setAccounts(acc)

      const transactions = await Promise.all(
        acc.map(async (account) => {

          const acno = Number(
            account?.acno ??account?.accountNumber ??account?.accountNo ??account?.account_number ??account?.accountnumber
          )
          if (!acno) return []
          try {
            const txRes = await transactionService.getAccountTransactions(acno)
            return Array.isArray(txRes?.data)
              ? txRes.data
              : txRes?.data?.transactions ?? []

          } catch {
              return []
          }
        })
      )
      const allTransactions = transactions.flat()
      setRecentTx(allTransactions.slice(0, 25))

    } catch (err) {
      apiState.fail(err)
    } finally {
      apiState.finish()
    }
  }

  useEffect(() => {
    load()
  }, [])

  const totals = useMemo(() => {
    const totalAccounts = accounts.length
    const todayKey = new Date().toISOString().slice(0, 10)
    const todays = recentTx.filter((t) => {
      const d = String(
        t?.transitionDate ??
        t?.date ??
        t?.transactionDate ??
        t?.createdAt ??
        t?.timestamp ??
        ''
      )
      return d.slice(0, 10) === todayKey
    })

    const depositsToday = todays
      .filter((t) => String(t?.transactionType ?? t?.type ?? '').toUpperCase().includes('CREDIT'))
      .reduce((sum, t) => sum + Number(t?.amount ?? 0), 0)
    const withdrawalsToday = todays
      .filter((t) => String(t?.transactionType ?? t?.type ?? '').toUpperCase().includes('DEBIT'))
      .reduce((sum, t) => sum + Number(t?.amount ?? 0), 0)

    return { totalAccounts, depositsToday, withdrawalsToday }
  }, [accounts, recentTx])

  const depositVsWithdraw = useMemo(() => {
    const credit = recentTx
      .filter((t) => String(t?.transactionType ?? t?.type ?? '').toUpperCase().includes('CREDIT'))
      .reduce((sum, t) => sum + Number(t?.amount ?? 0), 0)
    const debit = recentTx
      .filter((t) => String(t?.transactionType ?? t?.type ?? '').toUpperCase().includes('DEBIT'))
      .reduce((sum, t) => sum + Number(t?.amount ?? 0), 0)
    return [
      { name: 'Deposits', amount: credit },
      { name: 'Withdrawals', amount: debit },
    ]
  }, [recentTx])

  const dailyActivity = useMemo(() => {
    const buckets = new Map()
    for (const t of recentTx) {
      const d = t?.date ?? t?.transactionDate ?? t?.createdAt ?? t?.timestamp
      const key = d ? String(d).slice(0, 10) : '—'
      buckets.set(key, (buckets.get(key) ?? 0) + 1)
    }
    return Array.from(buckets.entries())
      .map(([date, count]) => ({ date, count, label: toDateLabel(date) }))
      .slice(-10)
  }, [recentTx])

  if (apiState.loading && accounts.length === 0) {
    return (
      <div className="flex-1">
        <SlowStartBanner show={apiState.slow} />
        <Loader label="Loading employee dashboard…" />
      </div>
    )
  }

  return (
    <PageShell
      title="Employee Dashboard"
      subtitle='Overview of account and transaction activity.'
      right={
        <Button variant="secondary" onClick={load} disabled={apiState.loading}>
          <RefreshCcw className="h-4 w-4" />
          Refresh
        </Button>
      }
    >
      <SlowStartBanner show={apiState.slow} />

      {apiState.error ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {getApiErrorMessage(apiState.error)}
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Total Accounts" value={formatNumber(totals.totalAccounts)} icon={Layers3} tone="violet" />
        <DashboardCard title="Deposits Today" value={formatINR(totals.depositsToday)} icon={ArrowDownToLine} tone="emerald" />
        <DashboardCard title="Withdrawals Today" value={formatINR(totals.withdrawalsToday)} icon={ArrowUpFromLine} tone="amber" />
        <DashboardCard
          title="Recent Transactions"
          value={formatNumber(recentTx.length)}
          icon={ReceiptText}
          tone="sky"
          subtext="Across all accounts"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card title="Deposit vs Withdraw (sample)">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={depositVsWithdraw}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#0f172a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Daily transaction activity (sample)">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dailyActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#64748b" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </PageShell>
  )
}

