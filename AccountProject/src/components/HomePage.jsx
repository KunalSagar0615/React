import React from 'react'
import BankImge from "../assets/KSLogo.jpeg"

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen gap-4 font-extrabold text-4xl'>
      <div><img src={BankImge} alt="" className="w-32 h-32 rounded" /></div>
      <h1>KeyStone Bank</h1>
      <p>Built on Trust. Driven by Security.</p>  
    </div>
  )
}

export default HomePage