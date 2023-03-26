// _app.js
import React from 'react';
import PropTypes from 'prop-types';
import nProgress from 'nprogress';
import { Router } from 'next/router';
import SSRProvider from 'react-bootstrap/SSRProvider';

import 'src/styles/main.scss';
import 'src/styles/site.scss';
import 'src/styles/nprogress.css';

// animate.css
import 'animate.css';

import { AppProvider, NotificationProvider } from 'src/context';
import { NotificationContainer } from 'src/components/lib';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const Noop = (Component) => <>{Component}</>;

// suppress useLayoutEffect warnings when running outside a browser
if (typeof window !== 'object') {
  React.useLayoutEffect = React.useEffect;
}

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || Noop;

  return (
    <SSRProvider>
      <AppProvider>
        <NotificationProvider>
          <NotificationContainer>
            {getLayout(<Component {...pageProps} />)}
          </NotificationContainer>
        </NotificationProvider>
      </AppProvider>
    </SSRProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};
MyApp.defaultProps = {
  Component: null,
  pageProps: null,
};

export default MyApp;
