// IntroSection.js

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

import { useDeviceDimensions } from 'src/hooks';

function IntroSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="about-intro" className="about-intro-section">
      <section className="py-2 py-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }}>
            <Col as="div" className="text-center">
              <div className="position-relative">
                <Image
                  alt="Ellipse 1.png"
                  src="/img/Ellipse 1.png"
                  height={593}
                  width={593}
                />
                <div className="position-absolute top-50 start-50 translate-middle">
                  <Image
                    alt="Replugg_logo 1.png"
                    src="/img/Replugg_logo 1.png"
                    height={259}
                    width={306}
                  />
                </div>
              </div>
            </Col>
            <Col as="div" className="p-2 p-lg-5 content-center">
              <p className="site-fs-3 fw-bold">
                A person&apos;s electronic device is an investment that cannot
                be left in the wrong hands. Because we know how important your
                device is to you, we&apos;re offering you the most convenient
                ways to repair your gadgets.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default IntroSection;
