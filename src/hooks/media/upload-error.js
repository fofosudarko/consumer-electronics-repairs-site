// upload-error

import { useEffect } from 'react';

import { useSignOut, useNotificationHandler } from 'src/hooks';

export default function useUploadError({ uploadError = null, reset = null }) {
  const handleSignOut = useSignOut();
  const handleNotification = useNotificationHandler();

  useEffect(() => {
    if (uploadError) {
      handleNotification(uploadError);
      reset && reset(null);
    }
  }, [handleNotification, handleSignOut, reset, uploadError]);
}
