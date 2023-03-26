// AuthMain.js

import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import { APP_LOGO } from 'src/config';
import { useDeviceDimensions, useRoutes } from 'src/hooks';

function AuthMain({ children }) {
  const { isSmallDevice, isMediumDevice, isLargeDevice } =
    useDeviceDimensions();
  const { indexRoute } = useRoutes().useIndexRoute();

  return (
    <Container fluid>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="mb-2">
          <Link href={indexRoute} className="text-decoration-none">
            <>
              <Image
                src={APP_LOGO}
                alt="Replug Electronics Logo"
                height={isLargeDevice ? '80' : '60'}
                width={isLargeDevice ? '250' : '180'}
              />
            </>
          </Link>
        </div>
        <div
          style={{
            width: isSmallDevice
              ? '100%'
              : isMediumDevice
              ? '75%'
              : isLargeDevice
              ? '40%'
              : '100%',
          }}
        >
          {children}
        </div>
      </div>
    </Container>
  );
}

AuthMain.propTypes = {
  children: PropTypes.node,
};
AuthMain.defaultProps = {
  children: null,
};

export default AuthMain;
