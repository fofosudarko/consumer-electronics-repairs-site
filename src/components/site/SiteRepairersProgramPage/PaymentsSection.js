// PaymentsSection.js

import { Container, Row, Col } from 'react-bootstrap';

import { useDeviceDimensions } from 'src/hooks';

function PaymentsSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div
      id="repairers-program-payments"
      className="repairers-program-payments-section"
    >
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <div className="text-start">
            <p className="site-fs-1 fw-bold">Payments</p>
          </div>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }}>
            <Col>
              <p className="site-fs-4 text-black">
                Repairers must pay an annual fee of <b>Ghs 250</b> to use the
                Replugg website and services. For convenience sake, repairers
                have the opportunity to make payment in two installments (6
                months each).
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default PaymentsSection;
