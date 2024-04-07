import React from "react";
import { Child } from "./Child";
import { ContextChild } from "./ContextChild";

export const ContextParent = () => {
  return (
    <section>
      <Child />
      <ContextChild />
    </section>
  );
};
