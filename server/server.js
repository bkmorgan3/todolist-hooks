const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const todoController = require("../controllers/todoController");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.set({ 'content-type': 'text/html; UTF-8' })
    .sendFile(path.join(__dirname, '../client/index.html'))
})

app.get("/api/todos", todoController.getAllTodos, (req, res) => {
  res.status(200).json(res.locals.todos)
});

app.post("/api/todos", todoController.addTodo, (req, res) => {
  res.status(200).json(res.locals.todo)
});

app.delete("/api/todos/:id", todoController.deleteTodo, (req, res) => {
  res.status(200).json()
});

app.put("/api/todos/:id", todoController.updateTodo, (req, res) => {
  res.status(200).json(res.locals.todos)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});