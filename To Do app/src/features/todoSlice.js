import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id: 9123456789,
            text: "goto temple",
            isCompleted: false
        },
        {
            id: 7654356789,
            text: "Read newspaper",
            isCompleted: false
        },
        {
            id: 9865445690,
            text: "Create question bank",
            isCompleted: false
        },
    ]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addNewTodo: (state, action) => {
            state.value.push({
                id: nanoid(),
                text: action.payload.text,
                isCompleted: false
            })
        },

        deleteTodo: (state, action) => {
            state.value = state.value.filter(todo => todo.id != action.payload)
        },

        changeStatus: (state, action) => {
            const id = action.payload;

            state.value = state.value.map(todo => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                } else {
                    return todo;
                }
            })

            // const currentTodo = state.value.find(todo => todo.id == id);
            // currentTodo.isCompleted = !currentTodo.isCompleted;


        },

        editTodo: (state,action) =>{

            const {id,text} = action.payload;  

            state.value = state.value.map(todo => {
                if (todo.id == id) {
                    return {
                        ...todo,text :text 
                    }
                } else {
                    return todo;
                }
            })
        }
    }
});

export const { addNewTodo, deleteTodo, changeStatus, editTodo } = todoSlice.actions;
export default todoSlice.reducer;