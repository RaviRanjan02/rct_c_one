import React ,{useState} from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count,setCount] = useState(0)
  
  const increment =()=>{
    setCount(count+1)
  }

  const decrement =()=>{
    if(count<=1){
      return
    }
    setCount(count-1)
  }
  console.log(count);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button"  onClick={increment}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
