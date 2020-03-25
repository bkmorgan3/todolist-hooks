import React, { useState } from 'react';

const Todos = props => {

  return (
  <table>
    <thead>
      <tr>
        <th>Todos</th>
        <th>Actions</th>
      </tr>
    </thead >
    <tbody>

    {props.todos.length > 0 ? (
      props.todos.map(todo => (
        
        <tr key={todo.id}> 
        <td>{todo.todo_text} </td>
          <td>
            < button onClick={() => props.editTodo(todo)}> Edit Todo</button>
            <button onClick={() => props.deleteTodo(todo.id)}>Delete Todo</button>
          </td>
        </tr>
      ))
      ) : 
      <tr>
        <td colSpan={3}>No Todos</td>
      </tr>
      }
      </tbody>
  </table >
  )
}

export default Todos;