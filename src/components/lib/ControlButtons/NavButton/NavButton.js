// NavButton.js

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

function NavButton({ onClick, variant, iconSize, textColor }) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      className="py-1 px-3 border border-gray rounded w-auto d-block d-lg-none"
    >
      <div className={`text-${textColor} fs-6`}>
        <FaBars size={iconSize} color={`text-${textColor}`} />
      </div>
    </Button>
  );
}

NavButton.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.string,
  iconSize: PropTypes.number,
  textColor: PropTypes.string,
};
NavButton.defaultProps = {
  onClick: undefined,
  variant: 'transparent',
  iconSize: 20,
  textColor: 'black',
};

export default NavButton;
