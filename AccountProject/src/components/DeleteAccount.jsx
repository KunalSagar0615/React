import React, { useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";

const DeleteAccount = ({ accountData, setAccountData }) => {

  const [acNo, setAcNo] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success | error
  const [foundAccount, setFoundAccount] = useState(null);

  const handleSearch = () => {
    setMessage("");
    setFoundAccount(null);

    if (!/^\d{11}$/.test(acNo)) {
      setMessage("Account number must be exactly 11 digits.");
      setMessageType("error");
      return;
    }

    const account = accountData.find(
      acc => acc.accountNumber === Number(acNo)
    );

    if (!account) {
      setMessage("No account found with this account number.");
      setMessageType("error");
      return;
    }

    setFoundAccount(account);
  };

  const handleDelete = () => {
    const updatedAccounts = accountData.filter(
      acc => acc.accountNumber !== Number(acNo)
    );

    setAccountData(updatedAccounts);
    setFoundAccount(null);
    setAcNo("");
    setMessage("Account deleted successfully.");
    setMessageType("success");
  };

  return (
    <div className="flex flex-col items-center px-4 py-6 bg-gray-900 min-h-screen text-gray-100">

      {/* Search Box */}
      <div className="border border-gray-700 bg-gray-800 p-2 flex items-center gap-2 mb-4 w-full sm:w-3/4 md:w-1/3 rounded">
        <input
          type="text"
          placeholder="Enter Account Number"
          className="bg-transparent outline-none w-full text-gray-100 placeholder-gray-400"
          value={acNo}
          onChange={(e) => setAcNo(e.target.value)}
        />
        <FaSearch
          className="cursor-pointer text-blue-400 hover:text-blue-500 transition"
          onClick={handleSearch}
        />
      </div>

      {/* Message */}
      {message && (
        <div
          className={`mb-4 w-full sm:w-3/4 md:w-1/3 text-center p-2 rounded
          ${messageType === "success"
            ? "bg-green-900 text-green-300 border border-green-700"
            : "bg-red-900 text-red-300 border border-red-700"}`}
        >
          {message}
        </div>
      )}

      {/* Account Details */}
      {foundAccount && (
        <div className="border border-gray-700 bg-gray-800 p-4 w-full sm:w-3/4 md:w-1/3 space-y-2 rounded">

          <p><b className="text-gray-300">Account Number:</b> {foundAccount.accountNumber}</p>
          <p><b className="text-gray-300">Name:</b> {foundAccount.name}</p>
          <p><b className="text-gray-300">Mobile:</b> {foundAccount.mobile}</p>
          <p><b className="text-gray-300">Email:</b> {foundAccount.email}</p>
          <p><b className="text-gray-300">Account Type:</b> {foundAccount.accountType}</p>
          <p><b className="text-gray-300">Balance:</b> {foundAccount.initialBalance}</p>

          <button
            onClick={handleDelete}
            className="mt-3 bg-red-600 hover:bg-red-700 transition
                       text-white w-full py-2 flex justify-center items-center gap-2 rounded"
          >
            <FaTrash /> Delete Account
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
