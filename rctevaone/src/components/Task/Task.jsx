import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
import AddTask from "../AddTask/AddTask";

const Task = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [todo, setTodo] = useState([]);

  const getData = (text) => {
    setTodo([...todo, text]);
  };

  const [del, setDel] = useState(false);

  const erase = () => {
    setDel(true);
  };
  return (
    <li data-cy="task" className={styles.task} getData={getData} >
      {todo.map((el,index)=>(
        <div>
          <input type="checkbox" data-cy="task-checkbox" />
        <div data-cy="task-text"></div>
          
        </div>
      ))}
      <Counter/>
      <button data-cy="task-remove-button" onClick={erase}>X</button>
      </li>
  );
};

export default Task;
