// MediaUploadRemove.js

import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useRemoveMedia, useNotificationHandler } from 'src/hooks';

import { UserPrompt, RemoveButton } from 'src/components/lib';

function MediaUploadRemove({ media, onRemoveMedia }) {
  const [showMediaUploadRemove, setShowMediaUploadRemove] = useState(false);

  const {
    handleRemoveMedia: _handleRemoveMedia,
    processing,
    error,
    setError,
    mediaRemoved,
    setMediaRemoved,
  } = useRemoveMedia();
  const handleNotification = useNotificationHandler();

  useEffect(() => {
    if (error) {
      handleNotification(error);
      handleHide();
    }

    return () => {
      setError(null);
    };
  }, [error, handleNotification, handleHide, setError]);

  useEffect(() => {
    if (mediaRemoved) {
      handleHide();
    }
  }, [mediaRemoved, handleHide]);

  const handleShowMediaUploadRemove = useCallback(() => {
    setShowMediaUploadRemove((state) => !state);
  }, []);

  const handleHide = useCallback(() => {
    onRemoveMedia && onRemoveMedia();
    setShowMediaUploadRemove(false);
    setMediaRemoved(false);
  }, [onRemoveMedia, setMediaRemoved]);

  const handleRemoveMedia = useCallback(async () => {
    await _handleRemoveMedia({ media });
  }, [_handleRemoveMedia, media]);

  return (
    <div>
      <RemoveButton
        variant="white"
        onClick={handleShowMediaUploadRemove}
        text="Remove media"
        textColor="danger"
        autoWidth
        textNormal
      />
      <UserPrompt
        show={showMediaUploadRemove}
        onHide={handleShowMediaUploadRemove}
        title="Remove media"
        processing={processing}
        callToAction={handleRemoveMedia}
        ctaText={processing ? 'Removing...' : 'Remove'}
      >
        Do you really want to remove this media?
      </UserPrompt>
    </div>
  );
}

MediaUploadRemove.propTypes = {
  media: PropTypes.object,
  onRemoveMedia: PropTypes.func,
};
MediaUploadRemove.defaultProps = {
  media: null,
  onRemoveMedia: undefined,
};

export default MediaUploadRemove;
