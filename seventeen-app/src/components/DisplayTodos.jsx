import { useSelector } from "react-redux"

import ToDo from "./ToDo";

const DisplayTodos = () => {

    const allTodos = useSelector(state => state.todo.value);

    

    return (
        <div>
            {
                allTodos.length > 0 ?
                allTodos.map((todo) => <ToDo key={todo.id} todo={todo} />) : <div className="text-center"> 
                    <h1 className="text-4xl">No todos to display .. </h1>
                </div>
            }
        </div>
    )
}

export default DisplayTodos