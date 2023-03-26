// PlayButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';

function PlayButton({ onClick, playMedia, text, iconSize }) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Play {text}</Tooltip>}
    >
      <div className="mx-1">
        <Button onClick={onClick} variant="light" disabled={playMedia}>
          <div className={`${playMedia ? 'text-info' : 'text-dark'}`}>
            <FaPlay size={iconSize} />
          </div>
        </Button>
      </div>
    </OverlayTrigger>
  );
}

PlayButton.propTypes = {
  onClick: PropTypes.func,
  playMedia: PropTypes.bool,
  text: PropTypes.string,
  iconSize: PropTypes.number,
};
PlayButton.defaultProps = {
  onClick: undefined,
  playMedia: false,
  text: 'video',
  iconSize: 20,
};

export default PlayButton;
