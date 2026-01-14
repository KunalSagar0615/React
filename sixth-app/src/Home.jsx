import React from 'react'
import { useState } from 'react'

const Home = () => {
    const[input,setInput]=useState("");
    const[name,setName]=useState('');

    const handleChange=(e)=>{
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const greetUser=()=>{
        setName(input);
        setInput('');
    }

  return (
    <div className='flex justify-center flex-wrap flex-col text-5xl text-center my-10'>
        <div>
            <input type="text" placeholder='Enter your name...' className='border rounded-2xl px-3 py-1 m-2' onChange={handleChange} value={input}/>
        </div>
        <div>
            <button type="button" className='mt-2 bg-slate-600 text-white font-bold rounded px-3 py-1' onClick={greetUser}>Greet</button>
        </div>
        <div>
            {name.length > 0 && <h1 className='text-5xl mt-4'>Good Morning,{name}!!</h1> }
        </div>
    </div>
  )
}

export default Home