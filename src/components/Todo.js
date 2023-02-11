import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { db } from './Firebase';
import { DeleteForever } from '@mui/icons-material';
const Todo = ({arr}) => {
  return (
    <div>
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar/>
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
            </ListItem>
            <DeleteForever fontSize='large'
            onClick = {() => {db.collection('todos').doc(arr.id).delete()}}/>
        </List>
    </div>
  )
}

export default Todo;