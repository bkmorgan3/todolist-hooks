const express = require('express');
const bodyParser = require('body-parser')
const todoController = require("./controllers/todoController");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/todos", todoController.getAllTodos, (req, res) => {
  res.status(200).json(res.locals.todos)
});

app.post("/todos", todoController.addTodo, (req, res) => {
  res.status(200).json(res.locals.todo)
});

app.delete("/todos/:id", todoController.deleteTodo, (req, res) => {
  res.status(200).json()
});

app.put("/todos/:id", todoController.updateTodo, (req, res) => {
  res.status(200).json(res.locals.todos)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});