// WidgetButton.js

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaVideo } from 'react-icons/fa';

function WidgetButton({ onClick, showWidget, iconSize }) {
  return (
    <div>
      <Button
        onClick={onClick}
        variant="light"
        className={`w-100 ${showWidget ? 'text-success' : 'text-dark'}`}
      >
        <div className="d-flex justify-content-between gx-2">
          <FaVideo size={iconSize} />
          <div className="align-self-center">Record live video</div>
        </div>
      </Button>
    </div>
  );
}

WidgetButton.propTypes = {
  onClick: PropTypes.func,
  showWidget: PropTypes.bool,
  iconSize: PropTypes.number,
};
WidgetButton.defaultProps = {
  onClick: undefined,
  showWidget: false,
  iconSize: 20,
};

export default WidgetButton;
