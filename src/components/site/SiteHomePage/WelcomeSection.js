// WelcomeSection.js

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

import { useDeviceDimensions } from 'src/hooks';

function WelcomeSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="welcome" className="welcome-section">
      <section className="py-2 py-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }}>
            <Col
              as="div"
              className={`p-2 p-lg-5 ${
                isLargeDevice ? 'rounded' : 'rounded-none'
              } bg-white`}
            >
              <p className="site-fs-2 fw-bold">
                Repair your devices conveniently.
              </p>
              <p className="site-fs-4 fw-normal">
                We make it easy and convenient to repair your electronic
                devices.
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <section className="py-2 py-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }}>
            <Col as="div" className="p-2 p-lg-5">
              <p className="site-fs-1 fw-bold lh-sm">
                <div className="site-fs-3 text-uppercase">Replugg&apos;s</div>
                <div className="site-fs-1 lh-sm">Convenient Repair Service</div>
              </p>
              <p className="site-fs-4 fw-normal">
                We understand the frustration of owning a faulty device and the
                added stress of having to go all the way to a repair center to
                get it fixed.
              </p>
              <p className="site-fs-4 fw-normal">
                Every second of your day is valuable, that is why Replugg offers
                you unique ways to repair your device.
              </p>
            </Col>
            <Col as="div" className="text-center">
              <Image
                alt="charles-6OF-Ly-5oJY-unsplash-1.png"
                src="/img/charles-6OF-Ly-5oJY-unsplash-1.png"
                height={657}
                width={541}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default WelcomeSection;
