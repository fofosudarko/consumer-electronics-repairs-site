import PropTypes from 'prop-types';

function WelcomeText({ text }) {
  return (
    <div className="text-center fs-4 fw-light mt-0 mb-5">
      <div>{text}</div>
    </div>
  );
}

WelcomeText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
WelcomeText.defaultProps = {
  text: null,
};

export default WelcomeText;
