import { useMemo, useState } from "react";
import { ChildMemo } from "./ChildMemo";
import { ChildNoMemo } from "./ChildNoMemo";
import { useRenderCount } from "../../lib/hooks/useRenderCount";

export const ParentMemo = () => {
  useRenderCount("ParentMemo");
  const [count, setCount] = useState(0);

  const obj = useMemo(() => ({ count: 0 }), []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increase count num: {count}
      </button>
      <ChildMemo obj={obj} />
      <ChildNoMemo obj={obj} />
    </div>
  );
};
