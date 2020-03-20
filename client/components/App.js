import React, { useState, useEffect } from 'react';
import Todos from './Todos'

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
  console.log("data in app", todos)
  return (
    <div>
      <h1>My Todo lists.</h1>
      <div className="row">
        <div className="todo-form">
          <h2>Add a Todo</h2>
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