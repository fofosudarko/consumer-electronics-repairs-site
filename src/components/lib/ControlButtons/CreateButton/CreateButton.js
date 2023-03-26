// CreateButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

function CreateButton({
  onClick,
  clicked,
  type,
  text,
  autoWidth,
  isDisabled,
  variant,
  hideLabel,
  textColor,
  children,
  textNormal,
  iconSize,
  useTooltip,
  Icon: _Icon,
  showIcon,
}) {
  const Icon = _Icon ?? <FaPlus size={iconSize} />;
  return (
    <div>
      {useTooltip ? (
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-bottom">{text}</Tooltip>}
        >
          <div>
            <Button
              className={`${autoWidth ? 'w-auto' : 'w-100'} ${
                textColor ? `text-${textColor}` : undefined
              }`}
              type={type}
              disabled={clicked || isDisabled}
              variant={variant}
              onClick={onClick}
            >
              <div>{Icon}</div>
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
          {children ?? (
            <div>
              {showIcon ? Icon : null}
              {!hideLabel ? (
                <span className="px-2 control-button-label">{text}</span>
              ) : null}
            </div>
          )}
        </Button>
      )}
    </div>
  );
}

CreateButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  autoWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  variant: PropTypes.string,
  hideLabel: PropTypes.bool,
  textColor: PropTypes.string,
  children: PropTypes.node,
  textNormal: PropTypes.bool,
  iconSize: PropTypes.number,
  useTooltip: PropTypes.bool,
  Icon: PropTypes.node,
  showIcon: PropTypes.bool,
};
CreateButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  text: 'Create',
  autoWidth: false,
  isDisabled: false,
  variant: 'primary',
  hideLabel: false,
  textColor: 'white',
  children: null,
  textNormal: false,
  iconSize: 20,
  useTooltip: false,
  Icon: null,
  showIcon: false,
};

export default CreateButton;
