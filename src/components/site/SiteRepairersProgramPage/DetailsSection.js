// DetailsSection.js

import { Container, Row, Col } from 'react-bootstrap';

import { useDeviceDimensions } from 'src/hooks';

function DetailsSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div
      id="repairers-program-details"
      className="repairers-program-details-section"
    >
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <div className="section-padding text-center">
            <div>
              <p className="site-fs-3 fw-bold">WHAT IS THE</p>
              <p className="site-fs-1 fw-bold">Repairers Program?</p>
            </div>
            <Row xs={{ cols: 1 }} lg={{ cols: 3 }}>
              <Col></Col>
              <Col as="div" className="mt-2 mt-lg-5">
                <div className="site-fs-4">
                  <p>
                    The Repairers&apos; program is designed to empower repairers
                    to offer high quality services to the delight of their
                    clients.
                  </p>
                  <p>
                    By leveraging on our sales effort, technology and expertise,
                    repairers are better equipped to serve a wider clientele and
                    to meet their ever-increasing demands.
                  </p>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default DetailsSection;
