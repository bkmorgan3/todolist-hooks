import React, { useState } from 'react';

const AddTodoForm = props => {
  const initialFormState = ''
  const [todo, setTodo] = useState(initialFormState)

  const handleChange = e => {
    const { name, value } = e.target

    setTodo(e.target.value)
  }
  return (
    <form className="add-todo"
      onSubmit={e => {
        e.preventDefault()
        if (!todo) return
        props.addTodo(todo)
        setTodo(initialFormState)
      }}
      >
      <label className="item item-1" htmlFor="title">Your Todo</label>
      <input className="item item-2" type="text" name="todo" placeholder="right here!" value={todo} onChange={handleChange} />
      <button className="item item-3">Add Todo</button>
    </form >
  )
}

export default AddTodoForm;