import React, { useState, useEffect } from 'react'

const Contact = () => {

  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserName(name)
    setName("")
  }

  return (
    <div className='h-screen flex gap-20 px-5 justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='p-8 w-[90%] sm:w-1/2 h-[45vh] flex flex-col justify-center items-center text-center 
                   rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600
                   transition-all duration-300 hover:scale-100 hover:shadow-purple-700/50'
      >
        <h1 className='mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 italic'>
          Contact Form
        </h1>

        <div className='mb-5'>
          <label htmlFor="name" className='mr-3 text-xl text-gray-300'>Name:</label>
          <input type="text" id='name'
            className='border-2 border-gray-500 bg-gray-900 text-gray-100 px-4 py-2 rounded-lg 
                       focus:outline-none focus:border-purple-500 transition-all duration-300 
                       placeholder-gray-400 w-[35vw]' placeholder='Enter name...' value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="name" className='mr-3 text-xl text-gray-300'>Name:</label>
          <input type="text" id='name'
            className='border-2 border-gray-500 bg-gray-900 text-gray-100 px-4 py-2 rounded-lg 
                       focus:outline-none focus:border-purple-500 transition-all duration-300 
                       placeholder-gray-400 w-[35vw]' placeholder='Enter name...' value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <button
          type='submit'
          className='mt-2 bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2 rounded-lg 
                     text-white font-semibold tracking-wide shadow-md hover:shadow-lg 
                     hover:from-pink-500 hover:to-purple-600 transition-all duration-300'
        >
          Submit
        </button>
      </form>

      <div className='w-[90%] sm:w-1/2 h-[20vh] mt-8 flex justify-center items-center'>
        <h1 className='text-4xl font-semibold text-purple-400'>
          {userName && `Hello, ${userName}!`}
        </h1>
      </div>
    </div>
  )
}

export default Contact
