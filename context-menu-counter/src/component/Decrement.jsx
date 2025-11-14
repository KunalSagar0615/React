import React from 'react'
import { useContext } from 'react'
import CounterContext from '../context/CounterContext'

const Decrement = () => {
   const {count,setCount} = useContext(CounterContext)
  return (

        <button type="button" className='bg-blue-400 text-4xl px-10 py-1 rounded cursor-pointer flex justify-center items-center' onClick={()=>setCount(count-1)}>
            -
        </button>
   
  )
}

export default Decrement