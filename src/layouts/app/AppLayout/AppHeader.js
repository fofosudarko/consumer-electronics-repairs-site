import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaUserAlt } from 'react-icons/fa';

import { APP_DASHBOARD_LOGO, APP_ROUTE_CONTEXT } from 'src/config';
import {
  useSignOut,
  useRoutes,
  useDeviceDimensions,
  useRouteContext,
} from 'src/hooks';
import { useDashboardStore } from 'src/stores/dashboard';

import { NavButton, SignOut, NewHOC } from 'src/components/lib';

function AppHeader({ appUser, SideNav: _SideNav }) {
  const { isCustomer, isRepairer, isManager } = useRouteContext(appUser);
  const { isLargeDevice } = useDeviceDimensions();
  const { useCustomerHomeRoute, useRepairerHomeRoute, useManageRoute } =
    useRoutes();
  const { customerHomeRoute } = useCustomerHomeRoute(),
    { repairerHomeRoute } = useRepairerHomeRoute(),
    { manageRoute } = useManageRoute();
  const homeRoute = isCustomer
    ? customerHomeRoute
    : isRepairer
    ? repairerHomeRoute
    : isManager
    ? manageRoute
    : '';

  const SideNav = NewHOC(_SideNav);

  return (
    <Navbar
      expand="lg"
      className="app-header w-100 border-bottom border-2 border-light"
      sticky="top"
    >
      <Container fluid style={{ width: isLargeDevice ? '100%' : '100%' }}>
        <MainNav>
          <SideNav appUser={appUser} />
        </MainNav>
        <Navbar.Brand className="mx-2">
          <Link href={homeRoute} as={homeRoute}>
            <>
              <Image
                src={APP_DASHBOARD_LOGO}
                alt="Replugg Logo"
                height={isLargeDevice ? '28' : '25'}
                width={isLargeDevice ? '85' : '80'}
              />
            </>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle as={NavButton}></Navbar.Toggle>
        <Navbar.Collapse>
          <AppHeaderNav appUser={appUser} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function AppHeaderNav({ appUser }) {
  const { dropdownNav, setDropdownNav } = useDashboardStore((state) => state);
  const { useCustomerAccountRoute, useRepairerAccountRoute } = useRoutes();
  const { customerAccountRoute } = useCustomerAccountRoute(),
    { repairerAccountRoute } = useRepairerAccountRoute();
  const handleSignOut = useSignOut();

  const { account = {}, routeContext } = appUser ?? {};

  let profileItem = null;
  if (routeContext === APP_ROUTE_CONTEXT.CUSTOMER) {
    profileItem = {
      route: customerAccountRoute,
      Icon: <FaUserAlt size={20} />,
      label: 'Customer profile',
      eventKey: customerAccountRoute,
      active: dropdownNav === customerAccountRoute,
      disabled: false,
    };
  } else if (routeContext === APP_ROUTE_CONTEXT.REPAIRER) {
    profileItem = {
      route: repairerAccountRoute,
      Icon: <FaUserAlt size={20} />,
      label: 'Repairer profile',
      eventKey: repairerAccountRoute,
      active: dropdownNav === repairerAccountRoute,
      disabled: false,
    };
  }

  const handleSelect = useCallback(
    (selectedKey) => {
      if (selectedKey === 'sign-out') {
        handleSignOut();
      } else if (selectedKey === customerAccountRoute) {
        dispatch(setDropdownNav(customerAccountRoute));
      } else if (selectedKey === repairerAccountRoute) {
        dispatch(setDropdownNav(repairerAccountRoute));
      }
    },
    [customerAccountRoute, handleSignOut, repairerAccountRoute, setDropdownNav]
  );

  return (
    <div className="w-100 my-2 my-md-0 d-flex justify-content-start justify-content-lg-end">
      <Nav onSelect={handleSelect}>
        <NavDropdown
          title={`Welcome, ${account.username ? account.username : ''}!`}
          align={{ sm: 'start' }}
          id="nav-dropdown"
          menuRole="menu"
          className="pe-2 rounded shadown-sm text-white"
        >
          {profileItem ? (
            <>
              <NavDropdown.Divider />
              <NavDropdown.Item
                eventKey={profileItem.eventKey}
                as="div"
                style={{
                  cursor: profileItem.disabled ? 'not-allowed' : 'pointer',
                }}
                disabled={profileItem.disabled}
              >
                <Link
                  href={profileItem.route}
                  as={profileItem.route}
                  className="text-decoration-none "
                >
                  <div
                    className={`${
                      profileItem.active ? 'text-secondary' : 'text-black'
                    } fw-normal`}
                  >
                    <div className="d-inline-block fs-5">
                      {profileItem.Icon}
                    </div>
                    <span className="fs-6 mx-2">{profileItem.label}</span>
                  </div>
                </Link>
              </NavDropdown.Item>
            </>
          ) : null}

          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="sign-out">
            <SignOut />
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
}

function MainNav({ children }) {
  const [showMainNav, setShowMainNav] = useState(false);

  const handleShowMainNav = useCallback(() => {
    setShowMainNav((state) => !state);
  }, []);

  return (
    <div className="d-block d-lg-none">
      <NavButton onClick={handleShowMainNav} variant="white" />
      <Offcanvas show={showMainNav} onHide={handleShowMainNav}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="app-nav-area-bg">
          <div onClick={handleShowMainNav}>{children}</div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

AppHeader.propTypes = {
  appUser: PropTypes.object,
  SideNav: PropTypes.func,
};
AppHeader.defaultProps = {
  appUser: null,
  SideNav: null,
};
AppHeaderNav.propTypes = {
  appUser: PropTypes.object,
};
AppHeaderNav.defaultProps = {
  appUser: null,
};
MainNav.propTypes = {
  children: PropTypes.node,
};
MainNav.defaultProps = {
  children: null,
};

export default AppHeader;
