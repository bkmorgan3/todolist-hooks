const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  connectionString: process.env.DB_URL
});

module.exports = {
  query: (text, params, cb) => {
    console.log('executed query', text);
    return pool.query(text, params, cb);
  }
}



/*  

    // fetch(`${URL}/${todo}`, opts)
    // .then (res => res.json())
    // .then(data => console.log("data rec", data))
    // setCurrentTodo({id: todo.id, todo_text: todo.todo_text})


*/