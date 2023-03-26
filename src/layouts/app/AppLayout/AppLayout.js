import PropTypes from 'prop-types';

import { useAuthStore } from 'src/stores/auth';
import AppHeader from './AppHeader';
import AppMain, { AppMainNav } from './AppMain';

function AppLayout({ children }) {
  const appUser = useAuthStore((state) => state.appUser ?? {});

  return (
    <>
      <AppHeader appUser={appUser} SideNav={AppMainNav} />
      <AppMain appUser={appUser}>{children}</AppMain>
    </>
  );
}

export function getAppLayout(page) {
  return <AppLayout>{page}</AppLayout>;
}

AppLayout.propTypes = {
  children: PropTypes.node,
};
AppLayout.defaultProps = {
  children: null,
};

export default AppLayout;
