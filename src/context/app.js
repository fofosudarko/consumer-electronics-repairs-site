// app.js

import React, { useReducer, useCallback } from 'react';
import produce from 'immer';

const AppContext = React.createContext();

const initialState = {
  error: null,
  errorPosition: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      draft.error = action.payload.error;
      draft.errorPosition = action.payload.position;
      return;
    case 'CLEAR_APP_STATE':
      return initialState;
    default:
      return draft;
  }
}, initialState);

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer);

  const setError = useCallback((error, position = 'bottom-center') => {
    dispatch({
      type: 'SET_ERROR',
      payload: { error, position },
    });
  }, []);
  const clearAppState = useCallback(() => {
    dispatch({ type: 'CLEAR_APP_STATE' });
  }, []);

  return (
    <AppContext.Provider value={{ ...state, setError, clearAppState }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
