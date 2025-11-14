import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-400'>
        <ul className='text-2xl drop-shadow-lg flex justify-around p-5'>
            <li className=''><NavLink className={({isActive})=> (isActive)? 'font-extrabold underline': 'hover:font-extrabold hover:underline'} to='/'>HTML</NavLink></li>
            <li className=''><NavLink className={({isActive})=> (isActive)? 'font-extrabold underline': 'hover:font-extrabold hover:underline'} to='/css'>css</NavLink></li>
            <li className=''><NavLink className={({isActive})=> (isActive)? 'font-extrabold underline': 'hover:font-extrabold hover:underline'} to='/Bootstrap'>Bootstrap</NavLink></li>
            <li className=''><NavLink className={({isActive})=> (isActive)? 'font-extrabold underline': 'hover:font-extrabold hover:underline'} to='/Javascript'>Javascript</NavLink></li>
            <li className=''><NavLink className={({isActive})=> (isActive)? 'font-extrabold underline': 'hover:font-extrabold hover:underline'} to='/React'>React</NavLink></li>
            <li className=''><NavLink className={({isActive})=> (isActive)? 'font-extrabold underline': 'hover:font-extrabold hover:underline'} to='/Angular'>Angular</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar