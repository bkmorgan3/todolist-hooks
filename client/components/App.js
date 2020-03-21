import React, { useState, useEffect } from 'react';
import Todos from './Todos';
import AddTodoForm from './AddTodoForm';
import EditForm from './EditForm';

function App() {

  const todoData = [
    { id: 1, text: "have a snack" },
    { id: 2, text: 'find a chicken sandwich' },
    { id: 3, text: "see Andang all day" }
  ];
  const initialFormState = {text: ''};
  const URL = 'http://localhost:8080/api/todos';
  const [todos, setTodos] = useState(todoData);
  const [editing, setEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState(initialFormState)



  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])


  const addTodo = todo => {
    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todo })
    }
    fetch(URL, opts)
      .then(res => res.json())
      .then(newTodo => {
        setTodos(todos => {
          return [...todos, newTodo[0]]
        })
      })
      .catch((console.error))
  }

  const deleteTodo = todo => {
    const opts = {
      method: 'DELETE',
    }
    fetch(`${URL}/${todo}`, opts)
    setTodos(todos.filter(item => item.id !== todo))
  }

  const editTodo = todo => {
    console.log("editing todo", todo)
    setEditing(true)
    setCurrentTodo(todo)
    const opts = {
      method: 'PUT',
      body: JSON.stringify({todo})
    }
  
  }

  const updateTodo = (id, updatedTodo) => {
    setEditing(false)

    setTodos(todos.map(item => (item.id === id? updatedTodo: item)))
  }

  return (
    <div>
      <h1>My Todo lists.</h1>
      <div className="row">
        <div className="todo-form">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditForm
                editing={editing}
                setEditing={setEditing}
                currentTodo={currentTodo}
                updateTodo={updateTodo}
              />
              </div>
          ) : (
          <div>
          <h2>Add a Todo</h2>
          <AddTodoForm addTodo={addTodo} />
          </div>
          )}
        </div>
        <div className="todos">
          <h2>View Todos</h2>
          <Todos todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
      </div>
    </div>
  )
}

export default App;