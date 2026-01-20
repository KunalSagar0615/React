import React from 'react'
import BankImge from "../assets/KSLogo.jpeg"

const HomePage = () => {
  return (
    <div className="
      min-h-screen w-full 
      flex flex-col justify-center items-center 
      bg-gray-900 text-gray-100 
      px-4 text-center
    ">

      {/* Floating Logo */}
      <div className="
  mb-6
  animate-float
  hover:scale-110
  transition-transform duration-300
">
        <img
          src={BankImge}
          alt="KeyStone Bank Logo"
          className="
      w-28 h-28 sm:w-36 sm:h-36
      rounded-xl
      border-2 border-blue-500
      shadow-lg shadow-blue-500/20
    "
        />
      </div>


      {/* Main Heading */}
      <h1 className="
        text-4xl sm:text-5xl md:text-6xl 
        font-extrabold tracking-wide
        text-blue-400 mb-3
      ">
        KeyStone Bank
      </h1>

      {/* Highlight Line */}
      <p className="
        text-lg sm:text-xl md:text-2xl 
        font-semibold text-gray-300 mb-6
      ">
        Built on <span className="text-blue-400">Trust</span>.
        Driven by <span className="text-blue-400">Security</span>.
      </p>

      {/* Description */}
      <p className="
        max-w-2xl text-sm sm:text-base md:text-lg 
        text-gray-400 mb-8
      ">
        A modern digital banking solution designed to manage accounts securely,
        efficiently, and seamlessly — built with reliability at its core.
      </p>

      {/* Feature Cards */}
      <div className="
        grid grid-cols-1 sm:grid-cols-3 gap-4 
        w-full max-w-4xl
      ">

        <div className="
          bg-gray-800 border border-gray-700 rounded-lg p-4
          hover:border-blue-500 transition
        ">
          <h3 className="text-lg font-bold text-blue-400 mb-1">🔐 Secure</h3>
          <p className="text-gray-400 text-sm">
            Your data is protected with strict validation and safe handling.
          </p>
        </div>

        <div className="
          bg-gray-800 border border-gray-700 rounded-lg p-4
          hover:border-blue-500 transition
        ">
          <h3 className="text-lg font-bold text-blue-400 mb-1">⚡ Fast</h3>
          <p className="text-gray-400 text-sm">
            Create, update, and manage accounts instantly.
          </p>
        </div>

        <div className="
          bg-gray-800 border border-gray-700 rounded-lg p-4
          hover:border-blue-500 transition
        ">
          <h3 className="text-lg font-bold text-blue-400 mb-1">📊 Reliable</h3>
          <p className="text-gray-400 text-sm">
            Designed with clean logic and consistent data flow.
          </p>
        </div>

      </div>

      {/* Footer Note */}
      <p className="mt-10 text-xs text-gray-500">
        © 2026 KeyStone Bank. All rights reserved.
      </p>

    </div>
  )
}

export default HomePage
