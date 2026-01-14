import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className='flex py-2 px-2 flex-wrap gap-20 bg-sky-300 font-semibold text-4xl'>
            <li className='cursor-pointer'><NavLink to="/" >Home</NavLink></li>
            <li className='cursor-pointer'><NavLink to="/about" >About</NavLink></li>
            <li className='cursor-pointer'><NavLink to="/contact" >Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar