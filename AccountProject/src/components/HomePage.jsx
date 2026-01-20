import React from 'react'
import BankImge from "../assets/KSLogo.jpeg"

const HomePage = () => {
  return (
    <div className="
      flex flex-col justify-center items-center 
      w-full min-h-screen gap-4 
      bg-gray-900 text-gray-100
      px-4 text-center
    ">

      {/* Logo */}
      <div className="transition-transform duration-300 hover:scale-105">
        <img
          src={BankImge}
          alt="KeyStone Bank Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg border border-gray-700"
        />
      </div>

      {/* Bank Name */}
      <h1 className="
        text-3xl sm:text-4xl md:text-5xl font-extrabold
        text-blue-400 hover:text-blue-500 transition-colors
      ">
        KeyStone Bank
      </h1>

      {/* Tagline */}
      <p className="
        text-sm sm:text-base md:text-lg
        text-gray-400 hover:text-gray-300 transition-colors
      ">
        Built on Trust. Driven by Security.
      </p>

    </div>
  )
}

export default HomePage
