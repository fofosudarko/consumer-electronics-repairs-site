import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function ItemCard({
  onClick,
  label,
  Icon,
  value,
  borderless,
  hasShadow,
  valueFullWidth,
  valueTextBold,
}) {
  return (
    <Card
      onClick={onClick}
      className={`w-100 ${hasShadow ? 'shadow-sm' : undefined} ${
        !borderless ? 'border border-light' : undefined
      }`}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <Card.Body>
        <div>
          <div className="text-secondary fs-6 fw-normal pb-2">
            <div className="d-inline-block">{Icon}</div>
            <div className="d-inline-block ms-2">{label}</div>
          </div>
          <div
            className={`fs-4 text-black ${
              valueTextBold ? 'fw-bold' : 'fw-light'
            } ${valueFullWidth ? 'w-100' : 'justify-end'}`}
          >
            {value}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  Icon: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  borderless: PropTypes.bool,
  valueFullWidth: PropTypes.bool,
  hasShadow: PropTypes.bool,
  valueTextBold: PropTypes.bool,
};
ItemCard.defaultProps = {
  onClick: undefined,
  label: 'Exercise',
  Icon: null,
  value: null,
  borderless: false,
  valueFullWidth: false,
  hasShadow: false,
  valueTextBold: false,
};

export default ItemCard;
