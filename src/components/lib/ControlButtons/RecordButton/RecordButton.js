// RecordButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaCircle } from 'react-icons/fa';

function RecordButton({ onClick, recordMedia, text, iconSize }) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Record {text}</Tooltip>}
    >
      <div className="mx-1">
        <Button onClick={onClick} variant="light" disabled={recordMedia}>
          <div className={`${recordMedia ? 'text-danger' : 'text-dark'}`}>
            <FaCircle size={iconSize} />
          </div>
        </Button>
      </div>
    </OverlayTrigger>
  );
}

RecordButton.propTypes = {
  onClick: PropTypes.func,
  recordMedia: PropTypes.bool,
  text: PropTypes.string,
  iconSize: PropTypes.number,
};
RecordButton.defaultProps = {
  onClick: undefined,
  recordMedia: false,
  text: 'video',
  iconSize: 20,
};

export default RecordButton;
