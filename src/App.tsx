import { useState } from "react";
import styles from "./App.module.scss";
import { Counter } from "./components/counter";

function App() {
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  return (
    <main className={styles.main}>
      <button onClick={() => setIsCounterVisible(!isCounterVisible)}>
        Toggle counter
      </button>

      {isCounterVisible && <Counter />}
    </main>
  );
}

export default App;
