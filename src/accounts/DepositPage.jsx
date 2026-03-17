import { ArrowDownToLine } from 'lucide-react'
import { TransactionPage } from './TransactionPage.jsx'

export function DepositPage() {
  return (
    <TransactionPage
      title="Deposit"
      subtitle="Credit money to an account."
      action="deposit"
      icon={ArrowDownToLine}
    />
  )
}