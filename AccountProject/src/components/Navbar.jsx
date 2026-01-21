import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import logo from "../assets/KSLogo.jpeg"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition-colors duration-200
     ${isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"}`;

  return (
    <nav className="relative w-full bg-gray-900 shadow-md ">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded" />
          <span className="hidden sm:block text-xl font-extrabold text-gray-100">
            KeyStone Bank
          </span>
        </div>

        {/* Mobile Icon */}
        <div
          className="md:hidden cursor-pointer text-3xl text-gray-200 hover:text-blue-400"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base font-semibold">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/create-account" className={linkClass}>Create Account</NavLink></li>
          <li><NavLink to="/close-account" className={linkClass}>Close Account</NavLink></li>
          <li><NavLink to="/deposit-amount" className={linkClass}>Deposit Amount</NavLink></li>
          <li><NavLink to="/withdraw-amount" className={linkClass}>Withdraw Amount</NavLink></li>
          <li><NavLink to="/update-account" className={linkClass}>Update Account</NavLink></li>
          <li><NavLink to="/display-accounts" className={linkClass}>Display All Accounts</NavLink></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col bg-gray-800 px-4 py-2 text-base font-semibold">
          <li className="py-2 border-b border-gray-700">
            <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          </li>
          <li className="py-2 border-b border-gray-700">
            <NavLink to="/create-account" className={linkClass} onClick={() => setOpen(false)}>Create Account</NavLink>
          </li>
          <li className="py-2 border-b border-gray-700">
            <NavLink to="/close-account" className={linkClass} onClick={() => setOpen(false)}>Close Account</NavLink>
          </li>
          <li className="py-2 border-b border-gray-700">
            <NavLink to="/deposit-amount" className={linkClass} onClick={() => setOpen(false)}>Deposit Amount</NavLink>
          </li>
          <li className="py-2 border-b border-gray-700">
            <NavLink to="/withdraw-amount" className={linkClass} onClick={() => setOpen(false)}>Withdraw Amount</NavLink>
          </li>
          <li className="py-2 border-b border-gray-700">
            <NavLink to="/update-account" className={linkClass} onClick={() => setOpen(false)}>Update Account</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/display-accounts" className={linkClass} onClick={() => setOpen(false)}>
              Display All Accounts
            </NavLink>
          </li>
        </ul>
      )}

    </nav>
  )
}

export default Navbar;
