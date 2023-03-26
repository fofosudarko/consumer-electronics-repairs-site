// SearchButton.js

import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MdOutlineSearch } from 'react-icons/md';

function SearchButton({
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
  const Icon = _Icon ?? <MdOutlineSearch size={iconSize} />;
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

SearchButton.propTypes = {
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
SearchButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  text: 'Find',
  autoWidth: false,
  isDisabled: false,
  variant: 'light',
  hideLabel: false,
  textColor: null,
  children: null,
  textNormal: false,
  iconSize: 20,
  useTooltip: false,
  Icon: null,
  showIcon: false,
};

export default SearchButton;
