import React, { FC } from "react";
import { useRenderCount } from "../../lib/hooks/useRenderCount";

export const Child: FC<{ obj: { count: number } }> = ({ obj }) => {
  useRenderCount("Child");

  return <p>Not memoized count value: {obj.count}</p>;
};
