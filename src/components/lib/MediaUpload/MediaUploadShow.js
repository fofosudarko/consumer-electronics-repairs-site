// MediaUploadShow.js

import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import { MediaDisplay } from 'src/components/lib';

function MediaUploadShow({ media, mediaHeight, mediaWidth }) {
  const { name } = media ?? {};

  return (
    <div className="my-1">
      <Card>
        <MediaDisplay
          media={media}
          mediaHeight={mediaHeight}
          mediaWidth={mediaWidth}
          isCardImage
        />
        <Card.Body>
          <Card.Text>{name ? name : 'No media name yet'}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

MediaUploadShow.propTypes = {
  media: PropTypes.object,
  mediaHeight: PropTypes.number,
  mediaWidth: PropTypes.number,
};
MediaUploadShow.defaultProps = {
  media: null,
  mediaHeight: 400,
  mediaWidth: 400,
};

export default MediaUploadShow;
