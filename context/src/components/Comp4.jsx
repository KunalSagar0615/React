import React from 'react'
import { useContext } from 'react'
import DemoContext from '../context/DemoContext'

const Comp4 = () => {
    const {name,email} =useContext(DemoContext);
  return (
    <div className='p-10 border rounded bg-orange-400 text-center text-xl'>
        {/* <h1>Comp 4</h1> */}
        <h1 className='font-extrabold text-shadow-lg text-2xl'>{name}</h1>
        <h1 className='font-extrabold text-shadow-lg text-2xl'>{email}</h1>
    </div>
  )
}

export default Comp4