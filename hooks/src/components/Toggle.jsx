import React from 'react'
import { use } from 'react'
import { useState } from 'react'

const Toggle = () => {

    const [isDivDisplay, setDivDisplay] = useState(true)
    const [name,setName]=useState('Sahil')
    const [inputValue,setinputValue]=useState(' ')

    const changeName = () =>{
        setName(inputValue)
    }

        return (
            <div className='h-[100vh] p-5 bg-gradient-to-tl from-purple-700 via-25% to-pink-300 border-[10px] border-white'>
                <button type="button" onClick={()=>setDivDisplay(!isDivDisplay)} className='px-5 my-5 font-extrabold py-1 w-[90px] bg-gradient-to-tl from-blue-950 via-10% to-blue-400 text-xl rounded-xl flex items-center justify-center hover:bg-gradient-to-bl hover:from-70% hover:via-25% hover:to-blue-700'> {isDivDisplay?'Hide':'Show'} </button>
                {
                    isDivDisplay
                    &&
                    <div>
                        <div><input type="text" name="" id="" className='border-2 border-black my-2 rounded px-2 py-1' placeholder='Enter your name.. '  value={inputValue} onChange={(e)=>setinputValue(e.target.value)}/></div>
                        <h1 className='text-2xl font-mono bg-amber-100 h-[50vh] flex justify-center items-center rounded'>{name}</h1>
                        <button type="button" onClick={changeName} className='px-5 my-5 font-extrabold py-1 w-[190px] bg-gradient-to-tl from-blue-950 via-10% to-blue-400 text-xl rounded-xl flex items-center justify-center hover:bg-gradient-to-bl hover:from-70% hover:via-25% hover:to-blue-700'>Change Name</button>
                    </div>
                }
            </div>
        )
}

export default Toggle