import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function CashCard({
  onClick,
  label,
  value,
  valueSize,
  valueColor,
  labelColor,
  textNormal,
  currency,
  bgColor,
}) {
  return (
    <Card onClick={onClick} className={`w-100 shadow-sm bg-${bgColor}`}>
      <Card.Body
        className={`d-flex flex-column justify-content-center align-items-center `}
      >
        <div className={`mt-b text-${labelColor} fs-3`}>{currency}</div>
        <div
          className={`text-${valueColor} ${
            textNormal ? 'fw-normal' : 'fw-bold'
          }`}
          style={{ fontSize: `${valueSize}px` }}
        >
          {value}
        </div>
        <div
          className={`mt-2 text-${labelColor} ${
            textNormal ? 'fw-normal' : 'fw-bold'
          }`}
        >
          {label}
        </div>
      </Card.Body>
    </Card>
  );
}

CashCard.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.number,
  valueSize: PropTypes.number,
  valueColor: PropTypes.string,
  labelColor: PropTypes.string,
  textNormal: PropTypes.bool,
  currency: PropTypes.string,
  bgColor: PropTypes.string,
};
CashCard.defaultProps = {
  onClick: undefined,
  label: 'Count',
  valueSize: 100,
  value: 30,
  valueColor: 'primary',
  labelColor: 'primary',
  textNormal: false,
  currency: 'GHS',
  bgColor: 'white',
};

export default CashCard;
