// AppMain.js

import { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

import { useRoutes } from 'src/hooks';
import { useDashboardStore } from 'src/stores/dashboard';

import { AppContainer } from 'src/components/lib';

function AppMain({ children, appUser }) {
  return (
    <AppContainer NavArea={<AppMainNav appUser={appUser} />} fluid>
      {children}
    </AppContainer>
  );
}

export function AppMainNav() {
  const { mainNav, setMainNav } = useDashboardStore((state) => state);

  const { homeRoute } = useRoutes().useHomeRoute();

  const handleSelect = useCallback(
    (selectedKey) => {
      if (selectedKey === homeRoute) {
        setMainNav(homeRoute);
      }
    },
    [homeRoute, setMainNav]
  );

  const navItems = useMemo(() => {
    return [
      {
        route: homeRoute,
        Icon: <FaHome size={20} />,
        label: 'Home',
        eventKey: homeRoute,
        active: mainNav === homeRoute,
        disabled: false,
      },
    ];
  }, [homeRoute, mainNav]);

  return (
    <Nav
      onSelect={handleSelect}
      className="flex-column my-1 vh-100"
      activeKey="home"
    >
      {navItems.map((item, index) => (
        <Nav.Item key={index}>
          <Nav.Link
            eventKey={item.eventKey}
            as="div"
            disabled={item.disabled}
            style={{ cursor: item.disabled ? 'not-allowed' : 'pointer' }}
            className={`${
              item.active ? 'app-nav-active-link' : 'app-nav-inactive-link'
            }`}
          >
            <Link
              href={item.route}
              as={item.route}
              className="text-decoration-none"
            >
              <div
                className={`${item.active ? 'text-primary' : 'text-secondary'}`}
              >
                <div className="d-inline-block fs-5">{item.Icon}</div>
                <span className="fs-6 mx-2">{item.label}</span>
              </div>
            </Link>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

AppMain.propTypes = {
  children: PropTypes.node,
  appUser: PropTypes.object,
};
AppMain.defaultProps = {
  children: null,
  appUser: null,
};

export default AppMain;
