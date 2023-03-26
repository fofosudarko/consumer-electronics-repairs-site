import { useReducer, useCallback, useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Toast } from 'react-bootstrap';

import { APP_NAME } from 'src/config';
import { useForceSignOut } from 'src/hooks';
import { readErrorMessage } from 'src/utils';

import { NotificationContext } from 'src/context';
import {
  SuccessNotification,
  InfoNotification,
  NormalNotification,
  WarningNotification,
  AlertNotification,
} from 'src/utils/notification';

function reducer(state = null, action) {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function Notification({ notification, onNotification, delay, position }) {
  const initialState = {
    showNotification: false,
    notificationMessage: null,
  };

  const [{ showNotification, notificationMessage }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const notificationRef = useRef({});
  const handleForceSignOut = useForceSignOut();

  useEffect(() => {
    let notificationMessage;
    if (notification instanceof Error) {
      notificationMessage = readErrorMessage(notification);
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: { notificationMessage, showNotification: true },
      });
      handleForceSignOut(notification);
      notificationRef.current = {
        bg: 'danger',
        text: 'text-white',
      };
    } else if (notification instanceof SuccessNotification) {
      notificationMessage = notification.message;
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: { notificationMessage, showNotification: true },
      });
      notificationRef.current = {
        bg: 'success',
        text: 'text-white',
      };
    } else if (notification instanceof InfoNotification) {
      notificationMessage = notification.message;
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: { notificationMessage, showNotification: true },
      });
      notificationRef.current = {
        bg: 'info',
        text: 'text-white',
      };
    } else if (notification instanceof NormalNotification) {
      notificationMessage = notification.message;
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: { notificationMessage, showNotification: true },
      });
      notificationRef.current = {
        bg: 'light',
        text: 'text-black',
      };
    } else if (notification instanceof AlertNotification) {
      notificationMessage = notification.message;
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: { notificationMessage, showNotification: true },
      });
      notificationRef.current = {
        bg: 'white',
        text: 'text-danger',
      };
    } else if (notification instanceof WarningNotification) {
      notificationMessage = notification.message;
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: { notificationMessage, showNotification: true },
      });
      notificationRef.current = {
        bg: 'warning',
        text: 'text-black',
      };
    }

    return () => {
      onNotification && onNotification();
    };
  }, [notification, handleForceSignOut, onNotification]);

  const handleClose = useCallback(() => {
    dispatch({
      type: 'SHOW_NOTIFICATION',
      payload: { notificationMessage: null, showNotification: false },
    });
  }, []);

  return (
    <ToastContainer position={position} className="mb-3">
      <Toast
        show={showNotification}
        onClose={handleClose}
        delay={delay}
        bg={notificationRef.current.bg}
        autohide
      >
        <Toast.Header closeButton>
          <strong className="me-auto">{APP_NAME}</strong>
        </Toast.Header>
        <Toast.Body className={`${notificationRef.current.text}`}>
          {notificationMessage}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export function NotificationContainer({ children }) {
  const { notification, setNotification, notificationPosition } =
    useContext(NotificationContext);
  const handleNotification = useCallback(() => {
    setNotification(null);
  }, [setNotification]);
  return (
    <>
      {children}
      <Notification
        notification={notification}
        onNotification={handleNotification}
        position={notificationPosition}
      />
    </>
  );
}

Notification.propTypes = {
  notification: PropTypes.object,
  onNotification: PropTypes.func,
  delay: PropTypes.number,
  position: PropTypes.string,
};
Notification.defaultProps = {
  notification: null,
  onNotification: undefined,
  delay: 3000,
  position: 'bottom-center',
};
NotificationContainer.propTypes = {
  children: PropTypes.node,
};
NotificationContainer.defaultProps = {
  children: null,
};

export default Notification;
