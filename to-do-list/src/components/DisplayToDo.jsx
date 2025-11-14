import React from 'react'
import { MdDelete } from "react-icons/md";

const DisplayToDo = () => {
    const allTodos = [
        'Go to Market',
        'Read Book',
        'Create Note'
    ]

  return (
    <div>
        {
            allTodos.map((todo,index)=>
                <div key={index} className='border shadow-xl border-violet-400 my-3 text-2xl p-3 rounded'>
                   <div className='flex justify-between'>
                    <p>{todo}</p>
                    <button type="button" className='bg-red-400 px-3 rounded flex justify-center items-center'><MdDelete /></button>
                   </div>
                </div>
            )
        }
    </div>
  )
}

export default DisplayToDo