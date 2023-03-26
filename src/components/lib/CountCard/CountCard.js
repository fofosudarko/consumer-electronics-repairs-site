import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function CountCard({
  onClick,
  label,
  value,
  valueSize,
  valueColor,
  labelColor,
  textNormal,
  shadowless,
}) {
  return (
    <Card
      onClick={onClick}
      className={`w-100 ${
        !shadowless ? 'shadow-sm' : undefined
      } border border-light bg-count-card`}
      style={{ cursor: onClick ? 'pointer' : 'not-allowed' }}
    >
      <Card.Body
        className={`d-flex flex-column justify-content-center align-items-center`}
      >
        <div
          className={`text-${valueColor} ${
            textNormal ? 'fw-normal' : 'fw-bold'
          }`}
          style={{ fontSize: `${valueSize}px` }}
        >
          {value}
        </div>
        <div className={'mt-2'}>
          <Card.Title
            className={`text-${labelColor} ${
              textNormal ? 'fw-normal' : 'fw-bold'
            }`}
          >
            {label}
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
}

CountCard.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.number,
  valueSize: PropTypes.number,
  valueColor: PropTypes.string,
  labelColor: PropTypes.string,
  textNormal: PropTypes.bool,
  shadowless: PropTypes.bool,
};
CountCard.defaultProps = {
  onClick: undefined,
  label: 'Count',
  valueSize: 100,
  value: 30,
  valueColor: 'secondary',
  labelColor: 'secondary',
  textNormal: false,
  shadowless: false,
};

export default CountCard;
