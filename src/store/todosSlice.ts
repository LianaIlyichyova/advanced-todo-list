import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "@shared-types/todo";
import mockTodos from "./mockTodos";

interface TodosState {
  todos: Todo[];
}

const getInitialTodos = (): Todo[] => {
  try {
    const stored = localStorage.getItem("todos");
    if (stored) {
      return JSON.parse(stored) as Todo[];
    }
  } catch (error) {
    console.error("Failed to parse todos from localStorage", error);
  }
  return mockTodos;
};

const initialState: TodosState = {
  todos: getInitialTodos(),
};

const saveToLocalStorage = (todos: Todo[]) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Failed to save todos to localStorage", error);
  }
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
      saveToLocalStorage(state.todos);
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
      saveToLocalStorage(state.todos);
    },
    updateTodo(state, action: PayloadAction<Todo>) {
      const index = state.todos.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
        saveToLocalStorage(state.todos);
      }
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      saveToLocalStorage(state.todos);
    },
  },
});

export const { setTodos, addTodo, updateTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
