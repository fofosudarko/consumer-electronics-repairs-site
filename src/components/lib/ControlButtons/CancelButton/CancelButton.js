// CancelButton.js

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

function CancelButton({
  onClick,
  clicked,
  type,
  autoWidth,
  text,
  iconSize,
  textColor,
  textNormal,
  variant,
  showIcon,
}) {
  return (
    <div>
      <Button
        className={`${autoWidth ? 'w-auto' : 'w-100'} ${
          textNormal ? 'fw-normal' : 'fw-bold'
        } ${textColor ? `text-${textColor}` : undefined}`}
        type={type}
        disabled={clicked}
        variant={variant}
        onClick={onClick}
      >
        <div>
          {showIcon ? <FaTimes size={iconSize} /> : null}
          <span className="px-2 control-button-label">{text}</span>
        </div>
      </Button>
    </div>
  );
}

CancelButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  autoWidth: PropTypes.bool,
  text: PropTypes.string,
  iconSize: PropTypes.number,
  variant: PropTypes.string,
  textNormal: PropTypes.bool,
  textColor: PropTypes.string,
  showIcon: PropTypes.bool,
};
CancelButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  autoWidth: false,
  text: 'Cancel',
  iconSize: 20,
  variant: 'outline-danger',
  textNormal: false,
  textColor: null,
  showIcon: false,
};

export default CancelButton;
