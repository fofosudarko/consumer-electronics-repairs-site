// FilterContainer.js

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaFilter } from 'react-icons/fa';

import { ShowButton } from '../ControlButtons';

function FilterContainer({ children, onShowFilter }) {
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    onShowFilter && onShowFilter(showFilters);
  }, [onShowFilter, showFilters]);

  return (
    <>
      <div className="justify-end">
        <ShowButton
          variant="transparent"
          textColor={showFilters ? 'secondary' : 'black'}
          toggleTextDisplay
          text={`${showFilters ? 'Hide filters' : 'Show filters'}`}
          onClick={() => setShowFilters(!showFilters)}
          autoWidth
          Icon={<FaFilter size={20} />}
          showIcon
          textNormal
        />
      </div>
      {showFilters ? <>{children}</> : null}
    </>
  );
}

FilterContainer.propTypes = {
  children: PropTypes.node,
  onShowFilter: PropTypes.func,
};
FilterContainer.defaultProps = {
  children: null,
  onShowFilter: undefined,
};

export default FilterContainer;
