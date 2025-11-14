import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className='flex justify-around bg-slate-900 text-white p-5 font-extrabold'>
            <li className='cursor-pointer'> <Link to='/'>Action</Link> </li>
            <li className='cursor-pointer'> <Link to='/comedy'>Comedy</Link> </li>
            <li className='cursor-pointer'> <Link to='/drama'>Drama</Link> </li>
            <li className='cursor-pointer'> <Link to='/horor'>Horor</Link> </li>
            <li className='cursor-pointer'> <Link to='/scifi'>Scifi</Link> </li>
        </ul>
    </nav>
  )
}

export default Navbar