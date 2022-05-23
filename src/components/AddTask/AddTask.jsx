import React, { useState } from "react";

import Task from "../Task/Task";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [value,setValue] = useState("")
  const [todos, setTodos] = useState([])

  const addTodos = (newTodos) =>{
    setTodos([...todos,newTodos])
  }
  const deleTodo = (value) =>{
    setTodos(todos.filter((todos)=> todos !== value))
  }
  return (
    <div className={styles.todoForm}>
      <input placeholder="ADD TASK..." className={styles.add} data-cy="add-task-input" type="text" 
      value={value} onChange={(e)=>{
        setValue(e.target.value)
      }} />
      <button className={styles.btnn} data-cy="add-task-button" onClick={()=>{
        addTodos(value)
        console.log(value)
        setValue("")
      }}><i class="fa-solid fa-plus"></i></button>
      <Task todos={todos}  value={todos.value} deleTodo={deleTodo}/>
    </div>
  );
};

export default AddTask;
