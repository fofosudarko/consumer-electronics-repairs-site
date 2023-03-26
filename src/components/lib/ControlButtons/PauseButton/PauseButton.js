// PauseButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaPause } from 'react-icons/fa';

function PauseButton({ onClick, pauseMedia, text, iconSize }) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Pause {text}</Tooltip>}
    >
      <div className="mx-1">
        <Button onClick={onClick} variant="light" disabled={pauseMedia}>
          <div className={`${pauseMedia ? 'text-info' : 'text-dark'}`}>
            <FaPause size={iconSize} />
          </div>
        </Button>
      </div>
    </OverlayTrigger>
  );
}

PauseButton.propTypes = {
  onClick: PropTypes.func,
  pauseMedia: PropTypes.bool,
  text: PropTypes.string,
  iconSize: PropTypes.number,
};
PauseButton.defaultProps = {
  onClick: undefined,
  pauseMedia: false,
  text: 'video',
  iconSize: 20,
};

export default PauseButton;
