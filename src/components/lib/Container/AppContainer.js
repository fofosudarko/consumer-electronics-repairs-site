// AppContainer.js

import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import { useDeviceDimensions } from 'src/hooks';

function AppContainer({
  children,
  NavArea,
  fluid,
  containerWidth,
  navWidth,
  mainWidth,
  containerFluidWidth,
}) {
  const { isLargeDevice } = useDeviceDimensions();
  return (
    <main>
      <div
        className="mx-auto"
        style={{
          width: isLargeDevice ? containerWidth : '100%',
          paddingTop: isLargeDevice ? '60px' : '40px',
        }}
      >
        <div className="d-flex flex-row">
          <div
            className="shadow-inner border-end border-light d-none d-lg-block app-nav-area"
            style={{ width: isLargeDevice ? navWidth : '0%' }}
          >
            <div>{NavArea}</div>
          </div>
          <div
            className="position-absolute start-25 end-0"
            style={{ width: isLargeDevice ? mainWidth : '100%' }}
          >
            <Container
              className={`${isLargeDevice ? undefined : 'p-0'}`}
              style={{
                height: 'auto',
                width: fluid
                  ? isLargeDevice
                    ? containerFluidWidth
                    : '100%'
                  : undefined,
              }}
              fluid={fluid}
            >
              <div className="app-content-area">{children}</div>
            </Container>
          </div>
        </div>
      </div>
    </main>
  );
}

export function ContentContainer({ children, widthClass, fluid }) {
  const { isLargeDevice } = useDeviceDimensions();
  return !isLargeDevice ? (
    <div className="my-5">{children}</div>
  ) : (
    <Container fluid={fluid} className={`${widthClass} my-5`}>
      {children}
    </Container>
  );
}

AppContainer.propTypes = {
  children: PropTypes.node,
  appUser: PropTypes.object,
  NavArea: PropTypes.object,
  fluid: PropTypes.bool,
  containerWidth: PropTypes.string,
  navWidth: PropTypes.string,
  mainWidth: PropTypes.string,
  containerFluidWidth: PropTypes.string,
};
AppContainer.defaultProps = {
  children: null,
  appUser: null,
  NavArea: null,
  fluid: false,
  containerWidth: '100%',
  navWidth: '16%',
  mainWidth: '84%',
  containerFluidWidth: '100%',
};
ContentContainer.propTypes = {
  children: PropTypes.node,
  widthClass: PropTypes.string,
  fluid: PropTypes.bool,
};
ContentContainer.defaultProps = {
  children: null,
  widthClass: 'w-50',
  fluid: false,
};

export default AppContainer;
