import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useUpdateMedia, useNotificationHandler } from 'src/hooks';

import { EditButton } from 'src/components/lib';
import MediaUploadInput from './MediaUploadInput';

function MediaUploadEdit({ appUser, media, onReceiveMedia }) {
  const {
    handleUpdateMedia,
    processing,
    error,
    setError,
    media: newMedia,
    setMedia,
    mediaUpdated,
    setMediaUpdated,
  } = useUpdateMedia();
  const handleNotification = useNotificationHandler();

  const [showMediaUploadEdit, setShowMediaUploadEdit] = useState(false);

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
    if (mediaUpdated) {
      handleHide();
    }
  }, [mediaUpdated, handleHide]);

  const handleShowMediaUploadEdit = useCallback(() => {
    setShowMediaUploadEdit((state) => !state);
  }, []);

  const handleHide = useCallback(() => {
    onReceiveMedia && onReceiveMedia(newMedia);
    setShowMediaUploadEdit(false);
    setMediaUpdated(false);
    setMedia(null);
  }, [newMedia, onReceiveMedia, setMedia, setMediaUpdated]);

  const handleMediaUploadEdit = useCallback(
    async (updatedFiles) => {
      const formData = new FormData();
      formData.append('media', updatedFiles[0]);
      await handleUpdateMedia({
        media,
        body: formData,
      });
    },
    [handleUpdateMedia, media]
  );

  return (
    <div>
      {showMediaUploadEdit ? (
        <MediaUploadInput
          media={media}
          appUser={appUser}
          onSubmit={handleMediaUploadEdit}
          isEditing
          processing={processing}
        />
      ) : (
        <EditButton
          variant="transparent"
          onClick={handleShowMediaUploadEdit}
          textColor="black"
          text="Edit media"
          textNormal
          autoWidth
        />
      )}
    </div>
  );
}

MediaUploadEdit.propTypes = {
  appUser: PropTypes.object,
  media: PropTypes.object,
  onReceiveMedia: PropTypes.func,
};
MediaUploadEdit.defaultProps = {
  appUser: null,
  media: null,
  onReceiveMedia: undefined,
};

export default MediaUploadEdit;
