// time.js

import { useCallback, useRef } from 'react';

export function useTimeout() {
  const timeoutRef = useRef();

  const handleTimeout = useCallback((callback, timeout = 5000) => {
    timeoutRef.current = setTimeout(callback, timeout);
  }, []);

  const handleClearTimeout = useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, []);

  return { timeoutRef, handleTimeout, handleClearTimeout };
}

export function useInterval() {
  const intervalRef = useRef();

  const handleInterval = useCallback((callback, interval = 5000) => {
    intervalRef.current = setInterval(callback, interval);
  }, []);

  const handleClearInterval = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  return { intervalRef, handleInterval, handleClearInterval };
}
