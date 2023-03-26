// SyncButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaSyncAlt } from 'react-icons/fa';

function SyncButton({
  onClick,
  clicked,
  type,
  autoWidth,
  text,
  iconSize,
  textColor,
  textNormal,
  variant,
  hideLabel,
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
                textNormal ? 'fw-normal' : 'fw-bold'
              } ${textColor ? `text-${textColor}` : undefined}`}
              type={type}
              disabled={clicked}
              variant="light"
              onClick={onClick}
            >
              <div>
                <FaSyncAlt size={iconSize} />
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
        >
          <div>
            <FaSyncAlt size={iconSize} />
            {!hideLabel ? (
              <span className="px-2 control-button-label">{text}</span>
            ) : null}
          </div>
        </Button>
      )}
    </div>
  );
}

SyncButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  autoWidth: PropTypes.bool,
  text: PropTypes.string,
  iconSize: PropTypes.number,
  variant: PropTypes.string,
  textNormal: PropTypes.bool,
  textColor: PropTypes.string,
  hideLabel: PropTypes.bool,
  useTooltip: PropTypes.bool,
};
SyncButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  autoWidth: false,
  text: 'Sync',
  iconSize: 20,
  variant: 'transparent',
  textNormal: false,
  textColor: null,
  hideLabel: false,
  useTooltip: false,
};

export default SyncButton;
