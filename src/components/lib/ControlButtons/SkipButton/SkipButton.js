// SkipButton.js

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { BsFillSkipEndCircleFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';

function SkipButton({
  onClick,
  clicked,
  type,
  autoWidth,
  text,
  back,
  iconSize,
  ...props
}) {
  return (
    <div>
      <Button
        className={`${autoWidth ? 'w-auto' : 'w-100'} fw-bold`}
        type={type}
        disabled={clicked}
        variant="light"
        onClick={onClick}
        {...props}
      >
        <div>
          {back ? (
            <BiArrowBack size={iconSize} />
          ) : (
            <BsFillSkipEndCircleFill size={iconSize} />
          )}
          <span className="px-2 control-button-label">{text}</span>
        </div>
      </Button>
    </div>
  );
}

SkipButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  autoWidth: PropTypes.bool,
  text: PropTypes.string,
  back: PropTypes.bool,
  iconSize: PropTypes.number,
};
SkipButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  autoWidth: false,
  text: 'Cancel',
  back: false,
  iconSize: 20,
};

export default SkipButton;
