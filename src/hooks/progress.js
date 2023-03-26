// progress.js

import { useState, useCallback } from 'react';

export default function useProgress() {
  const [progress, setProgress] = useState(false);

  const handleProgress = useCallback(() => {
    setProgress((state) => !state);
  }, []);

  return { progress, setProgress, handleProgress };
}
