import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todoSlice'

const ToDo = ({ todo }) => {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    return (
        <div key={todo.id} className='border border-violet-400 mb-3 text-2xl p-4 rounded-xl shadow-xl'>
            <div className="flex justify-between items-center">
                <p>{todo.text}</p>
                <button type="button" className='bg-red-400 px-2 rounded-xl flex justify-center items-center' onClick={() => handleDelete(todo.id)}>x</button>
            </div>
        </div>
    )
}

export default ToDo