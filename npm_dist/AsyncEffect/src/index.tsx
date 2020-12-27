import * as React from "react";

// Allows for async usage of the useEffect react hook and properly
// handles cleanup as well (which is difficult to do async with
// useEffect react hook)
export function useAsyncEffect(
  effect: () => Promise<void | (() => void)>,
  dependencies?: any[]
) {
  return React.useEffect(() => {
    const cleanupPromise = effect();
    return () => {
      cleanupPromise.then((cleanup) => cleanup && cleanup());
    };
  }, dependencies);
}
