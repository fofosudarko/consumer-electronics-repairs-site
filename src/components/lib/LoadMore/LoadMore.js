// LoadMore.js

import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaAngleDoubleRight } from 'react-icons/fa';

function LoadMore({ onLoadMore, text, isDisabled }) {
  return (
    <div className="my-2 d-flex justify-content-center">
      <Button
        className="w-100 rounded shadow-none"
        variant="light"
        size="lg"
        onClick={onLoadMore}
        disabled={isDisabled}
      >
        <b>{text}</b>
      </Button>
    </div>
  );
}

export function LoadMoreNav({ onLoadMore, isDisabled, iconSize }) {
  return (
    <div className="my-2 d-flex justify-content-center">
      <Button
        className="w-100"
        variant="light"
        size="lg"
        onClick={onLoadMore}
        disabled={isDisabled}
      >
        <FaAngleDoubleRight size={iconSize} />
      </Button>
    </div>
  );
}

LoadMore.propTypes = {
  onLoadMore: PropTypes.func,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
};
LoadMore.defaultProps = {
  onLoadMore: undefined,
  text: 'Load more',
  isDisabled: false,
};
LoadMoreNav.propTypes = {
  onLoadMore: PropTypes.func,
  isDisabled: PropTypes.bool,
  iconSize: PropTypes.number,
};
LoadMoreNav.defaultProps = {
  onLoadMore: undefined,
  isDisabled: false,
  iconSize: 40,
};

export default LoadMore;
