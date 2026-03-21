import { useEffect, useMemo, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Banknote, Coins, Layers3, ReceiptText, RefreshCcw, Users } from 'lucide-react'

import { PageShell } from '../components/PageShell.jsx'
import { DashboardCard } from '../components/DashboardCard.jsx'
import { Loader } from '../components/Loader.jsx'
import { SlowStartBanner } from '../components/SlowStartBanner.jsx'
import { useApiState } from '../hooks/useApiState.js'
import { adminService, accountService, transactionService, getApiErrorMessage } from '../services/index.js'
import { formatINR, formatNumber, normalizeAccountType } from '../utils/format.js'
import { Button } from '../components/Button.jsx'

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-4 h-65">{children}</div>
    </div>
  )
}

export function AdminDashboardPage() {
  const apiState = useApiState()
  const [employees, setEmployees] = useState([])
  const [accounts, setAccounts] = useState([])
  const [sampleTx, setSampleTx] = useState([])

  async function load() {
    apiState.start()
    try {
      const [empRes, accRes] = await Promise.all([adminService.getEmployees(), accountService.getAllAccounts()])
      const emp = Array.isArray(empRes?.data) ? empRes.data : empRes?.data?.employees ?? []
      const acc = Array.isArray(accRes?.data) ? accRes.data : accRes?.data?.accounts ?? []
      setEmployees(emp)
      setAccounts(acc)

      const transactions = await Promise.all(
        acc.map(async (account) => {

          const acno =
            account?.acno ??
            account?.accountNumber ??
            account?.accountNo ??
            account?.account_number ??
            account?.accountnumber

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

      setSampleTx(allTransactions)
    } catch (err) {
      apiState.fail(err)
    } finally {
      apiState.finish()
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totals = useMemo(() => {
    const totalEmployees = employees.length
    const totalAccounts = accounts.length
    const totalTransactions = sampleTx.length
    const totalDeposits = sampleTx
      .filter((t) => String(t?.transactionType ?? t?.type ?? '').toUpperCase().includes('CREDIT'))
      .reduce((sum, t) => sum + Number(t?.amount ?? 0), 0)

    return { totalEmployees, totalAccounts, totalTransactions, totalDeposits }
  }, [employees, accounts, sampleTx])

  const accountsByType = useMemo(() => {
    const counts = new Map()
    for (const a of accounts) {
      const type = normalizeAccountType(a?.type ?? a?.accountType ?? a?.account_type)
      counts.set(type, (counts.get(type) ?? 0) + 1)
    }
    return Array.from(counts.entries()).map(([type, count]) => ({ type, count }))
  }, [accounts])

  const savingVsCurrent = useMemo(() => {
    const saving = accounts.filter((a) => normalizeAccountType(a?.type ?? a?.accountType) === 'SAVING').length
    const current = accounts.filter((a) => normalizeAccountType(a?.type ?? a?.accountType) === 'CURRENT').length
    return [
      { name: 'Saving', value: saving },
      { name: 'Current', value: current },
    ]
  }, [accounts])

  const txOverTime = useMemo(() => {
    const buckets = new Map()
    for (const t of sampleTx) {
      const d = t?.date ?? t?.transactionDate ?? t?.createdAt ?? t?.timestamp
      const key = d ? String(d).slice(0, 10) : '—'
      buckets.set(key, (buckets.get(key) ?? 0) + 1)
    }
    return Array.from(buckets.entries())
      .map(([date, count]) => ({ date, count }))
      .slice(-14)
  }, [sampleTx])

  if (apiState.loading && accounts.length === 0 && employees.length === 0) {
    return (
      <div className="flex-1">
        <SlowStartBanner show={apiState.slow} />
        <Loader label="Loading admin analytics…" />
      </div>
    )
  }

  return (
    <PageShell
      title="Admin Dashboard"
      subtitle="High-level computed analytics."
      right={
        <Button variant="secondary" onClick={load}>
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
        <DashboardCard title="Total Employees" value={formatNumber(totals.totalEmployees)} icon={Users} tone="sky" />
        <DashboardCard title="Total Accounts" value={formatNumber(totals.totalAccounts)} icon={Layers3} tone="violet" />
        <DashboardCard
          title="Total Transactions"
          value={formatNumber(totals.totalTransactions)}
          icon={ReceiptText}
          tone="amber"
          subtext={accounts.length ? ' ' : 'No accounts yet'}
        />
        <DashboardCard title="Total Deposits" value={formatINR(totals.totalDeposits)} icon={Coins} tone="emerald" />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card title="Accounts by type">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={accountsByType}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#0f172a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Saving vs Current">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip />
              <Pie data={savingVsCurrent} dataKey="value" nameKey="name" innerRadius={55} outerRadius={95} paddingAngle={2}>
                {savingVsCurrent.map((_, idx) => (
                  <Cell key={idx} fill={getPieColor(idx)} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Transactions over time">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={txOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#0f172a" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      
    </PageShell>
  )
}

function getPieColor(index) {
  const colors = ['#0f172a', '#64748b', '#94a3b8', '#cbd5e1']
  return colors[index % colors.length]
}

