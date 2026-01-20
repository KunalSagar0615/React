import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const UpdateAccount = ({ accountData, setAccountData }) => {

  const [acNo, setAcNo] = useState('');
  const [accountIndex, setAccountIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    accountType: '',
    initialBalance: ''
  });

  const handleSearchClick = () => {
    if (!/^\d{11}$/.test(acNo)) {
      alert("Account number must be exactly 11 digits");
      return;
    }

    const index = accountData.findIndex(
      acc => acc.accountNumber === Number(acNo)
    );

    if (index === -1) {
      alert("No account found!");
      return;
    }

    setAccountIndex(index);
    setFormData(accountData[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const updatedAccounts = accountData.map((acc, i) =>
      i === accountIndex ? { ...formData } : acc
    );

    setAccountData(updatedAccounts);
    alert("Account updated successfully!");
    setAccountIndex(null);
    setAcNo('');
  };

  return (
    <div className="flex flex-col items-center px-4 py-6 bg-gray-900 min-h-screen text-gray-100">

      {/* Search */}
      <div className="border border-gray-700 bg-gray-800 
                      w-full sm:w-3/4 md:w-1/3 
                      flex items-center gap-2 p-2 mb-4 rounded">
        <input
          type="text"
          placeholder="Enter Account Number"
          className="bg-transparent outline-none w-full text-gray-100 placeholder-gray-400"
          value={acNo}
          onChange={(e) => setAcNo(e.target.value)}
        />
        <FaSearch
          className="cursor-pointer text-blue-400 hover:text-blue-500 transition"
          onClick={handleSearchClick}
        />
      </div>

      {/* Update Form */}
      {accountIndex !== null && (
        <div className="border border-gray-700 bg-gray-800 
                        w-full sm:w-3/4 md:w-1/3 
                        p-4 space-y-3 rounded">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full bg-gray-900 border border-gray-700 p-2 rounded
                       outline-none focus:border-blue-400 hover:border-blue-500 transition"
          />

          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            className="w-full bg-gray-900 border border-gray-700 p-2 rounded
                       outline-none focus:border-blue-400 hover:border-blue-500 transition"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-gray-900 border border-gray-700 p-2 rounded
                       outline-none focus:border-blue-400 hover:border-blue-500 transition"
          />

          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 p-2 rounded
                       outline-none focus:border-blue-400 hover:border-blue-500 transition"
          >
            <option value="">Select Account Type</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
          </select>

          <input
            name="initialBalance"
            value={formData.initialBalance}
            onChange={handleChange}
            placeholder="Balance"
            className="w-full bg-gray-900 border border-gray-700 p-2 rounded
                       outline-none focus:border-blue-400 hover:border-blue-500 transition"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 transition
                       text-white py-2 rounded w-full font-semibold"
            onClick={handleUpdate}
          >
            Update Account
          </button>
        </div>
      )}

    </div>
  );
};

export default UpdateAccount;
