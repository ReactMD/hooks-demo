import { useEffect, useRef } from "react";

// match the setInterval API with callback and delay
export default (callback, delay) => {
  // Keep a reference to the component we are using this hook in
  // Need to do this because it will persist between renders
  const savedCallback = useRef();

  // On render, save the most recent callback into the ref
  useEffect(() => {
    savedCallback.current = callback;
  });

  // On render (only when delay changes), use persisted callback
  // to set interval based on delay. Cleanup by clearing interval.
  useEffect(() => {
    const callback = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(callback, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
