import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
 const [count,setcount] = useState(1)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>{
        setcount(count+1)
      }}><i class="fa-solid fa-plus"></i></button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>{
        if(count>0)
       { setcount(count-1)} 
      }}><i class="fa-solid fa-minus"></i></button>
    </div>
  );
};

export default Counter;
