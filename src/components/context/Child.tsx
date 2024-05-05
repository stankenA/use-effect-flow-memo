import { useRenderCount } from "../../lib/hooks/useRenderCount";

export const Child = () => {
  useRenderCount("Child with no context");

  return <p>Child with no context</p>;
};
