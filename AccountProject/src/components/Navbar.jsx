import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import logo from "../assets/KSLogo.jpeg"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex flex-col w-full px-4 py-3 font-extrabold text-2xl bg-white shadow">

      {/* TOP BAR */}
      <div className="flex justify-between items-center">
        <div><img src={logo} alt="Logo" className="w-16 h-16 rounded" /></div>

        <div className="md:hidden cursor-pointer text-3xl" onClick={() => setOpen(!open)}>
          <FaBars />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-5 mt-4">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/create-account">Create Account</NavLink></li>
          <li><NavLink to="/delete-account">Delete Account</NavLink></li>
          <li><NavLink to="/update-account">Update Account</NavLink></li>
          <li><NavLink to="/display-accounts">Display All Accounts</NavLink></li>
        </ul>

      </div>



      {/* MOBILE MENU (BELOW NAVBAR) */}
      {open && (
        <ul className="md:hidden flex flex-col mt-4">
          <li className="py-2"><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
          <li className="py-2"><NavLink to="/create-account" onClick={() => setOpen(false)}>Create Account</NavLink></li>
          <li className="py-2"><NavLink to="/delete-account" onClick={() => setOpen(false)}>Delete Account</NavLink></li>
          <li className="py-2"><NavLink to="/update-account" onClick={() => setOpen(false)}>Update Account</NavLink></li>
          <li className="py-2"><NavLink to="/display-accounts" onClick={() => setOpen(false)}>Display All Accounts</NavLink></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar;
