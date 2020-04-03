import React, { useState } from 'react';
import Moment from 'moment';

const Todos = props => {
  console.log("props", props)
  return (
    <table>
      <thead>
        <tr>
          <th>Todos</th>
          <th>Actions</th>
          <th>Updated At</th>
        </tr>
      </thead >
      <tbody>

        {props.todos.length > 0 ? (
          props.todos.map(todo => (

            <tr key={todo.id}>
              <td>{todo.todo_text} </td>
              <td>
                <button onClick={() => props.editTodo(todo)}> Edit Todo</button>
                <button onClick={() => props.deleteTodo(todo.id)}>Delete Todo</button>
              </td>
              <td><p>{Moment(todo.updated_at).format('LLL')}</p></td>

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