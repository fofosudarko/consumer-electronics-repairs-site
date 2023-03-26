import { Badge, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function BadgesList({ items, variant, textColor, pill, badgeClass, ...props }) {
  return (
    <Row as="div" xs={{ cols: 2 }} lg={{ cols: 3 }} className="gx-2">
      {items.map((item, index) => (
        <Col key={index}>
          <Badge
            {...props}
            bg={variant}
            text={textColor}
            pill={pill}
            className={badgeClass}
          >
            {item}
          </Badge>
        </Col>
      ))}
    </Row>
  );
}

BadgesList.propTypes = {
  items: PropTypes.array,
  variant: PropTypes.string,
  textColor: PropTypes.string,
  pill: PropTypes.bool,
  badgeClass: PropTypes.string,
};

BadgesList.defaultProps = {
  items: [],
  variant: 'light',
  textColor: 'dark',
  pill: false,
  badgeClass: undefined,
};

export default BadgesList;
