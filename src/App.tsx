import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GetTodos, AddTodo } from './agent';

function App() {

  const [newTodo, setNewTodo] = useState("");

  const init = async () => {
    let response = await GetTodos();
    console.log(response);
  }

  const createTodo = async () => {
    let response = await AddTodo(newTodo);
    init();
  }

  useEffect(()=>{
    init()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        
        <input 
          value={newTodo}
          onChange={(event)=>{
            setNewTodo(event.target.value)
          }}
        />
        
        <button onClick={createTodo}>add todo</button>



      </header>
    </div>
  );
}

export default App;
