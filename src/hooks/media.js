// media.js

import { useEffect, useRef, useCallback } from 'react';

import useNotificationHandler from './notification';

export function useMedia({ data = null, property = null }) {
  const mediaRef = useRef(null);

  useEffect(() => {
    if (data) {
      mediaRef.current = data[property];
    }
  }, [data, property]);

  const handleSubmitMedia = useCallback((media) => {
    mediaRef.current = media;
  }, []);

  const handleRemoveMedia = useCallback(() => {
    mediaRef.current = null;
  }, []);

  return { mediaRef, handleSubmitMedia, handleRemoveMedia };
}

export function useMediaType(media = null) {
  const handleNotification = useNotificationHandler();

  if (typeof media !== 'object') {
    handleNotification(new Error('media must be an object'));
    return;
  }

  const { type = '' } = media ?? {};
  const isVideo = type.startsWith('video'),
    isImage = type.startsWith('image');

  return { isVideo, isImage };
}
