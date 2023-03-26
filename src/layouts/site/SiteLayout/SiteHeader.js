import { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

import { APP_LOGO } from 'src/config';
import { useRoutes, useDeviceDimensions } from 'src/hooks';
import { useSiteStore } from 'src/stores/site';

import { NavButton } from 'src/components/lib';

function SiteHeader({ appUser }) {
  const { isLargeDevice } = useDeviceDimensions();
  const { indexRoute } = useRoutes().useIndexRoute();
  const homeRoute = indexRoute;

  return (
    <Navbar
      expand="lg"
      className="app-header w-100 border-bottom border-2 border-light"
      sticky="top"
    >
      <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
        <Navbar.Brand className="mx-2">
          <Link href={homeRoute} as={homeRoute}>
            <>
              <Image
                src={APP_LOGO}
                alt="Replugg Logo"
                height={isLargeDevice ? '50' : '25'}
                width={isLargeDevice ? '150' : '80'}
              />
            </>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle as={NavButton}></Navbar.Toggle>
        <Navbar.Collapse>
          <SiteHeaderNav appUser={appUser} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function SiteHeaderNav({ appUser }) {
  const { siteHeaderNav, setSiteHeaderNav } = useSiteStore((state) => state);
  const { useSignInRoute, useSignUpRoute, useRepairersProgramRoute } =
    useRoutes();
  const { repairersProgramRoute, handleRepairersProgramRoute } =
      useRepairersProgramRoute(),
    { signInRoute, handleSignInRoute } = useSignInRoute(),
    { signUpRoute, handleSignUpRoute } = useSignUpRoute();

  const productsRoute = '/#products',
    repairRoute = '/#welcome';

  const handleSelect = useCallback(
    (selectedKey) => {
      if (selectedKey === signInRoute) {
        setSiteHeaderNav(signInRoute);
      } else if (selectedKey === signUpRoute) {
        setSiteHeaderNav(signUpRoute);
      } else if (selectedKey === productsRoute) {
        setSiteHeaderNav(productsRoute);
      } else if (selectedKey === repairRoute) {
        setSiteHeaderNav(repairRoute);
      } else if (selectedKey === repairersProgramRoute) {
        setSiteHeaderNav(repairersProgramRoute);
      }
    },
    [repairersProgramRoute, setSiteHeaderNav, signInRoute, signUpRoute]
  );

  const navItems = useMemo(() => {
    return [
      {
        route: productsRoute,
        label: 'Products',
        eventKey: productsRoute,
        active: siteHeaderNav === productsRoute,
        disabled: false,
        target: '_self',
      },
      {
        route: repairRoute,
        label: 'Repair',
        eventKey: repairRoute,
        active: siteHeaderNav === repairRoute,
        disabled: false,
        target: '_self',
      },
    ];
  }, [siteHeaderNav]);

  return (
    <div className="w-100 my-2 my-md-0 d-flex justify-content-start justify-content-lg-end">
      <Nav
        onSelect={handleSelect}
        className="px-0 d-flex flex-column flex-lg-row"
      >
        {navItems.map((item, index) => (
          <Nav.Item key={index} className="px-2">
            <Nav.Link
              eventKey={item.eventKey}
              as="div"
              disabled={item.disabled}
              style={{ cursor: item.disabled ? 'not-allowed' : 'pointer' }}
              className="site-nav-link-no-left-padding"
            >
              <Link
                href={item.route}
                as={item.route}
                className="text-decoration-none"
                target={item.target}
              >
                <div
                  className={`${item.active ? 'text-secondary' : 'text-black'}`}
                >
                  <span className="fs-6 site-body-fs fw-normal content-center">
                    {item.label}
                  </span>
                </div>
              </Link>
            </Nav.Link>
          </Nav.Item>
        ))}

        {
          <>
            <Nav.Item className="px-1">
              <Button
                className="w-100 my-1 border-0"
                variant={`${
                  siteHeaderNav === repairersProgramRoute
                    ? 'dark'
                    : 'outline-dark'
                }`}
                onClick={handleRepairersProgramRoute}
              >
                <div>
                  <span className="fw-bold">Become a repairer</span>
                </div>
              </Button>
            </Nav.Item>

            <Nav.Item className="px-1">
              <Button
                className="w-100 my-1 border-0"
                variant={`${
                  siteHeaderNav === signInRoute ? 'primary' : 'outline-primary'
                }`}
                onClick={handleSignInRoute}
              >
                <div>
                  <span className="fw-bold">Login</span>
                </div>
              </Button>
            </Nav.Item>

            <Nav.Item className="px-1">
              <Button
                className="w-100 my-1 text-white"
                variant={`${
                  siteHeaderNav === signUpRoute ? 'outline-primary' : 'primary'
                }`}
                onClick={handleSignUpRoute}
              >
                <div>
                  <span className="fw-bold">Create account</span>
                </div>
              </Button>
            </Nav.Item>
          </>
        }
      </Nav>
    </div>
  );
}

SiteHeader.propTypes = {
  appUser: PropTypes.object,
  SideNav: PropTypes.func,
};
SiteHeader.defaultProps = {
  appUser: null,
  SideNav: null,
};
SiteHeaderNav.propTypes = {
  appUser: PropTypes.object,
};
SiteHeaderNav.defaultProps = {
  appUser: null,
};

export default SiteHeader;
