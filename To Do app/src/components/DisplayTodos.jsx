import { useSelector } from "react-redux"
import Todo from "./Todo";

const DisplayTodos = () => {

    const allTodos = useSelector(state => state.todo.value);

    return (
        <div>
            {   
                allTodos.length > 0 ?
                allTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
                : <div className="text-center text-2xl">No todos to display...</div>
            }
        </div>
    )
}

export default DisplayTodos