import { useState } from "react";
import Todo from "./todo";

import Button from '@mui/material/Button';

import "./todoApp.css";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  // const [editItem, setEditItem] = useState(null);

  function handleInputChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    const oldTodos = [...todos];
    oldTodos.unshift(newTodo);

    setTodos(oldTodos);
    setTitle("");
  }

  function handleDelete(id) {
    const tempTodos = todos.filter((item) => item.id !== id);

    setTodos([...tempTodos]);
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos([...temp]);
  }

  function handleCheckboxChange(id, status) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.completed = status;
    setTodos([...temp]);
  }

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="todoCreateForm">
        <input
          onChange={handleInputChange}
          value={title}
          className="todoInput"
        />
        {/* <input value="Create todo" type={"submit"} className="buttonCreate" /> */}
        <Button variant="contained" color="success" value="Create todo" type={"submit"} className="buttonCreate" 
          sx={{ 
            backgroundColor: '#24DC03',
            Textcolor: "black",
            opacity: [0.8],
            '&:hover': {
              backgroundColor: '#1DBF00',
              opacity: [1 ],
              },
          }}>
        Add
          </Button>
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onComplete={handleCheckboxChange}
          />
        ))}
      </div>
    </div>
  );
}
