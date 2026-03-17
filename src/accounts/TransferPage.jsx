import { useState } from "react"
import { transactionService } from "../services/transactionService"
import { FormInput } from "../components/FormInput"
import { Button } from "../components/Button"
import { getApiErrorMessage } from "../services"

export function TransferPage() {

    const [fromAccount, setFromAccount] = useState("")
    const [toAccount, setToAccount] = useState("")
    const [amount, setAmount] = useState("")
    const [message, setMessage] = useState("")

    const handleTransfer = async () => {

        try {

            await transactionService.transferMoney(
                fromAccount,
                toAccount,
                amount
            )

            setMessage("Transfer successful")

            setFromAccount("")
            setToAccount("")
            setAmount("")

        } catch (err) {
            setMessage(getApiErrorMessage(err))
        }

    }

    return (

        <div className="p-6">

            <h2 className="text-2xl font-semibold mb-4">
                Transfer Money
            </h2>

            <div className="flex flex-col gap-4 max-w-md">

                <FormInput
                    label="From Account Number"
                    value={fromAccount}
                    onChange={(e) => setFromAccount(e.target.value)}
                />

                <FormInput
                    label="To Account Number"
                    value={toAccount}
                    onChange={(e) => setToAccount(e.target.value)}
                />

                <FormInput
                    label="Amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <Button onClick={handleTransfer}>
                    Transfer Money
                </Button>

                {message && (
                    <p className="text-red-500">
                        {message}
                    </p>
                )}

            </div>

        </div>

    )

}