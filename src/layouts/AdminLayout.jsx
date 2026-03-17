import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar.jsx'
import { TopNavbar } from '../components/TopNavbar.jsx'
import { useState } from "react"
import { Menu } from "lucide-react"

const adminNav = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { to: '/admin/employees', label: 'Employees', icon: 'Users' },
  { to: '/admin/settings', label: 'Settings', icon: 'Settings' },
]

export function AdminLayout() {

  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto flex flex-col md:flex-row max-w-[1400px] gap-6 p-4 md:p-6">

        {/* Sidebar */}
        <div
          className={`fixed md:static inset-y-0 left-0 z-40 w-[260px] transform bg-white md:bg-transparent transition-transform duration-200 ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <Sidebar brand="CoreBank" items={adminNav} onItemClick={() => setOpen(false)} />
        </div>

        {/* Mobile Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Page Content */}
        <div className="flex min-w-0 flex-1 flex-col gap-4">

          <TopNavbar />

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setOpen(true)}
              className="w-fit flex items-center rounded-lg border p-2 bg-white shadow-sm"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <Outlet />

        </div>

      </div>

    </div>
  )
}