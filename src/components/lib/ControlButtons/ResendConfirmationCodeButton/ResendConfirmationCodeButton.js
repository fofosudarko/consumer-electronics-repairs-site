// ResendConfirmationCodeButton.js

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';

function ResendConfirmationCodeButton({ onClick, clicked, type, iconSize }) {
  return (
    <div>
      <Button
        className="w-100 fw-bold"
        type={type}
        disabled={clicked}
        variant="light"
        onClick={onClick}
      >
        <div>
          <FaEnvelope size={iconSize} />
          <span className="px-2 control-button-label">
            {clicked
              ? 'Sending confirmation code...'
              : 'Get new confirmation code'}
          </span>
        </div>
      </Button>
    </div>
  );
}

ResendConfirmationCodeButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  iconSize: PropTypes.number,
};
ResendConfirmationCodeButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  iconSize: 20,
};

export default ResendConfirmationCodeButton;
