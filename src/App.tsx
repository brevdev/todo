import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// 2️⃣: uncomment below
// import { GetTodos, TodoType } from "./agent";
// 3️⃣: uncomment below
// import { ModifyTodo } from "./agent";
// 1️⃣: uncomment below
// import { CreateTodo } from "./agent";
import { BuiltWithBrev } from "built-with-brev";

function App() {
  const [newTodo, setNewTodo] = useState("");
  /* 2️⃣
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  /*

  /* 2️⃣
  const refreshTodoList = async () => {
    let response = await GetTodos();
    console.log(response);
    setTodoList(response.todos);
  }; */

  /* 1️⃣
  const createTodo = async () => {
    let response = await CreateTodo(newTodo);
      // 2️⃣ refreshTodoList();
  };
  */

  /* 3️⃣
  const modifyTodo = async (id: string) => {
    let response = await ModifyTodo(id);
    // 2️⃣ refreshTodoList();
  };
  */

  /* 2️⃣
  useEffect(() => {
    refreshTodoList();
  }, []);
  */

  return (
    <div className="App">
      <header className="App-header">
        <div className={"todo-container"}>
          {/* 2️⃣
          
          {todoList.map((t) => {
            return !t.isComplete ? (
              <Checkbox
                todo={t}
                onChange={() => {
                  modifyTodo(t.id);
                }}
              />
            ) : (
              ""
            );
          })}
           */}
        </div>

        {/* 1️⃣ 
          <input
            value={"hello"}
            onChange={(event) => {
              console.log(event.target.value);
            }}
          />

          <button
            onClick={()=>{alert("you clicked me!")}}
            // onClick={createTodo}
            >add todo</button>
        */}


        <div className={"footer"}>
          <BuiltWithBrev />
        </div>

      </header>

    </div>
  );
}

export default App;


/*
  <Checkbox
  todo={t}
  onChange={() => {
    modifyTodo(t.id);
  }}
  />
*/

/* 3️⃣
interface CheckboxProps {
  todo: TodoType;
  onChange: (id: string) => void;
}

const Checkbox = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(props.todo.isComplete);

  return (
    <label>
      <input
        type={"checkbox"}
        onChange={() => {
          setIsChecked(!isChecked);
          props.onChange(props.todo.id);
        }}
        value={props.todo.title}
        checked={isChecked}
      />
      {props.todo.title}
    </label>
  );
};
*/