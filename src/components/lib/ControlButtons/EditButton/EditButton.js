// EditButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaPen } from 'react-icons/fa';

function EditButton({
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
  Icon,
  showIcon,
}) {
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
              <div>{Icon ?? <FaPen size={iconSize} />}</div>
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
            {showIcon ? Icon ?? <FaPen size={iconSize} /> : null}
            <span className="px-2 control-button-label">{text}</span>
          </div>
        </Button>
      )}
    </div>
  );
}

EditButton.propTypes = {
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
  Icon: PropTypes.object,
  showIcon: PropTypes.bool,
};
EditButton.defaultProps = {
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
  Icon: undefined,
  showIcon: false,
};

export default EditButton;
