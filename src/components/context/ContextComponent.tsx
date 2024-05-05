import { FC, PropsWithChildren, useMemo, useState } from "react";
import { ValuableContext } from "./context";
import { useRenderCount } from "../../lib/hooks/useRenderCount";

export const ContextComponent: FC<PropsWithChildren> = ({ children }) => {
  useRenderCount("Context provider component");

  const [count, setCount] = useState(0);

  const obj = useMemo(() => ({}), []);

  return (
    <ValuableContext.Provider value={obj}>
      <button onClick={() => setCount(count + 1)}>Incr context count</button>
      {children}
    </ValuableContext.Provider>
  );
};
