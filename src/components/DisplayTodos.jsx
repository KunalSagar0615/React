import { useSelector } from "react-redux"

const DisplayTodos = () => {

    const allTodos = useSelector(state => state.todo.value);

    return (
        <div>
            {
                allTodos.map((todo) => <div key={todo.id} className='border border-violet-400 mb-3 text-2xl p-4 rounded-xl shadow-xl'>
                    <div className="flex justify-between items-center">
                        <p>{todo.text}</p>
                        <button type="button" className='bg-red-400 px-2 rounded-xl flex justify-center items-center'>x</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default DisplayTodos