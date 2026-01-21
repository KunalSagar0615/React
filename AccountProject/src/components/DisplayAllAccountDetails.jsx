import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const DisplayAllAccountDetails = ({ accountData }) => {
  const [acData, setAcData] = useState([]);
  const [acNo, setAcNo] = useState("");

  useEffect(() => {
    setAcData(accountData);
  }, [accountData]);

  const handleSearchClick = () => {
    if (!acNo) {
      alert("Please enter account number first !!");
      return;
    }

    if (!/^\d{11}$/.test(acNo)) {
      alert("Account number must be exactly 11 digits !!");
      return;
    }

    const filteredData = accountData.filter(
      (acc) => acc.accountNumber === Number(acNo)
    );

    if (filteredData.length === 0) {
      alert("No account found with this account number !!");
      return;
    }

    setAcData(filteredData);
  };

  const handleReset = () => {
    setAcNo("");
    setAcData(accountData);
  };

  return (
    <div className="px-4 py-6 w-full flex flex-col items-center bg-gray-900 min-h-screen text-gray-100">

      {/* Search */}
      <div className="rounded border border-gray-700 bg-gray-800 
                      w-full sm:w-3/4 md:w-1/3 
                      flex justify-between items-center p-2 mb-4 gap-2">
        <input
          type="text"
          className="bg-transparent outline-none w-full text-gray-100 placeholder-gray-400"
          placeholder="Enter Account Number"
          value={acNo}
          onChange={(e) => setAcNo(e.target.value)}
        />
        <FaSearch
          className="cursor-pointer text-blue-400 hover:text-blue-500 transition"
          onClick={handleSearchClick}
        />
        <button
          onClick={handleReset}
          className="text-sm bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
        >
          Reset
        </button>
      </div>

      {/* Table / No Data */}
      {acData.length === 0 ? (
        <p className="text-gray-400 mt-4">No accounts to display</p>
      ) : (
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700 text-sm sm:text-base">
            <thead className="bg-gray-800">
              <tr>
                <th className="border border-gray-700 p-2">Account No</th>
                <th className="border border-gray-700 p-2">Name</th>
                <th className="border border-gray-700 p-2">Mobile</th>
                <th className="border border-gray-700 p-2">Email</th>
                <th className="border border-gray-700 p-2">Type</th>
                <th className="border border-gray-700 p-2">Balance</th>
                <th className="border border-gray-700 p-2">Status</th>
                <th className="border border-gray-700 p-2">Created Date</th>
                <th className="border border-gray-700 p-2">Closed Date</th>
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
                  <td className="border border-gray-700 p-2">
                    <span
                      className={
                        acc.accountStatus === "Active"
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      {acc.accountStatus}
                    </span>
                  </td>
                  <td className="border border-gray-700 p-2">
                    {acc.createdDate}
                  </td>
                  <td className="border border-gray-700 p-2">
                    {acc.closedDate ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DisplayAllAccountDetails;
