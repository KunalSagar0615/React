import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../features/todoSlice";
import { changeStatus } from "../features/todoSlice";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoCheckmarkDone } from "react-icons/io5";

const Todo = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleChangeStatus = (id) => {
        dispatch(changeStatus(id));
    }

    const handleEdit = () => {
        dispatch(editTodo({ id: todo.id, text: newText }))
        setIsEditing(false)
    }

    return (
        <div className={`border border-violet-400 mb-3 text-2xl p-4 rounded-xl shadow-xl ${todo.isCompleted ? 'bg-green-300' : 'bg-red-200'}`}>
            <div className="flex justify-between items-center">
                {
                    isEditing ?
                        <input type="text" onChange={e => setNewText(e.target.value)} value={newText} className="border bg-white p-2" />
                        : <p onClick={() => handleChangeStatus(todo.id)}>{todo.text}</p>
                }
                <div className="flex gap-2">
                    {
                        isEditing ?
                            <button type="button" className="bg-green-400 rounded-xl p-2 flex justify-center  cursor-pointer items-center" onClick={handleEdit} ><IoCheckmarkDone /></button> :
                            <button type="button" className="bg-yellow-400 rounded-xl p-2 flex justify-center cursor-pointer  items-center" onClick={() => setIsEditing(!isEditing)}><CiEdit /></button>
                    }

                    <button type="button" className='bg-red-400 px-2 rounded-xl flex justify-center items-center cursor-pointer'
                        onClick={() => handleDelete(todo.id)} ><MdDeleteOutline /></button>
                </div>
            </div>
        </div>
    )
}

export default Todo