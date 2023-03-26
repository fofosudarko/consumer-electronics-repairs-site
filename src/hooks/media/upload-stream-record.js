// upload-stream-record.js

import { useEffect, useState } from 'react';

import { getFolders, alertWebError } from 'src/utils';
import { useSignOut, useNotificationHandler } from 'src/hooks';

export default function useUploadStreamRecord({ filesRecorded = null }) {
  const [uploadResponse, setUploadResponse] = useState(null);
  const [error, setError] = useState(null);
  const handleSignOut = useSignOut();
  const handleNotification = useNotificationHandler();

  useEffect(() => {}, []);

  return { uploadResponse, error, setError, setUploadResponse };
}
