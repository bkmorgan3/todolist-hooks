import React, { useState, useEffect } from 'react';

const EditForm = props => {
  const [todo, setTodo] = useState(props.currentTodo)
  console.log("props in edit ", props)
  console.log("todo", todo)

  const handleInputChange = e => {
    const { name, value } = event.target

    setTodo({ ...todo, todo_text: value })
    console.log("the updated to do is", todo)
  }

  useEffect(() => {
    setTodo(props.currentTodo)
  }, [props])

  return (
    <form onSubmit={e => {
      e.preventDefault();

      props.updateTodo(todo.id, todo)
    }}>
      <label>Edit Todo</label>
      <input type='text' name="todo" value={todo.todo_text} onChange={handleInputChange} />
      <button>Update Todo</button>
      <button onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  )
}

export default EditForm;