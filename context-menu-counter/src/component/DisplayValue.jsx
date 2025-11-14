import React from 'react'
import { useContext } from 'react'
import CounterContext from '../context/CounterContext'

const DisplayValue = () => {
    const {count} = useContext(CounterContext)
  return (
    <div className='font-bold text-3xl'>
        {count}
    </div>
  )
}

export default DisplayValue