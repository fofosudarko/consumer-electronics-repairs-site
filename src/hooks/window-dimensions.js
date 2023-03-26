// window-dimensions.js

import { useState, useLayoutEffect, useMemo } from 'react';

export default function useWindowDimensions(options = {}) {
  const { height = 480, width = 640 } = options;
  const { innerWidth, innerHeight } = useMemo(() => {
    return typeof window !== 'undefined' ? window : {};
  }, []);
  const [windowHeight, setWindowHeight] = useState(height);
  const [windowWidth, setWindowWidth] = useState(width);

  useLayoutEffect(() => {
    if (innerWidth) {
      setWindowWidth(innerWidth);
    }

    if (innerHeight) {
      setWindowHeight(innerHeight);
    }
  }, [innerWidth, innerHeight]);

  return { windowHeight, windowWidth };
}
