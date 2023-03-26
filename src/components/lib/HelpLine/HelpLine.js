import PropTypes from 'prop-types';
import { FaQuestionCircle } from 'react-icons/fa';

function HelpLine({ Icon, text }) {
  return (
    <div className="d-block my-2">
      <div className="d-inline">{Icon ?? <FaQuestionCircle size={20} />}</div>
      <div className="d-inline ms-3 fw-light">{text}</div>
    </div>
  );
}

HelpLine.propTypes = {
  Icon: PropTypes.node,
  text: PropTypes.string,
};
HelpLine.defaultProps = {
  Icon: null,
  text: null,
};

export default HelpLine;
