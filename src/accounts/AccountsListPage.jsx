import { useEffect, useMemo, useState } from 'react'
import { Eye, RefreshCcw, ShieldAlert, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { PageShell } from '../components/PageShell.jsx'
import { Table } from '../components/Table.jsx'
import { Button } from '../components/Button.jsx'
import { Modal } from '../components/Modal.jsx'
import { Loader } from '../components/Loader.jsx'
import { SlowStartBanner } from '../components/SlowStartBanner.jsx'
import { useApiState } from '../hooks/useApiState.js'
import { accountService, getApiErrorMessage } from '../services/index.js'
import { useToast } from '../context/ToastContext.jsx'
import { formatINR, normalizeAccountType } from '../utils/format.js'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">
      {children}
    </span>
  )
}

export function AccountsListPage() {
  const navigate = useNavigate()
  const { push } = useToast()
  const apiState = useApiState()

  const [filter, setFilter] = useState('ALL') // ALL | SAVING | CURRENT
  const [rows, setRows] = useState([])
  const [closing, setClosing] = useState({ open: false, acno: null })
  const [busy, setBusy] = useState(false)

  async function load(nextFilter = filter) {
    apiState.start()
    try {
      let res
      if (nextFilter === 'SAVING') res = await accountService.getAllSavingAccounts()
      else if (nextFilter === 'CURRENT') res = await accountService.getAllCurrentAccounts()
      else res = await accountService.getAllAccounts()

      const list = Array.isArray(res?.data) ? res.data : res?.data?.accounts ?? []
      setRows(list)
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

  const columns = useMemo(
    () => [
      {
        key: 'acno',
        header: 'Account Number',
        render: (r) => r?.acno ?? r?.accountNumber ?? r?.accountNo ?? '—',
      },
      { key: 'name', header: 'Name', render: (r) => r?.name ?? '—' },
      { key: 'email', header: 'Email', render: (r) => r?.email ?? '—' },
      { key: 'mobileNo', header: 'Mobile', render: (r) => r?.mobileNo ?? '—' },
      {
        key: 'type',
        header: 'Account Type',
        render: (r) => <Pill>{normalizeAccountType(r?.type ?? r?.accountType)}</Pill>,
      },
      {
        key: 'actions',
        header: 'Actions',
        render: (r) => {
          const acno = r?.acno ?? r?.accountNumber ?? r?.accountNo
          return (
            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => navigate(`/accounts/transactions?acno=${encodeURIComponent(String(acno ?? ''))}`)}
                disabled={!acno}
              >
                <Eye className="h-4 w-4" />
                Transactions
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => navigate(`/accounts/update?acno=${encodeURIComponent(String(acno ?? ''))}`)}
                disabled={!acno}
              >
                Update
              </Button>
              <Button size="sm" variant="danger" onClick={() => setClosing({ open: true, acno })} disabled={!acno || busy}>
                <Trash2 className="h-4 w-4" />
                Close
              </Button>
            </div>
          )
        },
      },
    ],
    [navigate, busy],
  )

  const rowKey = (r) => String(r?.acno ?? r?.accountNumber ?? r?.accountNo ?? Math.random())

  async function onCloseAccount() {
    if (!closing.acno) return
    try {
      setBusy(true)
      await accountService.closeAccount(closing.acno)
      push({ type: 'success', title: 'Account closed', message: `Account ${closing.acno} closed.` })
      setClosing({ open: false, acno: null })
      await load()
    } catch (err) {
      push({ type: 'error', title: 'Close failed', message: getApiErrorMessage(err) })
    } finally {
      setBusy(false)
    }
  }

  if (apiState.loading && rows.length === 0) {
    return (
      <div className="flex-1">
        <SlowStartBanner show={apiState.slow} />
        <Loader label="Loading accounts…" />
      </div>
    )
  }

  return (
    <PageShell
      title="Accounts"
      subtitle="Browse all accounts and filter by type."
      right={
        <Button variant="secondary" onClick={() => load()} disabled={apiState.loading}>
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

      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant={filter === 'ALL' ? 'primary' : 'secondary'}
          onClick={() => {
            setFilter('ALL')
            load('ALL')
          }}
        >
          All
        </Button>
        <Button
          variant={filter === 'SAVING' ? 'primary' : 'secondary'}
          onClick={() => {
            setFilter('SAVING')
            load('SAVING')
          }}
        >
          Saving
        </Button>
        <Button
          variant={filter === 'CURRENT' ? 'primary' : 'secondary'}
          onClick={() => {
            setFilter('CURRENT')
            load('CURRENT')
          }}
        >
          Current
        </Button>
        <div className="text-xs text-slate-500">
          Tip: for balances use the Search page or Transactions page (per account).
        </div>
      </div>

      <Table columns={columns} rows={rows} rowKey={rowKey} emptyText="No accounts found." />

      <Modal
        open={closing.open}
        title="Close account"
        onClose={() => (busy ? null : setClosing({ open: false, acno: null }))}
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" onClick={() => setClosing({ open: false, acno: null })} disabled={busy}>
              Cancel
            </Button>
            <Button variant="danger" onClick={onCloseAccount} disabled={busy}>
              {busy ? 'Closing…' : 'Close account'}
            </Button>
          </div>
        }
      >
        <div className="flex items-start gap-3 text-sm text-slate-700">
          <ShieldAlert className="h-5 w-5 text-amber-600" />
          <div>
            You’re about to close account <span className="font-semibold">{closing.acno}</span>. This action is not
            reversible.
          </div>
        </div>
      </Modal>
    </PageShell>
  )
}

