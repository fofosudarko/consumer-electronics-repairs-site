// device-dimensions.js

import { useEffect, useReducer } from 'react';
import { useMediaQuery } from 'react-responsive';

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_DEVICE_DIMENSIONS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default function useDeviceDimensions() {
  const initialState = {
    isSmallDevice: false,
    isMediumDevice: false,
    isLargeDevice: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const isSmallDevice = useMediaQuery({ maxWidth: 576 });
  const isMediumDevice = useMediaQuery({ maxWidth: 768 });
  const isLargeDevice = useMediaQuery({ minWidth: 992 });

  useEffect(() => {
    dispatch({
      type: 'UPDATE_DEVICE_DIMENSIONS',
      payload: { isSmallDevice, isMediumDevice, isLargeDevice },
    });
  }, [isSmallDevice, isMediumDevice, isLargeDevice]);

  return {
    isSmallDevice: state.isSmallDevice,
    isMediumDevice: state.isMediumDevice,
    isLargeDevice: state.isLargeDevice,
  };
}
