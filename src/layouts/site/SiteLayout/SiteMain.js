// SiteMain.js

import PropTypes from 'prop-types';

import { useDeviceDimensions } from 'src/hooks';

function SiteMain({ children }) {
  const { isLargeDevice } = useDeviceDimensions();
  return (
    <main style={{ paddingTop: isLargeDevice ? '75px' : '60px' }}>
      {children}
    </main>
  );
}

SiteMain.propTypes = {
  children: PropTypes.node,
};
SiteMain.defaultProps = {
  children: null,
};

export default SiteMain;
