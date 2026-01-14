import React from 'react'

const DisplayUserdata = ({users}) => {
  return (
    <div className='grid grid-cols-4 gap-4 justify-center '>
      {
      users.map((user, index) => (
          <div key={index} className="border-2 border-green-400 rounded m-2 p-3">
            <h3 className="text-lg font-bold text-green-600">User {index + 1}</h3>
            <p><strong>Name:</strong> {user.name || "-"}</p>
            <p><strong>City:</strong> {user.city || "-"}</p>
            <p><strong>Mobile:</strong> {user.mob || "-"}</p>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayUserdata