import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // When the app load, we need to listen to the database and fetch new todos as they get added/removed.
  useEffect(() => {
    // This code here... fires when the app.js loads.
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // Will stop the REFRESH

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput(""); // clear up the input after clicking add todo button
  };

  return (
    <div className="App">
      <h1>Hello Bitta Monk Programmer! 🎮</h1>
      <form>
        <FormControl>
          <InputLabel>✏️Write a ToDo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add To Do
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <ToDo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
