import AddTodo from "./AddTodo"
import DisplayTodos from "./DisplayTodos"

const TodoApp = () => {
    return (
        <div>
            <h1 className="text-center text-purple-600 text-5xl font-bold my-4">Todo App</h1>
            <div className="w-full md:w-1/2 mx-auto p-3">
                <AddTodo />
                <DisplayTodos />
            </div>
        </div>
    )
}

export default TodoApp