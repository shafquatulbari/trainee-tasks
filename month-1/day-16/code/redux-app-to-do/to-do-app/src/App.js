import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
