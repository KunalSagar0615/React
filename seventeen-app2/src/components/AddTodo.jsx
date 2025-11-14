import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../features/todoSlice";

const AddTodo = () => {

    const [text, setText] = useState();

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if(!text) return;
        dispatch(addNewTodo({ text }))
        setText('');
    }

    return (
        <div className='flex gap-4 mb-15'>
            <input type="text" className='border border-violet-400 text-2xl w-full rounded-xl px-4' placeholder='Type todo here...'
                onChange={e => setText(e.target.value)} value={text} />

            <button type="button" className='bg-violet-500 hover:bg-violet-600 text-2xl px-5 py-3 rounded-xl text-white font-bold cursor-pointer'
                onClick={handleAddTodo}>Add</button>
        </div>
    )
}

export default AddTodo