// SaveButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaSave } from 'react-icons/fa';

function SaveButton({ onClick, saveMedia, text, iconSize }) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Save {text}</Tooltip>}
    >
      <div className="mx-1">
        <Button onClick={onClick} variant="light" disabled={saveMedia}>
          <div className={`${saveMedia ? 'text-info' : 'text-dark'}`}>
            <FaSave size={iconSize} />
          </div>
        </Button>
      </div>
    </OverlayTrigger>
  );
}

SaveButton.propTypes = {
  onClick: PropTypes.func,
  saveMedia: PropTypes.bool,
  text: PropTypes.string,
  iconSize: PropTypes.number,
};
SaveButton.defaultProps = {
  onClick: undefined,
  saveMedia: false,
  text: 'video',
  iconSize: 20,
};

export default SaveButton;
