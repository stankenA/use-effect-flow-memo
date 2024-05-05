import { Child } from "./Child";
import { ContextChild } from "./ContextChild";

export const ContextParent = () => {
  return (
    <>
      <Child />
      <ContextChild />
    </>
  );
};
