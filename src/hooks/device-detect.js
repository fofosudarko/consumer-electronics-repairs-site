// device-detect.js

import { useEffect, useRef } from 'react';

export default function useDeviceDetect() {
  const isAndroidRef = useRef();
  const isiOSRef = useRef();
  const isWebRef = useRef();

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (!userAgent) {
      isWebRef.current = false;
      isiOSRef.current = false;
      isAndroidRef.current = false;
    } else {
      isWebRef.current = !/(Android|iPhone|iPad)/.test(userAgent);
      isAndroidRef.current = /Android/.test(userAgent);
      isiOSRef.current = /(iPhone|iPad)/.test(userAgent);
    }
  }, []);

  return {
    isWeb: isWebRef.current,
    isiOS: isiOSRef.current,
    isAndroid: isAndroidRef.current,
  };
}
