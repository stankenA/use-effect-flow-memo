import { useEffect, useRef } from "react";

export const useRenderCount = (componentName: string) => {
  const rendersNum = useRef(0);
  console.log(`${componentName} renders: ` + rendersNum.current);

  useEffect(() => {
    rendersNum.current++;
  });
};
