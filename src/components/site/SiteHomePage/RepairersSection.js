// RepairersSection.js

import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

import { useDeviceDimensions, useRoutes } from 'src/hooks';

function RepairersSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="repairers" className="repairers-section">
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <p className="site-fs-2 fw-bold text-black text-center">
            Repairer Stories
          </p>

          <Row xs={{ cols: 1 }} lg={{ cols: 2 }} className="gx-4">
            <Col
              as="div"
              xs={{ span: 12 }}
              lg={{ span: 4 }}
              className="text-center"
            >
              <Image
                alt="IMG_0661 1.png"
                src="/img/IMG_0661 1.png"
                height={614}
                width={460}
              />
            </Col>

            <Col
              as="div"
              className="p-2 p-lg-5"
              xs={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <p className="site-fs-3">Meet Dan</p>
              <div className="site-fs-4">
                <p>
                  I&apos;ve been working with Replugg since July 2020. It&apos;s
                  been a very interesting journey I must say.
                </p>
                <p>
                  I have received new recommendations from Replugg, and these
                  clients have grown to become loyal due to the quality of
                  service we deliver. Our partnership has been largely
                  successful so far.
                </p>
                <p>
                  <div className="d-flex flex-column flex-lg-row mt-5">
                    <BecomeARepairerButton />
                  </div>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

function BecomeARepairerButton() {
  const { handleRepairersProgramRoute } =
    useRoutes().useRepairersProgramRoute();
  return (
    <Button
      className="w-auto my-1 bg-primary text-white border border-white rounded"
      onClick={handleRepairersProgramRoute}
    >
      <div>
        <span className="site-fs-5 fw-bold site-heading-font">
          Become a repairer
        </span>
      </div>
    </Button>
  );
}

export default RepairersSection;
