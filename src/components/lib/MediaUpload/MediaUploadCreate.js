// MediaUploadCreate.js

import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useCreateMedia, useNotificationHandler } from 'src/hooks';

import { CreateButton } from 'src/components/lib';
import MediaUploadInput from './MediaUploadInput';

function MediaUploadCreate({ text, onReceiveMedia, notCentered, fullWidth }) {
  const {
    handleCreateMedia,
    processing,
    error,
    setError,
    media,
    setMedia,
    mediaCreated,
    setMediaCreated,
  } = useCreateMedia();
  const handleNotification = useNotificationHandler();

  const [showMediaUploadCreate, setShowMediaUploadCreate] = useState(false);

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
    if (media && mediaCreated) {
      handleHide();
    }
  }, [mediaCreated, handleHide, media]);

  const handleShowMediaUploadCreate = useCallback(() => {
    setShowMediaUploadCreate((state) => !state);
  }, []);

  const handleHide = useCallback(() => {
    onReceiveMedia && onReceiveMedia(media);
    setShowMediaUploadCreate(false);
    setMediaCreated(false);
    setMedia(null);
  }, [media, onReceiveMedia, setMedia, setMediaCreated]);

  const handleMediaUploadCreate = useCallback(
    async (files) => {
      const formData = new FormData();
      formData.append('media', files[0]);
      await handleCreateMedia({
        body: formData,
      });
    },
    [handleCreateMedia]
  );

  return (
    <div>
      {showMediaUploadCreate ? (
        <MediaUploadInput
          onSubmit={handleMediaUploadCreate}
          processing={processing}
        />
      ) : (
        <div
          className={`${
            !fullWidth
              ? !notCentered
                ? 'justify-center'
                : 'justify-start'
              : null
          }`}
        >
          <CreateButton
            variant="light"
            onClick={handleShowMediaUploadCreate}
            textColor="dark"
            text={text}
          />
        </div>
      )}
    </div>
  );
}

MediaUploadCreate.propTypes = {
  text: PropTypes.string,
  onReceiveMedia: PropTypes.func,
  notCentered: PropTypes.bool,
  fullWidth: PropTypes.bool,
};
MediaUploadCreate.defaultProps = {
  text: 'Upload new media',
  onReceiveMedia: undefined,
  notCentered: false,
  fullWidth: false,
};

export default MediaUploadCreate;
