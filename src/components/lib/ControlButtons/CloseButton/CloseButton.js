// CloseButton.js

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

function CloseButton({ onClick, clicked, type, dark, iconSize, variant }) {
  return (
    <div>
      <Button
        className={`w-100 fw-bold ${dark ? 'text-dark' : 'text-light'}`}
        type={type}
        disabled={clicked}
        variant={variant}
        onClick={onClick}
      >
        <div>
          <FaTimes size={iconSize} />
        </div>
      </Button>
    </div>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  dark: PropTypes.bool,
  iconSize: PropTypes.number,
  variant: PropTypes.string,
};
CloseButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  dark: false,
  iconSize: 20,
  variant: 'transparent',
};

export default CloseButton;
