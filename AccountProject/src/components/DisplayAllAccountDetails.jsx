import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const DisplayAllAccountDetails = ({ accountData }) => {
  const [acData, setAcData] = useState([]);
  const [acNo, setAcNo] = useState("");

  useEffect(() => {
    setAcData(accountData);
  }, [accountData]);

  /* -------------------- Handlers -------------------- */

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

  const handleSelect = (e) => {
    const status = e.target.value;

    if (status === "All") {
      setAcData(accountData);
    } else {
      const filteredData = accountData.filter(
        (acc) => acc.accountStatus === status
      );
      setAcData(filteredData);
    }
  };

  /* -------------------- UI -------------------- */

  return (
    <div className="px-4 py-6 w-full min-h-screen flex flex-col items-center bg-gray-900 text-gray-100">
      
      {/* Search & Filter */}
      <div className="flex w-full justify-evenly gap-4 flex-wrap">

        {/* Search Box */}
        <div className="w-full sm:w-3/4 md:w-1/3 mb-4 p-2 flex items-center gap-2 
                        bg-gray-800 border border-gray-700 rounded">
          <input
            type="text"
            placeholder="Enter Account Number"
            value={acNo}
            onChange={(e) => setAcNo(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-100 placeholder-gray-400"
          />

          <FaSearch
            onClick={handleSearchClick}
            className="cursor-pointer text-blue-400 hover:text-blue-500 transition"
          />

          <button
            onClick={handleReset}
            className="px-2 py-1 text-sm rounded bg-gray-700 hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

        {/* Status Filter */}
        <select
          onChange={handleSelect}
          className="bg-gray-800 border border-gray-700 rounded px-3 py-2 h-fit"
        >
          <option value="All">All Accounts</option>
          <option value="Active">Active Accounts</option>
          <option value="InActive">Closed Accounts</option>
        </select>
      </div>

      {/* Table / No Data */}
      {acData.length === 0 ? (
        <p className="mt-4 text-gray-400">No accounts to display</p>
      ) : (
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm sm:text-base border border-gray-700 border-collapse">
            <thead className="bg-gray-800">
              <tr>
                {[
                  "Account No",
                  "Name",
                  "Mobile",
                  "Email",
                  "Type",
                  "Balance",
                  "Status",
                  "Created Date",
                  "Closed Date",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="p-2 border border-gray-700"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {acData.map((acc) => (
                <tr
                  key={acc.accountNumber}
                  className="hover:bg-gray-800 transition"
                >
                  <td className="p-2 border border-gray-700">{acc.accountNumber}</td>
                  <td className="p-2 border border-gray-700">{acc.name}</td>
                  <td className="p-2 border border-gray-700">{acc.mobile}</td>
                  <td className="p-2 border border-gray-700">{acc.email}</td>
                  <td className="p-2 border border-gray-700">{acc.accountType}</td>
                  <td className="p-2 border border-gray-700">{acc.initialBalance}</td>
                  <td className="p-2 border border-gray-700">
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
                  <td className="p-2 border border-gray-700">
                    {acc.createdDate}
                  </td>
                  <td className="p-2 border border-gray-700">
                    {acc.closedDate || "—"}
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
