import React, { useState } from 'react';

const AddTodoForm = props => {
  const initialFormState = ''
  const [todo, setTodo] = useState(initialFormState)

  const handleChange = e => {
    const { name, value } = e.target

    setTodo(e.target.value)
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (!todo) return
        props.addTodo(todo)
        setTodo(initialFormState)
      }}
    >
      <label htmlFor="title">Your Todo ---></label>
      <input type="text" name="todo" placeholder="right here!" value={todo} onChange={handleChange} />
      <button>Add Todo</button>
    </form >
  )
}

export default AddTodoForm;