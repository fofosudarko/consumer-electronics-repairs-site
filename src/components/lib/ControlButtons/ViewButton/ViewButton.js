// ViewButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';

function ViewButton({ onClick, viewMedia, text, iconSize }) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">View {text}</Tooltip>}
    >
      <div className="mx-1">
        <Button onClick={onClick} variant="light" disabled={viewMedia}>
          <div className={`${viewMedia ? 'text-info' : 'text-dark'}`}>
            <FaEye size={iconSize} />
          </div>
        </Button>
      </div>
    </OverlayTrigger>
  );
}

ViewButton.propTypes = {
  onClick: PropTypes.func,
  viewMedia: PropTypes.bool,
  text: PropTypes.string,
  iconSize: PropTypes.number,
};
ViewButton.defaultProps = {
  onClick: undefined,
  viewMedia: false,
  text: 'video',
  iconSize: 20,
};

export default ViewButton;
