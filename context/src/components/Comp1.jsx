import React from 'react'
import Comp2 from './Comp2'

const Comp1 = () => {
  return (
    <div className='p-10 border text-center bg-red-400 rounded-xl'>
        <h1>Comp 1</h1>
        <Comp2/>
    </div>
  )
}

export default Comp1