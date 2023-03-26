// InfoButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

function InfoButton({
  onClick,
  clicked,
  type,
  text,
  autoWidth,
  iconSize,
  isDisabled,
  variant,
  textColor,
  textNormal,
  useTooltip,
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
              className={`${autoWidth ? 'w-auto' : 'w-100'} ${
                textColor ? `text-${textColor}` : undefined
              }`}
              type={type}
              disabled={clicked || isDisabled}
              variant="light"
              onClick={onClick}
            >
              <div>
                <FaInfoCircle size={iconSize} />
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
          disabled={clicked || isDisabled}
          variant={variant}
          onClick={onClick}
        >
          <div>
            <FaInfoCircle size={iconSize} />
            <span className="px-2 control-button-label">{text}</span>
          </div>
        </Button>
      )}
    </div>
  );
}

InfoButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  autoWidth: PropTypes.bool,
  processing: PropTypes.bool,
  iconSize: PropTypes.number,
  isDisabled: PropTypes.bool,
  variant: PropTypes.string,
  textColor: PropTypes.string,
  textNormal: PropTypes.bool,
  useTooltip: PropTypes.bool,
};
InfoButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  text: 'Edit',
  autoWidth: false,
  processing: false,
  iconSize: 20,
  isDisabled: false,
  variant: 'dark',
  textColor: null,
  textNormal: false,
  useTooltip: false,
};

export default InfoButton;
