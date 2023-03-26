// RemoveButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

function RemoveButton({
  onClick,
  clicked,
  type,
  autoWidth,
  text,
  hideLabel,
  small,
  large,
  iconSize,
  variant,
  textColor,
  textNormal,
  useTooltip,
  showIcon,
}) {
  return (
    <div>
      {useTooltip ? (
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-bottom">{text}</Tooltip>}
        >
          <div className="mx-1">
            <Button
              className={`${autoWidth ? 'w-auto' : 'w-100'}  ${
                textColor ? `text-${textColor}` : undefined
              }`}
              type={type}
              disabled={clicked}
              variant="light"
              onClick={onClick}
              size={small ? 'sm' : large ? 'lg' : undefined}
            >
              <div>
                <FaTrash size={iconSize} />
              </div>
            </Button>
          </div>
        </OverlayTrigger>
      ) : (
        <Button
          className={`${autoWidth ? 'w-auto' : 'w-100'} ${
            textNormal ? 'fw-normal' : 'fw-bold'
          } ${textColor ? `text-${textColor}` : undefined}`}
          type={type}
          disabled={clicked}
          variant={variant}
          onClick={onClick}
          size={small ? 'sm' : large ? 'lg' : undefined}
        >
          <div>
            {showIcon ? <FaTrash size={iconSize} /> : null}
            {!hideLabel ? (
              <span className="px-2 control-button-label">{text}</span>
            ) : null}
          </div>
        </Button>
      )}
    </div>
  );
}

RemoveButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  autoWidth: PropTypes.bool,
  text: PropTypes.string,
  hideLabel: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  iconSize: PropTypes.number,
  variant: PropTypes.string,
  textColor: PropTypes.string,
  textNormal: PropTypes.bool,
  useTooltip: PropTypes.bool,
  showIcon: PropTypes.bool,
};
RemoveButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  autoWidth: false,
  text: 'Remove',
  hideLabel: false,
  small: false,
  large: false,
  iconSize: 20,
  variant: 'outline-danger',
  textColor: null,
  textNormal: false,
  useTooltip: false,
  showIcon: false,
};

export default RemoveButton;
