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

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/todos", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: todo })
  //     .then(res => console.log(res))
  //     .then(data => console.log("success", data))

  // }, [todos])



  function useAsyncEndpoint(fn) {
    const [res, setRes] = useState({
      data: null,
      complete: false,
      pending: false,
      error: false
    });
    const [req, setReq] = useState()

    useEffect(() => {
      if (!req) return;
      setRes({
        data: null,
        pending: true,
        error: false,
        complete: false
      });
      axios(req)
        .then(res => setRes({
          data: res.data,
          pending: false,
          error: false,
          complete: true
        }))
        .catch(() => setRes({
          data: null,
          pending: false,
          error: true,
          complete: true
        }));
    }, [req])
    return [res, (...args) => setReq(fn(...args))];
  }

  function postTodoEndpoint() {
    return useAsyncEndpoint(todo => ({
      url: 'http://localhost:8080/api/todos',
      method: 'POST',
      todo
    }))
  }

  const addTodo = todo => {
    console.log("adding a todo", todo)
    postTodoEndpoint(todo)
    setTodos([...todos, todo])
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