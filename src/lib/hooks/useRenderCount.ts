import { useEffect, useRef } from "react";

export const useRenderCount = (componentName: string) => {
  const rendersNum = useRef(1);
  console.log(`${componentName} renders: ` + rendersNum.current);

  useEffect(() => {
    rendersNum.current++;
  });
};
