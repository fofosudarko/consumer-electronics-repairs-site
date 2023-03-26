import PropTypes from 'prop-types';

import SiteHeader from './SiteHeader';
import SiteMain from './SiteMain';
import SiteFooter from './SiteFooter';
import { useAuthStore } from 'src/stores/auth';

function SiteLayout({ children }) {
  const appUser = useAuthStore((state) => state.appUser);
  return (
    <>
      <SiteHeader appUser={appUser} />
      <SiteMain appUser={appUser}>{children}</SiteMain>
      <SiteFooter />
    </>
  );
}

export function getSiteLayout(page) {
  return <SiteLayout>{page}</SiteLayout>;
}

SiteLayout.propTypes = {
  children: PropTypes.node,
};
SiteLayout.defaultProps = {
  children: null,
};

export default SiteLayout;
