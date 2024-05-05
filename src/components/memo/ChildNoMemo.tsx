import { FC } from "react";
import { useRenderCount } from "../../lib/hooks/useRenderCount";

export const ChildNoMemo: FC<{ obj: { count: number } }> = ({ obj }) => {
  useRenderCount("Child without memo");

  return <p>Not memoized count value: {obj.count}</p>;
};
