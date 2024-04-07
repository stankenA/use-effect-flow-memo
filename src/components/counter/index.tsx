import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect no dep");

    return () => console.log("useEffect no dep cleanup");
  });

  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(count + 1)}>Counter 1: {count}</button>
    </div>
  );
};
