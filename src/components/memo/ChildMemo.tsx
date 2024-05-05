import React, { FC, memo } from "react";
import { useRenderCount } from "../../lib/hooks/useRenderCount";

export const ChildMemo: FC<{
  obj?: {
    count: number;
  };
}> = memo(({ obj }) => {
  useRenderCount("ChildMemo");

  return <p>Memoized count value: {obj?.count}</p>;
});
