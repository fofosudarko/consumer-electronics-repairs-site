// RefreshButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaRedoAlt } from 'react-icons/fa';

function RefreshButton({
  onClick,
  clicked,
  type,
  autoWidth,
  text,
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
          <div>
            <Button
              className={`${autoWidth ? 'w-auto' : 'w-100'} ${
                textColor ? `text-${textColor}` : undefined
              }`}
              variant={variant}
              onClick={onClick}
              disabled={clicked}
              type={type}
            >
              <div className="">
                <FaRedoAlt size={iconSize} />
              </div>
            </Button>
          </div>
        </OverlayTrigger>
      ) : (
        <Button
          className={`${autoWidth ? 'w-auto' : 'w-100'} ${
            textNormal ? 'fw-normal' : 'fw-bold'
          } text-${textColor}`}
          variant={variant}
          onClick={onClick}
          disabled={clicked}
          type={type}
        >
          <div className="">
            {showIcon ? <FaRedoAlt size={iconSize} /> : null}
            <span className="px-2 control-button-label">{text}</span>
          </div>
        </Button>
      )}
    </div>
  );
}

RefreshButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  autoWidth: PropTypes.bool,
  text: PropTypes.string,
  iconSize: PropTypes.number,
  variant: PropTypes.string,
  textColor: PropTypes.string,
  textNormal: PropTypes.bool,
  useTooltip: PropTypes.bool,
  showIcon: PropTypes.bool,
};
RefreshButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  autoWidth: false,
  text: 'Refresh',
  iconSize: 20,
  variant: 'transparent',
  textColor: undefined,
  textNormal: false,
  useTooltip: false,
  showIcon: false,
};

export default RefreshButton;
