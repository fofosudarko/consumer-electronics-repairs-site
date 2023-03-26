import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function MenuCard({ onClick, label, Icon, height, shadowless }) {
  return (
    <Card
      onClick={onClick}
      className={`w-100 border border-light ${
        !shadowless ? 'shadow-sm' : undefined
      }`}
      style={{ height: height ? `${height}px` : undefined }}
    >
      <Card.Body>
        <div
          className={`d-flex flex-column justify-content-center align-items-center text-dark`}
        >
          {Icon}
          <Card.Title className="mt-4 fw-bold text-secondary ">
            {label}
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
}

MenuCard.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  Icon: PropTypes.node,
  height: PropTypes.number,
  shadowless: PropTypes.bool,
};
MenuCard.defaultProps = {
  onClick: undefined,
  label: 'Exercise',
  Icon: null,
  height: undefined,
  shadowless: false,
};

export default MenuCard;
