import React from 'react'

const Settings = ({ onLogout }) => {
  return (
     <div className="bg-gray-800 p-4 flex justify-between text-white">
      <h1>Account Project</h1>
      <button onClick={onLogout} className="bg-red-500 px-3 py-1 rounded">
        Logout
      </button>
    </div>
  )
}

export default Settings