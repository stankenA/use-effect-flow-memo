import { useState } from "react";
import { Counter } from "../counter";
import styles from "./styles.module.scss";
import { useRenderCount } from "../../lib/hooks/useRenderCount";
import { Parent } from "../memo/Parent";
import { ContextComponent } from "../context/ContextComponent";
import { ContextParent } from "../context/ContextParent";

export const Main = () => {
  useRenderCount("Main");

  const [isCounterVisible, setIsCounterVisible] = useState(false);

  return (
    <main className={styles.main}>
      <button onClick={() => setIsCounterVisible(!isCounterVisible)}>
        Toggle counter
      </button>

      {/* {isCounterVisible && <Counter />} */}
      {/* {isCounterVisible && <Parent />} */}

      <ContextComponent>
        <ContextParent />
      </ContextComponent>
    </main>
  );
};
