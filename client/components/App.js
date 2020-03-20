import React, { useState, useEffect } from 'react';
import Todos from './Todos';
import AddTodoForm from './AddTodoForm';
import axios from 'axios';

function App() {

  const todoData = [
    { id: 1, text: "have a snack" },
    { id: 2, text: 'find a chicken sandwich' },
    { id: 3, text: "see Andang all day" }
  ]
  const [todos, setTodos] = useState(todoData);


  useEffect(() => {
    fetch('http://localhost:8080/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])


  const addTodo = todo => {
    console.log("adding a todo", todo)
    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todo })
    }
    fetch('http://localhost:8080/api/todos', opts)
      .then(res => res.json())
      .then(newTodo => {
        setTodos(todos => {
          console.log("new one", newTodo[0])

          return [...todos, newTodo[0]]
        })
      })
      .catch((console.error))
  }

  return (
    <div>
      <h1>My Todo lists.</h1>
      <div className="row">
        <div className="todo-form">
          <h2>Add a Todo</h2>
          <AddTodoForm addTodo={addTodo} />
        </div>
        <div className="todos">
          <h2>View Todos</h2>
          <Todos todos={todos} />
        </div>
      </div>
    </div>
  )
}

export default App;