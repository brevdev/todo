import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GetTodos, AddTodo, TodoType } from "./agent";
import { isPropertySignature } from "typescript";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const refreshTodoList = async () => {
    let response = await GetTodos();
    console.log(response);
    setTodoList(response.todos);
  };

  const createTodo = async () => {
    let response = await AddTodo(newTodo);
    refreshTodoList();
  };

  useEffect(() => {
    refreshTodoList();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {todoList.map((t) => {
            return !t.isComplete ? <Checkbox title={t.title} onChange={()=>{}} isChecked={t.isComplete} /> : "" ;
          })}
          {todoList.map((t) => {
            return t.isComplete ? <Checkbox title={t.title} onChange={()=>{}} isChecked={t.isComplete} /> : "" ;
          })}
        </div>

        <input
          value={newTodo}
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
        />

        <button onClick={createTodo}>add todo</button>
      </header>
    </div>
  );
}

export default App;


interface CheckboxProps {
  title: string;
  isChecked: boolean;
  onChange: ()=>void;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <label>
      <input 
      type={"checkbox"}
      onChange={props.onChange}
        value={props.title}
        checked={props.isChecked}
      />
      {props.title}
    </label>
  )
}