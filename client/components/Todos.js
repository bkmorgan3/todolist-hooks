import React, { useState } from 'react';

const Todos = props => {
  console.log("props", props)
  return (<div>
    <ul>
      {props.todos.length > 0 ? (
        props.todos.map(todo => (

          < li key={todo.id}> {todo.todo_text}
            < button > Edit Todo</button>
            <button>Delete Todo</button>
          </li>
        ))
      ) : <h1>Nada</h1>}
    </ul >
  </div >
  )
}

export default Todos;