import { useEffect, useMemo, useState } from 'react'
import { Trash2 } from 'lucide-react'

import { PageShell } from '../components/PageShell.jsx'
import { Table } from '../components/Table.jsx'
import { Button } from '../components/Button.jsx'
import { Modal } from '../components/Modal.jsx'
import { Loader } from '../components/Loader.jsx'
import { SlowStartBanner } from '../components/SlowStartBanner.jsx'
import { useApiState } from '../hooks/useApiState.js'
import { adminService, getApiErrorMessage } from '../services/index.js'
import { useToast } from '../context/ToastContext.jsx'

export function AdminEmployeesPage() {
  const { push } = useToast()
  const apiState = useApiState()
  const [rows, setRows] = useState([])
  const [confirm, setConfirm] = useState({ open: false, emp: null })
  const [deleting, setDeleting] = useState(false)

  async function load() {
    apiState.start()
    try {
      const res = await adminService.getEmployees()
      const list = Array.isArray(res?.data) ? res.data : res?.data?.employees ?? []
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
      { key: 'id', header: 'Employee ID', render: (r) => r?.empId ?? r?.id ?? r?.employeeId ?? '—' },
      { key: 'name', header: 'Name', render: (r) => r?.name ?? r?.fullName ?? '—' },
      { key: 'email', header: 'Email', render: (r) => r?.email ?? '—' },
      { key: 'role', header: 'Role', render: (r) => r?.role ?? r?.userRole ?? 'EMPLOYEE' },
      {
        key: 'actions',
        header: 'Actions',
        render: (r) => (
          <Button
            variant="danger"
            size="sm"
            onClick={() => setConfirm({ open: true, emp: r })}
            disabled={deleting}
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        ),
      },
    ],
    [deleting],
  )

  const rowKey = (r) => String(r?.empId ?? r?.id ?? r?.employeeId ?? Math.random())

  async function onDelete() {
    const emp = confirm.emp
    const empId = emp?.empId ?? emp?.id ?? emp?.employeeId
    if (!empId) return

    try {
      setDeleting(true)
      await adminService.deleteEmployee(empId)
      push({ type: 'success', title: 'Employee deleted', message: `Employee ${empId} removed.` })
      setConfirm({ open: false, emp: null })
      await load()
    } catch (err) {
      push({ type: 'error', title: 'Delete failed', message: getApiErrorMessage(err) })
    } finally {
      setDeleting(false)
    }
  }

  if (apiState.loading && rows.length === 0) {
    return (
      <div className="flex-1">
        <SlowStartBanner show={apiState.slow} />
        <Loader label="Loading employees…" />
      </div>
    )
  }

  return (
    <PageShell
      title="Employees"
      subtitle="View and manage employees."
      right={
        <Button variant="secondary" onClick={load} disabled={apiState.loading}>
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

      <Table columns={columns} rows={rows} rowKey={rowKey} emptyText="No employees found." />

      <Modal
        open={confirm.open}
        title="Delete employee"
        onClose={() => (deleting ? null : setConfirm({ open: false, emp: null }))}
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" onClick={() => setConfirm({ open: false, emp: null })} disabled={deleting}>
              Cancel
            </Button>
            <Button variant="danger" onClick={onDelete} disabled={deleting}>
              {deleting ? 'Deleting…' : 'Delete'}
            </Button>
          </div>
        }
      >
        <div className="text-sm text-slate-700">
          This will permanently delete employee{' '}
          <span className="font-semibold">{confirm.emp?.email ?? confirm.emp?.name ?? 'this user'}</span>.
        </div>
      </Modal>
    </PageShell>
  )
}

