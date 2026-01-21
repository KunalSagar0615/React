import React, { useState } from "react";

const Settings = ({ onLogout, setLimit, setMinBalance }) => {
  const [limitAmt, setLimitAmt] = useState("");
  const [minBalanceAmt, setMinBalanceAmt] = useState("");

  const [showLimitInput, setShowLimitInput] = useState(false);
  const [showMinBalanceInput, setShowMinBalanceInput] = useState(false);

  const [msg, setMsg] = useState("");

  /* ---------------- Validation Handlers ---------------- */

  const validateMinBalance = () => {
    if (isNaN(minBalanceAmt) || minBalanceAmt === "") {
      setMsg("Please enter a valid minimum balance");
      return;
    }

    if (Number(minBalanceAmt) < 0) {
      setMsg("Minimum balance cannot be negative");
      return;
    }

    setMinBalance(Number(minBalanceAmt));
    setMsg("");
    alert("Minimum balance updated successfully");
    setShowMinBalanceInput(false);
  };

  const validateLimit = () => {
    if (isNaN(limitAmt) || limitAmt === "") {
      setMsg("Please enter a valid limit amount");
      return;
    }

    if (Number(limitAmt) <= 0) {
      setMsg("Limit must be greater than zero");
      return;
    }

    setLimit(Number(limitAmt));
    setMsg("");
    alert("Transaction limit updated successfully");
    setShowLimitInput(false);
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="bg-gray-800 p-4 flex flex-wrap items-center justify-between gap-4 text-white">

      <h1 className="text-lg font-semibold">Account Project</h1>

      <div className="flex gap-3 flex-wrap items-center">

        {/* Min Balance */}
        <div>
          <button onClick={() => { setShowMinBalanceInput(!showMinBalanceInput); setShowLimitInput(false); setMsg(""); }}
            className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">
            Change Min Balance
          </button>

          {showMinBalanceInput && (
            <div className="mt-2 flex gap-2 items-center">
              <input type="text" placeholder="Enter amount" className="bg-gray-700 px-2 py-1 rounded outline-none w-32" onChange={(e) => setMinBalanceAmt(e.target.value)}/>
              <button onClick={validateMinBalance}className="bg-green-600 px-2 py-1 rounded hover:bg-green-700">
                Set
              </button>
            </div>
          )}
        </div>

        {/* Limit */}
        <div>
          <button onClick={() => { setShowLimitInput(!showLimitInput); setShowMinBalanceInput(false); setMsg(""); }} className="bg-purple-600 px-3 py-1 rounded hover:bg-purple-700" >
            Change Limit
          </button>

          {showLimitInput && ( 
            <div className="mt-2 flex gap-2 items-center">
              <input type="text" placeholder="Enter amount" className="bg-gray-700 px-2 py-1 rounded outline-none w-32" onChange={(e) => setLimitAmt(e.target.value)}/>
              <button onClick={validateLimit} className="bg-green-600 px-2 py-1 rounded hover:bg-green-700">
                Set
              </button>
            </div>
          )}
        </div>

        {/* Logout */}
        <button onClick={onLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600" >
          Logout
        </button>
      </div>

      {/* Message */}
      {msg && <p className="w-full text-center text-red-400">{msg}</p>}
    </div>
  );
};

export default Settings;
