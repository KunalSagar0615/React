import React from 'react'
import { useState } from 'react'

const InputBox = () => {

    const [isHide,setIsHide]=useState('password')

    const changeInputType = () => {

        if(isHide=='password'){
            setIsHide('text')
        }
        else
            setIsHide('password')
    }


  return (
    <div className='h-[100vh] p-5 flex gap-[20px] justify-center items-center bg-gradient-to-tr from-pink-600 via-25% to-purple-600 font-extrabold border-[10px] border-white'>
            <div><input type={isHide} name="" id="" className='border-2 border-black px-2 py-1 w-[50vw] rounded text-2xl shadow-lg outline-none'/></div>
            <div><button type="button" onClick={changeInputType} className='border-2 border-black w-[10vw] py-1 px-2 rounded text-2xl shadow-lg' >{isHide=='password'?'Show':'Hide'}</button></div>
    </div>
  )
}

export default InputBox