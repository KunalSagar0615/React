import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Activity, RefreshCcw } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import { PageShell } from '../components/PageShell.jsx'
import { FormInput } from '../components/FormInput.jsx'
import { Button } from '../components/Button.jsx'
import { Table } from '../components/Table.jsx'
import { Loader } from '../components/Loader.jsx'
import { SlowStartBanner } from '../components/SlowStartBanner.jsx'
import { useApiState } from '../hooks/useApiState.js'
import { transactionService, getApiErrorMessage } from '../services/index.js'
import { formatINR, toDateLabel, toTimeLabel } from '../utils/format.js'
import { Download } from "lucide-react"

function TypeTag({ type }) {
  const t = String(type ?? '').toUpperCase()
  const isCredit = t.includes('CREDIT')
  const isDebit = t.includes('DEBIT')
  const cls = isCredit
    ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
    : isDebit
      ? 'border-rose-200 bg-rose-50 text-rose-700'
      : 'border-slate-200 bg-slate-50 text-slate-700'
  return <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold ${cls}`}>{t || '—'}</span>
}

export function TransactionsPage() {
  const apiState = useApiState()
  const [params] = useSearchParams()
  const [acno, setAcno] = useState(params.get('acno') ?? '')
  const [rows, setRows] = useState([])

  useEffect(() => {
    const p = params.get('acno')
    if (p) setAcno(p)
  }, [params])

  async function load() {
    if (!acno.trim()) return
    apiState.start()
    try {
      const res = await transactionService.getAccountTransactions(acno.trim())
      const list = Array.isArray(res?.data) ? res.data : res?.data?.transactions ?? []
      setRows(list)
    } catch (err) {
      apiState.fail(err)
      setRows([])
    } finally {
      apiState.finish()
    }
  }

  function downloadPdf() {

    if (!rows.length) return

    const doc = new jsPDF()

    doc.setFontSize(16)
    doc.text("Keystone Banking Application", 14, 15)

    doc.setFontSize(12)
    doc.text(`Account Number: ${acno}`, 14, 25)

    const tableData = rows.map(t => [
      t.transitionId,
      toDateLabel(t.transitionDate),
      toTimeLabel(t.transitionTime),
      `₹${t.amount}`,
      t.transactionType
    ])

    autoTable(doc, {
      startY: 35,
      head: [["Transaction ID", "Date", "Time", "Amount", "Type"]],
      body: tableData
    })

    doc.save(`transactions_${acno}.pdf`)
  }

  const columns = useMemo(
    () => [
      { key: 'id', header: 'Transaction ID', render: (r) => r?.transitionId ?? '—' },
      { key: 'date', header: 'Date', render: (r) => toDateLabel(r?.transitionDate) },
      { key: 'time', header: 'Time', render: (r) => toTimeLabel(r?.transitionTime) },
      { key: 'amount', header: 'Amount', render: (r) => formatINR(r?.amount) },
      { key: 'type', header: 'Transaction Type', render: (r) => <TypeTag type={r?.transactionType} /> },
    ],
    [],
  )

  const rowKey = (r) => String(r?.transactionId ?? r?.id ?? Math.random())

  const daily = useMemo(() => {
    const buckets = new Map()
    for (const t of rows) {
      const d = t?.date ?? t?.transactionDate ?? t?.createdAt ?? t?.timestamp
      const key = d ? String(d).slice(0, 10) : '—'
      buckets.set(key, (buckets.get(key) ?? 0) + 1)
    }
    return Array.from(buckets.entries())
      .map(([date, count]) => ({ date: toDateLabel(date), count }))
      .slice(-12)
  }, [rows])

  return (
    <PageShell
      title="Transaction History"
      subtitle="Enter an account number to view its transaction history."
      right={
        <Button variant="secondary" onClick={load} disabled={apiState.loading || !acno.trim()}>
          <RefreshCcw className="h-4 w-4" />
          Refresh
        </Button>
      }
    >
      <SlowStartBanner show={apiState.slow} />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-end">
          <div className="flex-1">
            <FormInput label="Account Number" value={acno} onChange={(e) => setAcno(e.target.value)} placeholder="615025123456" />
          </div>
          <div className="flex items-center gap-2">

            <Button onClick={load} disabled={apiState.loading || !acno.trim()}>
              {apiState.loading ? 'Loading…' : 'Load transactions'}
            </Button>

            <Button variant="secondary" onClick={downloadPdf} disabled={!rows.length}>
              <Download className="h-4 w-4" />
              Download PDF
            </Button>

          </div>
        </div>
      </div>

      {apiState.loading ? <Loader label="Fetching transactions…" /> : null}

      {apiState.error ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {getApiErrorMessage(apiState.error)}
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <Table columns={columns} rows={rows} rowKey={rowKey} emptyText="No transactions found." />
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <div className="text-sm font-semibold text-slate-900">Daily activity</div>
            <Activity className="h-4 w-4 text-slate-500" />
          </div>
          <div className="mt-4 h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={daily}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#0f172a" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

