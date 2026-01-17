import React from 'react'
import { useState } from 'react'
import { use } from 'react'

const CreateAccount = ({accountData,setAccountData}) => {

  const [name, setName] = useState()
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState()
  const [accountType, setAccountType] = useState()
  const [initialBalance, setInitialBalance] = useState()

  const handlesubmit=()=>{
    const newAccount={name,mobile,email,accountType,initialBalance}
    setAccountData([...accountData,newAccount]);
    console.log(newAccount);
  }

  return (
    <div className='flex justify-center items-center flex-col p-3'>
      <h1 className='text-3xl'>Enter Account Details</h1>
      <div className='w-2/3 space-y-2 p-2'>
        
          <input className='border rounded w-full  h-10 p-2' type="text" placeholder='Enter your full name (Surname first)' onChange={(e)=>setName(e.target.value)} required/><br />
          <input className='border rounded w-full  h-10 p-2' type="text" placeholder='Enter mobile number' onChange={(e)=>setMobile(e.target.value)} required/><br />
          <input className='border rounded w-full  h-10 p-2' type="text" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} required/><br />
          <input className='border rounded w-full  h-10 p-2' type="text" placeholder='Enter initial balance' onChange={(e)=>setInitialBalance(e.target.value)} required/><br />
          <div className='flex justify-evenly items-center w-full  h-10 p-2'>
            <label ><input type="radio" name="AccountType" value="Saving" id="" onClick={()=>setAccountType(e.target.value)} required/> Saving Account</label>
            <label ><input type="radio" name="AccountType" value="Current" id="" onClick={()=>setAccountType(e.target.value)} required/> Current Account</label>
          </div>
          <button className='border rounded w-full h-10 p-2 cursor-pointer' type="button" onClick={handlesubmit}>Submit</button>
       
      </div>
    </div>
  )
}

export default CreateAccount