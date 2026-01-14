import React from 'react'

const Navbar = ({setTab}) => {
  return (
    <nav>
        <ul className='flex justify-around flex-wrap text-2xl bg-purple-800 py-5 text-white font-extrabold'>
            <li className='cursor-pointer' onClick={()=>setTab('home')}>Home</li>
            <li className='cursor-pointer' onClick={()=>setTab('about')}>About</li>
            <li className='cursor-pointer' onClick={()=>setTab('contact')}>Contact</li>
            <li className='cursor-pointer' onClick={()=>setTab('counter')}>Counter</li>
        </ul>
    </nav>
  )
}

export default Navbar