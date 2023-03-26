// CoverageSection.js

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

import { useDeviceDimensions } from 'src/hooks';
import { RepairDeviceButton } from '../SiteHomePage/ServiceModeSection';

function CoverageSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="coverage" className="coverage-section">
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }} className="gx-4">
            <Col xs={12} lg={4} as="div" className="p-2 p-lg-5">
              <div className="content-center">
                <p className="site-fs-1 fw-bold">Coverage</p>
                <p className="site-fs-3 fw-bold text-black">
                  Discover the gadgets, brands and faults we undertake at
                  Replugg
                </p>
                <p>
                  <RepairDeviceButton />
                </p>
              </div>
            </Col>
            <Col xs={12} lg={8} as="div">
              <Row className="gx-2">
                <Col as="div" className="text-center">
                  <Image
                    alt="Phone repairs 1.png"
                    src="/img/Phone repairs 1.png"
                    height={707}
                    width={524}
                  />
                </Col>
                <Col>
                  <Row xs={{ cols: 1 }} className="gx-2 gy-2">
                    <Col>
                      <Image
                        alt="maury-page-QeJ943yEd1E-unsplash 1.png"
                        src="/img/maury-page-QeJ943yEd1E-unsplash 1.png"
                        height={418}
                        width={518}
                      />
                    </Col>
                    <Col>
                      <Image
                        alt="denis-cherkashin-qIKSsOMIhpM-unsplash 1.png"
                        src="/img/denis-cherkashin-qIKSsOMIhpM-unsplash 1.png"
                        height={332}
                        width={250}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default CoverageSection;
