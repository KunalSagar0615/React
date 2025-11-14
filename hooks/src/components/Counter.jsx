import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(1)

    const increaseCount = () =>{
        if(count<30)
        setCount(count+1)
    }

    const decreaseCount = () => {
        if(count>-30)
        setCount(count-1)
    }

  return (
    <div>
        <div className='flex justify-center gap-[20px] h-[100vh] items-center'> 
            <button type="button" onClick={decreaseCount} className='px-5 py-1 w-[70px] bg-blue-600 text-xl rounded-xl flex items-center justify-center'>-</button>
            <h1 className='w-[30px] flex items-center justify-center text-2xl font-extrabold'>{count}</h1>
            <button type="button" onClick={increaseCount} className='text-xl px-5 w-[70px] py-1 bg-blue-600 rounded-xl flex items-center justify-center'>+</button>
        </div>
    </div>
  )
}

export default Counter