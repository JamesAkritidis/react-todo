import React from "react";
import './App.css';
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <div className="todo-app">
     <h1>Todo App</h1>
     <TodoForm />
    </div>
  );
}

export default App;
