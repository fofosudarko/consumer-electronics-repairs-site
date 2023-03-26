import PropTypes from 'prop-types';
import Image from 'next/image';

import { SPLASH_IMAGE } from 'src/config';
import { useDeviceDimensions, useWindowDimensions } from 'src/hooks';

import AuthMain from './AuthMain';

function AuthLayout({ children }) {
  const { windowHeight, windowWidth } = useWindowDimensions();
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div className="mx-0 w-100 d-flex flex-row justify-content-between bg-white">
      <div
        className={`d-none d-lg-block ${isLargeDevice ? 'w-50' : ''} h-auto`}
      >
        <Image
          src={SPLASH_IMAGE}
          alt="Splash Image"
          height={windowHeight}
          width={windowWidth * 0.5}
        />
      </div>
      <div className={`${isLargeDevice ? 'w-50' : 'w-100'}`}>
        <AuthMain>{children}</AuthMain>
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node,
};
AuthLayout.defaultProps = {
  children: null,
};

export function getAuthLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
}

export default AuthLayout;
