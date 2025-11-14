import React from 'react'

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950'>
      <form className='h-auto w-auto bg-gray-900 p-8 rounded-2xl shadow-lg'>
        <input className='bg-gray-800 border-gray-700 text-gray-100 my-1 h-[7vh] border-4 rounded px-4 py-3 w-[60vw] outline-none  focus:border-blue-600 focus:border-4' type="text" name='name' value={formData.name} placeholder='Enter Name' onChange={(e) => setFormData({ ...formData, name: e.target.value })} /><br />
        <input className='my-1 h-[7vh] border-4 bg-gray-800 border-gray-700 text-gray-100 rounded px-4 py-3 w-[60vw] outline-none  focus:border-blue-600 focus:border-4' type="email" name='email' value={formData.email} placeholder='Enter email' onChange={(e) => setFormData({ ...formData, email: e.target.value })} /><br />
        <input className='my-1 h-[7vh] border-4 bg-gray-800 border-gray-700 text-gray-100 rounded px-4 py-3 w-[60vw] outline-none  focus:border-blue-600 focus:border-4' type="number" name="phone" value={formData.phone} placeholder='Enter phone' onChange={(e) => setFormData({ ...formData, email: e.target.value })} /><br />
        <button type="button" onClick={nextStep} className='my-1 h-[7vh] border-4 bg-gray-800 border-gray-700 text-gray-100 px-4 text-center  w-[60vw] outline-none  focus:border-blue-600 focus:border-4 text-2xl font-extrabold text-red-600'>Next</button>
      </form>
    </div>
  )
}

export default PersonalInfo