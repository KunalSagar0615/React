import { ArrowUpFromLine } from 'lucide-react'
import { TransactionPage } from './TransactionPage.jsx'

export function WithdrawPage() {
  return (
    <TransactionPage
      title="Withdraw"
      subtitle="Debit money from an account."
      action="withdraw"
      icon={ArrowUpFromLine}
    />
  )
}