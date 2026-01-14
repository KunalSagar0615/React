import React from 'react'
import { useState } from 'react';

const Contact = () => {

  const [isShow,setIsShow]=useState(false);

  return (
    <div className='flex justify-center text-3xl text-center my-10'>
      <div className='flex gap-2'>
        <input type={isShow?'text':'password'} className='border rounded-2xl py-1 px-2' placeholder='Type your password' />
        <button type="button" className='border rounded-2xl bg-slate-400 py-1 px-2 cursor-pointer w-30' onClick={()=>setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</button>
      </div>
    </div>
  )
}

export default Contact 