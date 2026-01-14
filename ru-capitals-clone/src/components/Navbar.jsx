import React from 'react'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center flex-wrap'>
        <div>
            <img src='https://rucapitals.com/writable/uploads/logo-front.png?v=1.0.1' className='h-10' />
        </div>
        <div>
            <button type="button" className='bg-blue-500 py-1 px-3 rounded text-white font-bold text-xl hidden md:block'>Create an account</button>
            <button type="button" className='md:hidden'><FaBars/></button>
        </div>
    </nav>
  )
}

export default Navbar