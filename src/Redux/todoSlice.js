import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: Math.random(), task: "Learn Redux Toolkit", isDone: false }],
  },
  reducers: {
    AddTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    finishTodo: (state, { payload }) => {
      state.todos.map((el) =>
        el.id === payload ? (el.isDone = !el.isDone) : el.isDone
      );
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((el) => el.id !== payload);
    },
    updateMyTodo: (state, { payload }) => {
      state.todos.map((el) =>
        el.id === payload.id ? (el.task = payload.task) : el.task
      );
    },
  },
});

export default todoSlice.reducer;
export const { AddTodo, finishTodo, deleteTodo, updateMyTodo } =
  todoSlice.actions;
