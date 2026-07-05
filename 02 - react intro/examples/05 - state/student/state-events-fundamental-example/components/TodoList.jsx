// state lets us store persistent data across component re-renders,
// and automate re-rendering whenever that data changes.

import { useState } from 'react';

import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';



export default function TodoList() {

  // first term:  the variable that will hold the value
  // second term: the setter function; the only thing allowed to change that value
  // initial param for useState: initial value
  const [todoItem, setTodoItem] = useState("")
  const [allTodos, setAllTodos] = useState([])

  const onTodoTextChange = (event) => {
    // call state variable's setter w/ new value to write.
    setTodoItem(event.target.value)
  }

  const onAddTodoClick = () => {
    console.log("clicked!")
    // .push does! work bcuz setter is a one way option and we cant change the variable
    // we need to build a new array
    // that means take what we had before and add the new thing
    
    const newTodos = [...allTodos, todoItem]
    //...spreader says get all the things 
    // the the elements inside the alltodos and tack then on to the end in NEW ARRAY
    setAllTodos(newTodos)
    console.log(allTodos)
  }

    return (
    
    <Grid container spacing={2} sx={{ my: 4 }}>

        <Grid size={12}>
            <TextField 
                id="standard-basic"
                label="New todo item"
                variant="standard"
                sx={{ width: '100%' }}
                value={todoItem}
                onChange={onTodoTextChange}
            />
        </Grid>
        {/* This is an example of Grid spacing  */}
        <Grid size={3}>
            3 WIDE
        </Grid>

        <Grid size={3}>
            3 WIDE
        </Grid>

        <Grid size={8}>
            8 WIDE
        </Grid>
        {/* I personally think 13 is cooler than 12 but math disagrees..  one of the many things we disagree on */}
        <Button variant="contained"
                onClick={onAddTodoClick}
        >
            Add ToDo Item
        </Button>
        <Grid size={12}>
            <List sx={{ width: '75%' }}>
                {allTodos.map(
                    (todo, index) => {
                        return <ListItem key={index}>
                            <ListItemText>
                                <Typography> {todo} </Typography>
                            </ListItemText>
                        </ListItem>
                    }
                )}
            </List>

        </Grid>

    </Grid>

      
    )
}