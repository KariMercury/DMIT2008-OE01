
import { useState } from 'react';

import TextField from '@mui/material/TextField';



export default function TodoList() {
    
    const [todoItem, setTodoItem] = useState("I hate js")

    return (
        <TextField 
            id="standard-basic"
            label="New todo item"
            variant="standard"
            sx={{ width: '100%' }}
        />
    )
}