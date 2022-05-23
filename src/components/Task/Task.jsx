import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
const Task = ({todos,deleTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  

  return (
    <div >
      {todos.map((todo)=>{
        return <div data-cy="task" className={styles.task}>
      <div className={styles.div}>
        <input className={styles.check} type="checkbox" data-cy="task-checkbox" />
        <div data-cy="task-text">{todo}</div>
      </div>
        <div className={styles.div1}>
         {/* Counter here */}
         <Counter/>
        <button data-cy="task-remove-button">{deleTodo} X</button>
        </div>
       
       
        </div>
      })}
     
      </div>
  
  );
};

export default Task;
