// SendButton.js

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';

function SendButton({ onClick, clicked, type, variant, iconSize }) {
  return (
    <div>
      <Button
        className="w-100 fw-bold text-white"
        type={type}
        disabled={clicked}
        variant={variant}
        onClick={onClick}
      >
        <div>
          <FaPaperPlane size={iconSize} />
          <span className="px-2 control-button-label">
            {clicked ? 'Sending...' : 'Send'}
          </span>
        </div>
      </Button>
    </div>
  );
}

SendButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.string,
  iconSize: PropTypes.number,
};
SendButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  variant: 'primary',
  iconSize: 20,
};

export default SendButton;
