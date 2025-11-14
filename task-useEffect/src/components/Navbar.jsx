import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Home from './Home'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-slate-500 text-2xl text-white font-extrabold'>
        <ul className='flex justify-around'>
            <li className='cursor-pointer p-4'> <Link to='/'> Home </Link> </li>
            <li className='cursor-pointer p-4'> <Link to='/about'> About </Link> </li>
            <li className='cursor-pointer p-4'> <Link to='/register'> Register </Link> </li>
            <li className='cursor-pointer p-4'> <Link to='/services'> Services </Link> </li>
        </ul>
    </nav>
  )
}

export default Navbar