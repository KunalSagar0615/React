import React from 'react'
import Comp4 from './Comp4'
import { useContext } from 'react'
import DemoContext from '../context/DemoContext'

const Comp3 = () => {

    const {setName} =useContext(DemoContext);

  return (
    <div className='text-center rounded p-10 text-xl border bg-cyan-300'>
        <h1>Comp 3</h1>
        <button type="button" className='cursor-pointer py-1 px-4 m-1 bg-slate-600 text-white rounded' onClick={()=>setName("Kartik")}>Change name</button>
        <Comp4 />
    </div>
  )
}

export default Comp3