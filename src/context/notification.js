// app.js

import React, { useReducer, useCallback } from 'react';
import produce from 'immer';
import PropTypes from 'prop-types';

const NotificationContext = React.createContext();

const initialState = {
  notification: null,
  notificationPosition: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      draft.notification = action.payload.notification;
      draft.notificationPosition = action.payload.position;
      return;
    case 'CLEAR_NOTIFICATION_STATE':
      return initialState;
    default:
      return draft;
  }
}, initialState);

function NotificationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer);

  const setNotification = useCallback(
    (notification, position = 'bottom-center') => {
      dispatch({
        type: 'SET_NOTIFICATION',
        payload: { notification, position },
      });
    },
    []
  );
  const clearNotificationState = useCallback(() => {
    dispatch({ type: 'CLEAR_NOTIFICATION_STATE' });
  }, []);

  return (
    <NotificationContext.Provider
      value={{ ...state, setNotification, clearNotificationState }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationContext, NotificationProvider };

NotificationProvider.propTypes = {
  children: PropTypes.node,
};
NotificationProvider.defaultProps = {
  children: null,
};
