const pool = require("../database/database");

const addTodo = (req, res, next) => {
  console.log("inside make a todo controller");
  console.log("req.body", req.body.todo_text)
  const qAddTodo = `INSERT INTO todos (todo_text) VALUES ('${req.body.todo_text}')`;
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
  console.log("getting all the todos")
  const queryAllTodos = `SELECT * FROM todos;`
  pool.query(queryAllTodos, (err, result) => {
    if (err) return next(err);
    if (result === undefined) {
      console.log("its broken")
      return next()
    }
    console.log(result.rows)
    res.locals.todos = result.rows;
    return next();
  })
}

const deleteTodo = (req, res, next) => {
  console.log("im a delete controller");
  console.log("r.body", req.body)
  const deleteId = req.params.id
  console.log("r.params", deleteId)
  const deleteQ = `DELETE FROM todos WHERE todos.id= ${deleteId}`;
  pool.query(deleteQ, (err, result) => {
    if (err) return next(err);
    res.locals.todos = result.rows
    return next();
  });


}

const updateTodo = (req, res, next) => {
  console.log("i am updating bitcheesss!")
  const updateQ = `UPDATE todos SET todo_text='${req.body.todo_text}' WHERE todos.id=${req.params.id}`;
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