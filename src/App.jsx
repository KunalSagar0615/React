import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './routes/ProtectedRoute.jsx'

import { LoginPage } from './auth/LoginPage.jsx'
import { RegisterPage } from './auth/RegisterPage.jsx'

import { AdminLayout } from './layouts/AdminLayout.jsx'
import { EmployeeLayout } from './layouts/EmployeeLayout.jsx'

import { AdminDashboardPage } from './admin/AdminDashboardPage.jsx'
import { AdminEmployeesPage } from './admin/AdminEmployeesPage.jsx'
import { AdminSettingsPage } from './admin/AdminSettingsPage.jsx'

import { EmployeeDashboardPage } from './employee/EmployeeDashboardPage.jsx'

import { TransferPage } from './accounts/TransferPage.jsx'
import { CreateAccountPage } from './accounts/CreateAccountPage.jsx'
import { AccountsListPage } from './accounts/AccountsListPage.jsx'
import { AccountSearchPage } from './accounts/AccountSearchPage.jsx'
import { DepositPage } from './accounts/DepositPage.jsx'
import { WithdrawPage } from './accounts/WithdrawPage.jsx'
import { UpdateAccountPage } from './accounts/UpdateAccountPage.jsx'
import { TransactionsPage } from './transactions/TransactionsPage.jsx'

import { NotFoundPage } from './pages/NotFoundPage.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute requiredRole="ADMIN">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="employees" element={<AdminEmployeesPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>

      <Route
        path="/employee"
        element={
          <ProtectedRoute requiredRole="EMPLOYEE">
            <EmployeeLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<EmployeeDashboardPage />} />
      </Route>

      <Route
        path="/accounts"
        element={
          <ProtectedRoute requiredRole="EMPLOYEE">
            <EmployeeLayout />
          </ProtectedRoute>
        }
      >

        <Route path="create" element={<CreateAccountPage />} />
        <Route path="list" element={<AccountsListPage />} />
        <Route path="search" element={<AccountSearchPage />} />
        <Route path="deposit" element={<DepositPage />} />
        <Route path="withdraw" element={<WithdrawPage />} />
        <Route path="update" element={<UpdateAccountPage />} />
        <Route path="transfer" element={<TransferPage />} />
        <Route path="transactions" element={<TransactionsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App