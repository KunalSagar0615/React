import React from 'react'

const AddtoDo = () => {
  return (
    <div className='flex gap-4 mb-5'>
        <input type="text" className='border border-violet-400 text-2xl w-full rounded-xl px-4' placeholder='add toto here..'/>
        <button type="button" className='bg-violet-500 hover:bg-violet-600 text-2xl px-5 py-3 rounded-xl text-white font-bold cursor-pointer'>Add</button>
    </div>
  )
}

export default AddtoDo