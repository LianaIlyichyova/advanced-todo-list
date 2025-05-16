import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
    todos: [{ name: "1todo" }],
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
  },
});

export default countSlice.reducer;
export const { increment, decrement } = countSlice.actions;
