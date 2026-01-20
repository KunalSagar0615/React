import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";

const DisplayAllAccountDetails = ({ accountData }) => {

  const [acData, setAcData] = useState([]);
  const [acNo, setAcNo] = useState('');

  useEffect(() => {
    setAcData(accountData);
  }, [accountData]);

  const handleSearchClick = () => {

    if (!/^\d+$/.test(acNo)) {
      alert("Account number should contain only digits !!");
      return;
    }
    else if (acNo.length === 0) {
      alert("Please enter account number first !!")
    }
    else if (acNo.length !== 11) {
      alert("Account number should be 11 digits long !!");
    }
    else {
      const filteredData = accountData.filter(
        (x) => x.accountNumber === Number(acNo)
      );
      if (filteredData.length === 0) {
        alert("No account found with this account number !!");
      }
      else {
        setAcData(filteredData);
      }
    }
  }

  return (
    <div className="px-4 py-6 w-full flex flex-col items-center bg-gray-900 min-h-screen text-gray-100">

      {/* Search */}
      <div className="rounded border border-gray-700 bg-gray-800 
                      w-full sm:w-3/4 md:w-1/3 
                      flex justify-between items-center p-2 mb-4">
        <input
          type="text"
          className="bg-transparent outline-none w-full text-gray-100 placeholder-gray-400"
          placeholder="Enter Account Number"
          onChange={(e) => setAcNo(e.target.value)}
        />
        <FaSearch
          className="cursor-pointer text-blue-400 hover:text-blue-500 transition"
          onClick={handleSearchClick}
        />
      </div>

      {/* Table / No Data */}
      {acData.length === 0 ? (
        <p className="text-gray-400 mt-4">No accounts to display</p>
      ) : (
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700 text-sm sm:text-base">
            <thead className="bg-gray-800">
              <tr>
                <th className="border border-gray-700 p-2">Account Number</th>
                <th className="border border-gray-700 p-2">Name</th>
                <th className="border border-gray-700 p-2">Mobile</th>
                <th className="border border-gray-700 p-2">Email</th>
                <th className="border border-gray-700 p-2">Account Type</th>
                <th className="border border-gray-700 p-2">Initial Balance</th>
              </tr>
            </thead>

            <tbody>
              {acData.map((acc, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-800 transition"
                >
                  <td className="border border-gray-700 p-2">{acc.accountNumber}</td>
                  <td className="border border-gray-700 p-2">{acc.name}</td>
                  <td className="border border-gray-700 p-2">{acc.mobile}</td>
                  <td className="border border-gray-700 p-2">{acc.email}</td>
                  <td className="border border-gray-700 p-2">{acc.accountType}</td>
                  <td className="border border-gray-700 p-2">{acc.initialBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  )
}

export default DisplayAllAccountDetails
