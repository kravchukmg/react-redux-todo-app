import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: uuidv4(), title: 'todo1', completed: false },
    { id: uuidv4(), title: 'todo2', completed: false },
    { id: uuidv4(), title: 'todo3', completed: true },
    { id: uuidv4(), title: 'todo4', completed: false },
    { id: uuidv4(), title: 'todo5', completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleCompleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = !state[index].completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleCompleteTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
