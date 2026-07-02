
import { useState } from 'react';

import TextField from '@mui/material/TextField';



export default function TodoList() {
    
    const [todoItem, setTodoItem] = useState("I hate js")

    const onTodoTextChange = (event) => {
        setTodoText(event.target.value)
        console.log(todoItem)
    }

    return (
    <div>
        <TextField 
            id="standard-basic"
            label="New todo item"
            variant="standard"
            sx={{ width: '100%' }}
            value={todoItem}
            onChange={onTodoTextChange}
        />
        <Button variant="contained"
                onClick={onTodoTextChange}
        >
            Add ToDo Item
        </Button>
    </div>    
    )
}