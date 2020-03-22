import React, { useState } from 'react';

const Todos = props => {

  return (<div>
    <ul>
      {props.todos.length > 0 ? (
        props.todos.map(todo => (

          < li key={todo.id}> {todo.todo_text}
            < button onClick={() => props.editTodo(todo)}> Edit Todo</button>
            <button onClick={() => props.deleteTodo(todo.id)}>Delete Todo</button>
          </li>
        ))
      ) : <h1>Nada</h1>}
    </ul >
  </div >
  )
}

export default Todos;