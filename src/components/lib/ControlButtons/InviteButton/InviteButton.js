// InviteButton.js

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';

function InviteButton({ onClick, clicked, type, text, iconSize }) {
  return (
    <div>
      <Button
        className="w-100 fw-bold"
        type={type}
        disabled={clicked}
        variant="primary"
        onClick={onClick}
      >
        <div className="text-white">
          <FaEnvelope size={iconSize} />
          <span className="px-2 control-button-label">{text}</span>
        </div>
      </Button>
    </div>
  );
}

InviteButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  iconSize: PropTypes.number,
};
InviteButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  text: 'Invite',
  iconSize: 20,
};

export default InviteButton;
