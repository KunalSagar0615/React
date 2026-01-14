import React from 'react'
import { useState } from 'react'
import { PluginContainer } from 'vite';

const TextConversion = () => {

    const [font,setFont]=useState('lowercase');

  return (
    <div>
        <div className='flex gap-15 p-4'>
            <button type="button" className='bg-slate-500 py-1 px-3 rounded' onClick={()=>setFont('uppercase')}>UPPERCASE</button>
            <button type="button" className='bg-slate-500 py-1 px-3 rounded' onClick={()=>setFont('lowercase')}>lowercase</button>
            <button type="button" className='bg-slate-500 py-1 px-3 rounded' onClick={()=>setFont('capatlize')}>Capital Case</button>
        </div>
        <div>
            <textarea className={`border w-[98vw] m-3 rounded h-[80vh] p-2 ${font}`} placeholder='Type text here...' ></textarea>
        </div>
    </div>
  )
}

export default TextConversion