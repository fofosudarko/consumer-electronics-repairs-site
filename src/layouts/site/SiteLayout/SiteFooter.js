// SiteFooter

import { useCallback, useMemo } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import { useDeviceDimensions, useRoutes } from 'src/hooks';
import { useSiteStore } from 'src/stores/site';

function SiteFooter() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <footer className="site-footer">
      <div className="site-footer-info">
        <Container
          fluid
          className="h-100"
          style={{ width: isLargeDevice ? '75%' : '100%' }}
        >
          <Row
            xs={{ cols: 1 }}
            lg={{ cols: 3 }}
            className="my-0 my-lg-5 gx-0 gx-lg-4 h-100"
          >
            <Col xs={{ span: 12 }} lg={{ span: 4 }}>
              <div className="content-center">
                <div>
                  <Image
                    src="/img/Replugg logo in monochrome white on black.png"
                    alt="Replug Electronics Logo"
                    height={isLargeDevice ? '65' : '40'}
                    width={isLargeDevice ? '200' : '140'}
                  />
                </div>
                <div className="pt-2">
                  <p className="site-fs-4">
                    Replugg continuously develops new products and solutions
                    that make it convenient to use electronic devices.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Row xs={{ cols: 2 }} lg={{ cols: 4 }} className="gx-2">
                <Col>
                  <ProductsNav />
                </Col>
                <Col>
                  <RepluggNav />
                </Col>
                <Col>
                  <ContactNav />
                </Col>
                <Col>
                  <LegalNav />
                </Col>
              </Row>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 2 }}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="site-footer-copy">
        <Container
          fluid
          className="h-100"
          style={{ width: isLargeDevice ? '75%' : '100%' }}
        >
          <div className="content-center">
            <div>&copy; {new Date().getFullYear()} Replugg, LLC</div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function ProductsNav() {
  const { siteFooterNav, setSiteFooterNav } = useSiteStore((state) => state);

  const pickUpRoute = '/#pickup',
    walkInRoute = '/#walkin',
    onSiteRoute = '/#onsite';

  const handleSelect = useCallback(
    (selectedKey) => {
      if (selectedKey === pickUpRoute) {
        setSiteFooterNav(pickUpRoute);
      } else if (selectedKey === walkInRoute) {
        setSiteFooterNav(walkInRoute);
      } else if (selectedKey === onSiteRoute) {
        setSiteFooterNav(onSiteRoute);
      }
    },
    [setSiteFooterNav]
  );

  const navItems = useMemo(() => {
    return [
      {
        route: pickUpRoute,
        label: 'Pick up',
        eventKey: pickUpRoute,
        active: siteFooterNav === pickUpRoute,
        disabled: false,
        target: '_self',
      },
      {
        route: walkInRoute,
        label: 'Walk in',
        eventKey: walkInRoute,
        active: siteFooterNav === walkInRoute,
        disabled: false,
        target: '_self',
      },
      {
        route: onSiteRoute,
        label: 'On site',
        eventKey: onSiteRoute,
        active: siteFooterNav === onSiteRoute,
        disabled: false,
        target: '_self',
      },
    ];
  }, [siteFooterNav]);

  return (
    <div>
      <div>
        <p className="fw-bold fs-5 site-heading-font">Products</p>
      </div>
      <Nav onSelect={handleSelect} className="px-0 d-flex flex-column">
        {navItems.map((item, index) => (
          <Nav.Item key={index}>
            <Nav.Link
              eventKey={item.eventKey}
              as="div"
              disabled={item.disabled}
              style={{
                cursor: item.disabled ? 'not-allowed' : 'pointer',
              }}
              className="site-nav-link-no-left-padding"
            >
              <Link
                href={item.route}
                as={item.route}
                className="text-decoration-none"
                target={item.target}
              >
                <div
                  className={`${item.active ? 'text-secondary' : 'text-white'}`}
                >
                  <span className="site-fs-5">{item.label}</span>
                </div>
              </Link>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

function RepluggNav() {
  const { siteFooterNav, setSiteFooterNav } = useSiteStore((state) => state);
  const { coverageRoute } = useRoutes().useCoverageRoute();
  const { repairersProgramRoute } = useRoutes().useRepairersProgramRoute();
  const { locationsRoute } = useRoutes().useLocationsRoute();
  const { supportRoute } = useRoutes().useSupportRoute();
  const { aboutRoute } = useRoutes().useAboutRoute();

  const affiliateRoute = '#affiliate';

  const handleSelect = useCallback(
    (selectedKey) => {
      if (selectedKey === aboutRoute) {
        setSiteFooterNav(aboutRoute);
      } else if (selectedKey === coverageRoute) {
        setSiteFooterNav(coverageRoute);
      } else if (selectedKey === affiliateRoute) {
        setSiteFooterNav(affiliateRoute);
      } else if (selectedKey === locationsRoute) {
        setSiteFooterNav(locationsRoute);
      } else if (selectedKey === repairersProgramRoute) {
        setSiteFooterNav(repairersProgramRoute);
      } else if (selectedKey === supportRoute) {
        setSiteFooterNav(supportRoute);
      }
    },
    [
      aboutRoute,
      coverageRoute,
      locationsRoute,
      repairersProgramRoute,
      setSiteFooterNav,
      supportRoute,
    ]
  );

  const navItems = useMemo(() => {
    return [
      {
        route: aboutRoute,
        label: 'About',
        eventKey: aboutRoute,
        active: siteFooterNav === aboutRoute,
        disabled: false,
        target: '_self',
      },
      {
        route: coverageRoute,
        label: 'Coverage',
        eventKey: coverageRoute,
        active: siteFooterNav === coverageRoute,
        disabled: false,
        target: '_self',
      },
      {
        route: affiliateRoute,
        label: 'Affiliate',
        eventKey: affiliateRoute,
        active: siteFooterNav === affiliateRoute,
        disabled: false,
        target: '_self',
      },
      {
        route: locationsRoute,
        label: 'Locations',
        eventKey: locationsRoute,
        active: siteFooterNav === locationsRoute,
        disabled: false,
        target: '_self',
      },
      {
        route: repairersProgramRoute,
        label: 'Repairers Hub',
        eventKey: repairersProgramRoute,
        active: siteFooterNav === repairersProgramRoute,
        disabled: false,
        target: '_self',
      },
      {
        route: supportRoute,
        label: 'Support',
        eventKey: supportRoute,
        active: siteFooterNav === supportRoute,
        disabled: false,
        target: '_self',
      },
    ];
  }, [
    aboutRoute,
    coverageRoute,
    locationsRoute,
    repairersProgramRoute,
    siteFooterNav,
    supportRoute,
  ]);

  return (
    <div>
      <div>
        <p className="fw-bold fs-5 site-heading-font">Replugg</p>
      </div>
      <Nav onSelect={handleSelect} className="px-0 d-flex flex-column">
        {navItems.map((item, index) => (
          <Nav.Item key={index}>
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
                  className={`${item.active ? 'text-secondary' : 'text-white'}`}
                >
                  <span className="site-fs-5">{item.label}</span>
                </div>
              </Link>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

function ContactNav() {
  const { siteFooterNav, setSiteFooterNav } = useSiteStore((state) => state);

  const twitterRoute = 'http://twitter.com/Replugg.gh',
    instagramRoute = 'http://instagram.com/replugg.gh',
    facebookRoute = 'http://facebook.com/replugg',
    mailRoute = 'mailto:repluggelectronics@gmail.com',
    phoneNumberRoute = 'tel:+233544990052';

  const handleSelect = useCallback(
    (selectedKey) => {
      if (selectedKey === twitterRoute) {
        setSiteFooterNav(twitterRoute);
      } else if (selectedKey === instagramRoute) {
        setSiteFooterNav(instagramRoute);
      } else if (selectedKey === facebookRoute) {
        setSiteFooterNav(facebookRoute);
      } else if (selectedKey === mailRoute) {
        setSiteFooterNav(mailRoute);
      } else if (selectedKey === phoneNumberRoute) {
        setSiteFooterNav(phoneNumberRoute);
      }
    },
    [setSiteFooterNav]
  );

  const navItems = useMemo(() => {
    return [
      {
        route: twitterRoute,
        label: 'Twitter',
        eventKey: twitterRoute,
        active: siteFooterNav === twitterRoute,
        disabled: false,
        target: '_black',
      },
      {
        route: instagramRoute,
        label: 'Instagram',
        eventKey: instagramRoute,
        active: siteFooterNav === instagramRoute,
        disabled: false,
        target: '_blank',
      },
      {
        route: facebookRoute,
        label: 'Facebook',
        eventKey: facebookRoute,
        active: siteFooterNav === facebookRoute,
        disabled: false,
        target: '_blank',
      },
      {
        route: mailRoute,
        label: 'repluggelectronics@gmail.com',
        eventKey: mailRoute,
        active: siteFooterNav === mailRoute,
        disabled: false,
        target: '_blank',
      },
      {
        route: phoneNumberRoute,
        label: '+233 544 99 00 52',
        eventKey: phoneNumberRoute,
        active: siteFooterNav === phoneNumberRoute,
        disabled: false,
        target: '_self',
      },
    ];
  }, [siteFooterNav]);

  return (
    <div>
      <div>
        <p className="fw-bold fs-5 site-heading-font">Contact</p>
      </div>
      <Nav onSelect={handleSelect} className="px-0 d-flex flex-column">
        {navItems.map((item, index) => (
          <Nav.Item key={index}>
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
                  className={`${item.active ? 'text-secondary' : 'text-white'}`}
                >
                  <span className="site-fs-5">{item.label}</span>
                </div>
              </Link>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

function LegalNav() {
  const { siteFooterNav, setSiteFooterNav } = useSiteStore((state) => state);
  const { termsOfServiceRoute } = useRoutes().useTermsOfServiceRoute();
  const { privacyPolicyRoute } = useRoutes().usePrivacyPolicyRoute();

  const handleSelect = useCallback(
    (selectedKey) => {
      if (selectedKey === termsOfServiceRoute) {
        setSiteFooterNav(termsOfServiceRoute);
      } else if (selectedKey === privacyPolicyRoute) {
        setSiteFooterNav(privacyPolicyRoute);
      }
    },
    [privacyPolicyRoute, setSiteFooterNav, termsOfServiceRoute]
  );

  const navItems = useMemo(() => {
    return [
      {
        route: termsOfServiceRoute,
        label: 'Terms of service',
        eventKey: termsOfServiceRoute,
        active: siteFooterNav === termsOfServiceRoute,
        disabled: false,
        target: '_blank',
      },
      {
        route: privacyPolicyRoute,
        label: 'Privacy policy',
        eventKey: privacyPolicyRoute,
        active: siteFooterNav === privacyPolicyRoute,
        disabled: false,
        target: '_blank',
      },
    ];
  }, [privacyPolicyRoute, siteFooterNav, termsOfServiceRoute]);

  return (
    <div>
      <div>
        <p className="fw-bold fs-5 site-heading-font">Legal</p>
      </div>
      <Nav onSelect={handleSelect} className="px-0 d-flex flex-column">
        {navItems.map((item, index) => (
          <Nav.Item key={index}>
            <Nav.Link
              eventKey={item.eventKey}
              as="div"
              disabled={item.disabled}
              style={{ cursor: item.disabled ? 'not-allowed' : 'pointer' }}
              className="site-nav-link-no-left-padding"
            >
              <a
                className={`text-decoration-none ${
                  item.active ? 'text-secondary' : 'text-white'
                }`}
                target={item.target}
                href={item.route}
              >
                <span className="site-fs-5">{item.label}</span>
              </a>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

function CallToAction() {
  const { handleRepairersProgramRoute } =
    useRoutes().useRepairersProgramRoute();
  return (
    <div className="w-100">
      <Row>
        <Col>
          <Button
            className="w-100 my-1 bg-black text-white border border-white rounded"
            onClick={() => {
              window.location.href = '/#welcome';
            }}
          >
            <div>
              <span className="fw-bold">Repair a device</span>
            </div>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            className="w-100 my-1 bg-white text-black"
            variant="dark"
            onClick={handleRepairersProgramRoute}
          >
            <div>
              <span className="fw-bold">Become a repairer</span>
            </div>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

SiteFooter.propTypes = {};

export default SiteFooter;
