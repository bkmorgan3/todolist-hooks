import React, {useState} from 'react';

const EditForm = props => {
    console.log("props in edit mode", props)
    const [todo, setTodo] = useState(props.currentTodo)

    const handleInputChange = e => {
        const {name, value} = event.target 

        setTodo(e.target.value)
    }

    return (
        <form onSubmit={e =>{
            e.preventDefault();

            props.updateTodo(todo)
        }}>
            <label>Edit Todo</label>
            <input type='text' name="todo" value={props.currentTodo.todo_text} onChange={handleInputChange} />
            <button>Update Todo</button>
            <button onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    )
}

export default EditForm;