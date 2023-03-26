// ShowButton.js

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';

function ShowButton({
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
  Icon,
  toggleTextDisplay,
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
          {showIcon ? Icon ?? <FaEye size={iconSize} /> : null}
          <span
            className={`${!toggleTextDisplay ? 'px-2' : undefined} ${
              toggleTextDisplay ? 'd-none d-md-inline px-2' : undefined
            } control-button-label`}
          >
            {text}
          </span>
        </div>
      </Button>
    </div>
  );
}

ShowButton.propTypes = {
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
  Icon: PropTypes.object,
  toggleTextDisplay: PropTypes.bool,
};
ShowButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  autoWidth: false,
  text: 'Show',
  iconSize: 20,
  variant: 'transparent',
  textNormal: false,
  textColor: null,
  showIcon: false,
  Icon: null,
  toggleTextDisplay: false,
};

export default ShowButton;
