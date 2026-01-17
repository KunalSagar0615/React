import React from 'react'

const DisplayAllAccountDetails = ({accountData}) => {
  return (
    <div>
      {
        accountData.length == 0 ? <p>No accounts to display</p> : (
          <table className='w-full border-collapse border border-black'>
            <thead>
              <tr>
                <th className='border border-black p-2'>Name</th>
                <th className='border border-black p-2'>Mobile</th>
                <th className='border border-black p-2'>Email</th>
                <th className='border border-black p-2'>Account Type</th>
                <th className='border border-black p-2'>Initial Balance</th>
              </tr>
            </thead>
            <tbody>
              {accountData.map((acc, index) => (
                <tr key={index}>
                  <td className='border border-black p-2'>{acc.name}</td>
                  <td className='border border-black p-2'>{acc.mobile}</td>
                  <td className='border border-black p-2'>{acc.email}</td>
                  <td className='border border-black p-2'>{acc.accountType}</td>
                  <td className='border border-black p-2'>{acc.initialBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  )
}

export default DisplayAllAccountDetails