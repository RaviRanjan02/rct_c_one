import React, { useState } from "react";
import styles from "./addTask.module.css";
const AddTask = ({ getData }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [text, setText] = useState("");

  const handleChange = (el) => {
    setText(el.target.value);
  };

  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        placeholder="Add task....."
        onChange={handleChange}
      />
      <button
        data-cy="add-task-button"
        onClick={() => {
          getData(text);
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTask;
