import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/TodoSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
