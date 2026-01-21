import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const DepositAmount = ({ accountData, setAccountData }) => {
  const [acNo, setAcNo] = useState("");
  const [amt, setAmt] = useState("");
  const [index, setIndex] = useState(null);
  const [msg, setMsg] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [acData, setAcData] = useState(null);

  /* ---------------- SEARCH ACCOUNT ---------------- */
  const handleSearchClick = () => {
    setMsg("");
    setIsSuccessful(false);

    if (!/^\d{11}$/.test(acNo)) {
      alert("Account number must be exactly 11 digits");
      return;
    }

    const acIndex = accountData.findIndex(
      (acc) => acc.accountNumber === Number(acNo)
    );

    if (acIndex === -1) {
      alert("No account found!");
      return;
    }

    setIndex(acIndex);
    setAcData(accountData[acIndex]);
  };

  /* ---------------- DEPOSIT AMOUNT ---------------- */
  const handleDeposit = () => {
    const depositAmt = Number(amt);

    if (!depositAmt || depositAmt <= 0) {
      setMsg("Please enter a valid amount.");
      return;
    }

    // ✅ Update balance immutably
    const updatedAccounts = [...accountData];
    updatedAccounts[index] = {
      ...updatedAccounts[index],
      initialBalance:
        updatedAccounts[index].initialBalance + depositAmt,
    };

    setAccountData(updatedAccounts);
    setIsSuccessful(true);
    setMsg("");

    // ✅ Clear inputs after success
    setAcNo("");
    setAmt("");
    setIndex(null);
    setAcData(null);
  };

  return (
    <div className="flex flex-col items-center px-4 py-6 bg-gray-900 min-h-screen text-gray-100">
      {/* Search Box */}
      <div className="flex items-center gap-2 w-full sm:w-3/4 md:w-1/3 bg-gray-800 p-2 rounded border border-gray-700">
        <input
          type="text"
          placeholder="Enter Account Number"
          className="bg-transparent outline-none w-full"
          value={acNo}
          onChange={(e) => setAcNo(e.target.value)}
        />
        <FaSearch
          className="cursor-pointer text-blue-400 hover:text-blue-500"
          onClick={handleSearchClick}
        />
      </div>

      {/* Account Details */}
      {acData && (
        <div className="mt-6 w-full sm:w-3/4 md:w-1/3 bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-bold mb-3 text-blue-400">
            Deposit Amount
          </h2>

          <p className="mb-1">
            <span className="font-semibold">Name:</span> {acData.name}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Account No:</span>{" "}
            {acData.accountNumber}
          </p>
          <p className="mb-3">
            <span className="font-semibold">Current Balance:</span>{" "}
            {acData.initialBalance} rs
          </p>

          <input
            type="text"
            placeholder="Enter amount (Eg. 1000)"
            className="w-full mb-3 h-10 px-3 bg-gray-900 border border-gray-700 rounded outline-none"
            value={amt}
            onChange={(e) => setAmt(e.target.value)}
          />

          <button
            className="w-full h-10 bg-green-600 hover:bg-green-700 rounded font-semibold"
            onClick={handleDeposit}
          >
            Deposit
          </button>

          {msg && <p className="text-red-500 mt-3">{msg}</p>}
        </div>
      )}

      {/* Success Message */}
      {isSuccessful && (
        <p className="text-green-500 mt-6 font-semibold">
          Deposit successful ✅
        </p>
      )}
    </div>
  );
};

export default DepositAmount;
