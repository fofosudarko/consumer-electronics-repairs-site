// StopButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaStop } from 'react-icons/fa';

function StopButton({ onClick, stopMedia, text, iconSize }) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Stop {text}</Tooltip>}
    >
      <div className="mx-1">
        <Button onClick={onClick} variant="light" disabled={stopMedia}>
          <div className={`${stopMedia ? 'text-danger' : 'text-dark'}`}>
            <FaStop size={iconSize} />
          </div>
        </Button>
      </div>
    </OverlayTrigger>
  );
}

StopButton.propTypes = {
  onClick: PropTypes.func,
  stopMedia: PropTypes.bool,
  text: PropTypes.string,
  iconSize: PropTypes.number,
};
StopButton.defaultProps = {
  onClick: undefined,
  stopMedia: false,
  text: 'video',
  iconSize: 20,
};

export default StopButton;
