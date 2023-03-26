// HelpButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';

function HelpButton({ onClick, showHelp, iconSize }) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">See help</Tooltip>}
    >
      <div className="mx-1">
        <Button onClick={onClick} variant="light" disabled={showHelp}>
          <div className={`${showHelp ? 'text-success' : 'text-dark'}`}>
            <FaQuestionCircle size={iconSize} />
          </div>
        </Button>
      </div>
    </OverlayTrigger>
  );
}

HelpButton.propTypes = {
  onClick: PropTypes.func,
  showHelp: PropTypes.bool,
  iconSize: PropTypes.number,
};
HelpButton.defaultProps = {
  onClick: undefined,
  showHelp: false,
  iconSize: 20,
};

export default HelpButton;
