import React from 'react'
import Decrement from './Decrement'
import Increment from './Increment'
import DisplayValue from './DisplayValue'

const CounterApp = () => {
  return (
    <>    
    <h1 className='mt-10 text-center text-4xl font-extrabold text-shadow-lg'>Counter App</h1>
    <div className='flex gap-x-10 justify-center h-[80vh] w-screen items-center'>
        <Decrement/>
        <DisplayValue/>
        <Increment/>
    </div>
    </>

  )
}

export default CounterApp