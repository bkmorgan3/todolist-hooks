const pool = require("../database/database");

const addTodo = (req, res, next) => {
  const qAddTodo = {
    text: `INSERT INTO todos (todo_text) VALUES ($1) RETURNING *`,
    values: [req.body.todo]
  };
  pool.query(qAddTodo, (err, result) => {
    if (err) return next(err);
    if (result === undefined) {
      return next();
    }
    console.log("res", result)
    res.locals.todo = result.rows;
    return next();
  })
}

const getAllTodos = (req, res, next) => {
  const queryAllTodos = `SELECT * FROM todos;`
  pool.query(queryAllTodos, (err, result) => {
    if (err) return next(err);
    if (result === undefined) {
      return next()
    }
    console.log(result.rows)
    res.locals.todos = result.rows;
    return next();
  })
}

const deleteTodo = (req, res, next) => {
  const deleteId = req.params.id
  const deleteQ = `DELETE FROM todos WHERE todos.id= ${deleteId}`;
  pool.query(deleteQ, (err, result) => {
    if (err) return next(err);
    res.locals.todos = result.rows
    return next();
  });


}

const updateTodo = (req, res, next) => {
  const updateQ = `UPDATE todos SET todo_text='${req.body.updatedTodo.todo_text}' WHERE todos.id=${req.params.id}`;
  pool.query(updateQ, (err, result) => {
    if (err) return next(err)
    res.locals.todos = result.rows
    return next()
  })
}

module.exports = {
  addTodo,
  getAllTodos,
  deleteTodo,
  updateTodo
}