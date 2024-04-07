import React, { useContext } from "react";
import { useRenderCount } from "../../lib/hooks/useRenderCount";
import { ValuableContext } from "./context";

export const ContextChild = () => {
  useRenderCount("Child with context");

  useContext(ValuableContext);

  return <p>Child with context</p>;
};
