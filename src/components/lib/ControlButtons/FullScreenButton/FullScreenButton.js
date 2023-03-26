// FullScreenButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaCompress, FaExpand } from 'react-icons/fa';

function FullScreenButton({ onClick, fullScreen, iconSize }) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Full screen</Tooltip>}
    >
      <div className="mx-1">
        <Button onClick={onClick} variant="light">
          {fullScreen ? (
            <FaCompress size={iconSize} />
          ) : (
            <FaExpand size={iconSize} />
          )}
        </Button>
      </div>
    </OverlayTrigger>
  );
}

FullScreenButton.propTypes = {
  onClick: PropTypes.func,
  fullScreen: PropTypes.bool,
  text: PropTypes.string,
  iconSize: PropTypes.number,
};
FullScreenButton.defaultProps = {
  onClick: undefined,
  fullScreen: false,
  text: 'video',
  iconSize: 20,
};

export default FullScreenButton;
