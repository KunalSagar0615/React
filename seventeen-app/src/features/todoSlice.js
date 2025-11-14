import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id: 91234567891,
            text: "goto temple",
            isCompleted: false
        },
        {
            id: 91234567892,
            text: "Read newspaper",
            isCompleted: false
        },
        {
            id: 9123456789,
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

        deleteTodo: (state, action) =>{
            state.value = state.value.filter(todo =>todo.id != action.payload)
        }
    }
});

export const { addNewTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;