// notification.js
import { useContext } from 'react';

import { NotificationContext } from 'src/context';

export default function useNotificationHandler() {
  const { setNotification } = useContext(NotificationContext) ?? {};
  return setNotification;
}
