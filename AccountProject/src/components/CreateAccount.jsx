import React, { useState } from 'react'

const CreateAccount = ({ accountData, setAccountData, minBalance }) => {

  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [accountType, setAccountType] = useState('')
  const [initialBalance, setInitialBalance] = useState('')
  const [msg , setMsg] = useState('')

  const accountNumber = 10000000000 + accountData.length + 1
  const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
  const digitsRegex = /^\d+$/

  const handlesubmit = (e) => {
    e.preventDefault();

    if (name.length === 0) {
      alert("Name cannot be empty !!");
      return;
    } else if (mobile.length !== 10) {
      alert("Please enter a valid 10 digit mobile number !!");
      return;
    } else if (digitsRegex.test(initialBalance) !== true || Number(initialBalance) < 0) {
      alert("Please enter a valid initial balance !!");
      return;
    } else if (accountType.length === 0) {
      alert("Please select an account type !!");
      return;
    } else if (email.length === 0 || !emailValidationRegex.test(email)) {
      alert("Please enter a valid email address !!");
      return;
    } else if (name.trim().split(' ').length < 3) {
      alert("Please enter your full name !!");
      return;
    }

    if (Number(initialBalance) < minBalance) {
      setMsg("Initial balance must be at least " + minBalance + "rs.");
      return;
    }

    const newAccount = {
      accountNumber,
      name,
      mobile,
      email,
      accountType,
      initialBalance
    }

    setAccountData([...accountData, newAccount])

    setName('')
    setMobile('')
    setEmail('')
    setAccountType('')
    setInitialBalance('')
    setMsg('')
  }

  return (
    <div className="flex justify-center items-center flex-col px-4 py-6 bg-gray-900 min-h-screen text-gray-100">

      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
        Enter Account Details
      </h1>

      <form
        onSubmit={handlesubmit}
        className="flex flex-col space-y-3 w-full sm:w-3/4 md:w-1/2 bg-gray-800 p-4 rounded"
      >

        <input
          className="bg-gray-900 border border-gray-700 rounded h-10 px-3 outline-none
                     focus:border-blue-400 hover:border-blue-500 transition"
          type="text"
          value={name}
          placeholder="Enter your full name (Surname first)"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="bg-gray-900 border border-gray-700 rounded h-10 px-3 outline-none
                     focus:border-blue-400 hover:border-blue-500 transition"
          type="tel"
          value={mobile}
          placeholder="Enter mobile number"
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <input
          className="bg-gray-900 border border-gray-700 rounded h-10 px-3 outline-none
                     focus:border-blue-400 hover:border-blue-500 transition"
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="bg-gray-900 border border-gray-700 rounded h-10 px-3 outline-none
                     focus:border-blue-400 hover:border-blue-500 transition"
          type="text"
          value={initialBalance}
          placeholder="Enter initial balance"
          onChange={(e) => setInitialBalance(e.target.value)}
          required
        />
        <div className="text-red-500">{msg}</div>

        {/* Account Type */}
        <div className="flex justify-between items-center gap-4 text-sm sm:text-base">
          <label className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
            <input
              type="radio"
              name="AccountType"
              value="Saving"
              onChange={(e) => setAccountType(e.target.value)}
              className="accent-blue-500"
            />
            Saving Account
          </label>

          <label className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
            <input
              type="radio"
              name="AccountType"
              value="Current"
              onChange={(e) => setAccountType(e.target.value)}
              className="accent-blue-500"
            />
            Current Account
          </label>
        </div>

        <button
          className="h-10 rounded bg-blue-600 hover:bg-blue-700
                     transition font-semibold"
          type="submit"
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default CreateAccount
