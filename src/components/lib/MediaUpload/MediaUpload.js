// MediaUpload.js

import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MediaUploadCreate from './MediaUploadCreate';
import MediaUploadEdit from './MediaUploadEdit';
import MediaUploadShow from './MediaUploadShow';
import MediaUploadRemove from './MediaUploadRemove';

function MediaUpload({
  media: _media,
  onSubmit,
  onRemove,
  createText,
  mediaHeight,
  mediaWidth,
  notCentered,
  fullWidth,
}) {
  const [media, setMedia] = useState(null);

  useEffect(() => {
    if (_media) {
      setMedia(_media);
    }

    return () => {
      setMedia(null);
    };
  }, [_media]);

  useEffect(() => {
    if (media) {
      onSubmit && onSubmit(media);
    }
  }, [media, onSubmit]);

  const handleReceiveMedia = useCallback((media) => {
    setMedia(media);
  }, []);

  const handleRemoveMedia = useCallback(() => {
    onRemove && onRemove();
    setMedia(null);
  }, [onRemove]);

  return (
    <div className="my-3">
      {media ? (
        <>
          <MediaUploadShow
            media={media}
            mediaHeight={mediaHeight}
            mediaWidth={mediaWidth}
          />
          <MediaUploadEdit media={media} onReceiveMedia={handleReceiveMedia} />
          <MediaUploadRemove media={media} onRemoveMedia={handleRemoveMedia} />
        </>
      ) : (
        <MediaUploadCreate
          onReceiveMedia={handleReceiveMedia}
          text={createText}
          notCentered={notCentered}
          fullWidth={fullWidth}
        />
      )}
    </div>
  );
}

MediaUpload.propTypes = {
  media: PropTypes.object,
  onSubmit: PropTypes.func,
  onRemove: PropTypes.func,
  createText: PropTypes.string,
  mediaHeight: PropTypes.number,
  mediaWidth: PropTypes.number,
  notCentered: PropTypes.bool,
  fullWidth: PropTypes.bool,
};
MediaUpload.defaultProps = {
  media: null,
  onSubmit: undefined,
  onRemove: undefined,
  createText: 'Upload new media',
  mediaHeight: 400,
  mediaWidth: 400,
  notCentered: false,
  fullWidth: false,
};

export default MediaUpload;
