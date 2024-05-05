import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useRenderCount } from "../../lib/hooks/useRenderCount";

export const Counter = () => {
  useRenderCount("Counter");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect with empty dep:", count);

    return () => console.log("useEffect cleanup with empty dep:", count);
  }, []);

  useEffect(() => {
    console.log("useEffect no dep:", count);

    return () => console.log("useEffect no dep cleanup", count);
  });

  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(count + 1)}>Counter 1: {count}</button>
    </div>
  );
};
