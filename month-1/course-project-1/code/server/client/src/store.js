import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; // Fix import here
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production", // Enables Redux DevTools in development
});

export default store;
