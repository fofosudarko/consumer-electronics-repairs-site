// ListButton.js

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaListUl } from 'react-icons/fa';

function ListButton({ onClick, clicked, type, text, variant, iconSize }) {
  return (
    <div>
      <Button
        className="w-100 fw-bold text-white"
        type={type}
        disabled={clicked}
        variant={variant}
        onClick={onClick}
      >
        <div>
          <FaListUl size={iconSize} />
          <span className="px-2 control-button-label">{text}</span>
        </div>
      </Button>
    </div>
  );
}

ListButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
  iconSize: PropTypes.number,
};
ListButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  text: 'List',
  variant: 'dark',
  iconSize: 20,
};

export default ListButton;
