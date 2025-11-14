import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    
  return (
    <nav className='bg-slate-900 text-white p-5'>
        <ul className='flex justify-around'>
            <li className='cursor-pointer'>
                <Link to="/">CSK</Link>
            </li>
            <li className='cursor-pointer'>
                <Link to="/gt">GT</Link>
            </li>
            <li className='cursor-pointer'>
                <Link to="/rr">RR</Link>
            </li>
            <li className='cursor-pointer'>
                <Link to="/lsg">LSG</Link>
            </li>
            <li className='cursor-pointer'>
                <Link to="/pbks">PBKS</Link>
            </li>
            <li className='cursor-pointer'>
                <Link to="/kkr">KKR</Link>
            </li>
            <li className='cursor-pointer'>
                <Link to="/dc">DC</Link>
            </li>
            <li className='cursor-pointer'>
                <Link to="/srh">SRH</Link>
            </li>
            <li className='cursor-pointer'>
                <Link to="/rcb">RCB</Link>
            </li>
            <li className='cursor-pointer'>
                <Link to="/mi">MI</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar