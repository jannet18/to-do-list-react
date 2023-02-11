import React from "react";
import Todo from "./components/Todo";
import "./App.css";
import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import { db } from "./components/Firebase";
import { FormControl, Button, Input, InputLabel } from "@mui/material";


function App() {
  // declare variables
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState([""]);
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })

  }, [input])
  console.log(todos);
  // addtodo function to change the state of todos with setTodos,
  // appends the already existing content with user-typed content
  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>TODO REACT-FIREBASE</h1>
      <form>
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((it) => (
          <Todo key={it.id} arr={it}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
