import React, { useMemo, useState } from "react";
import { ChildMemo } from "./ChildMemo";
import { Child } from "./Child";

export const Parent = () => {
  const [count, setCount] = useState(0);

  const obj = useMemo(() => ({ count: 0 }), []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increase count num: {count}
      </button>
      <ChildMemo obj={obj} />
      <Child obj={obj} />
    </div>
  );
};
