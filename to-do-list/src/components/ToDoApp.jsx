import React from 'react'
import DisplayToDo from './DisplayToDo'
import AddtoDo from './AddtoDo'

const ToDoApp = () => {
  return (
    <div className='p-3'>
        <h1 className='text-center my-10 font-extrabold text-4xl'>To Do App</h1>
        <div className='w-full md:w-1/2 mx-auto'>
        <AddtoDo/>
        <DisplayToDo/>
        </div>
    </div>
  )
}

export default ToDoApp