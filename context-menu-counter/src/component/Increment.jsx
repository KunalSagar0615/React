import React from 'react'
import { useContext } from 'react'
import CounterContext from '../context/CounterContext'

const Increment = () => {

    const handleIncrement = () =>{
        if(count<10){
            setCount(count+1)
        }else{
            alert("Increament limit reachedus")
        }
    }
    const {count,setCount} = useContext(CounterContext)

  return (
     <button type="button" className='bg-blue-400 text-4xl px-10 py-1 rounded cursor-pointer flex justify-center items-center' onClick={handleIncrement

     }>+</button>
  )
}

export default Increment