import React from "react";
import TaskHeader from "./TaskHeader/TaskHeader"
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"
import styles from "./taskApp.module.css";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <div className={styles.taskapp}> 
      <div className={styles.head}>
      <TaskHeader/>
      </div>
      <AddTask/>
      </div>
     <Tasks/>
    </div>
  );
};

export default TaskApp;
