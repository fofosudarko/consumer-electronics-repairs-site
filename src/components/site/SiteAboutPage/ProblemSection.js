// ProblemSection.js

import { Container, Row, Col } from 'react-bootstrap';

import { useDeviceDimensions } from 'src/hooks';

function ProblemSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="about-intro" className="about-intro-section">
      <section className="py-2 py-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Row
            xs={{ cols: 1 }}
            lg={{ cols: 2 }}
            style={{ backgroundColor: '#FFC0C0' }}
            className="about-statement-container p-2 p-lg-5"
          >
            <Col as="div" className="text-center"></Col>
            <Col as="div" className="p-3 p-lg-5 content-center">
              <p className="site-fs-1 fw-bold" style={{ color: '#EE3760' }}>
                The Problem
              </p>
              <p className="site-fs-4 fw-bold">
                With technology simplifying our lives and updating us on the
                world around us, it is easy to see why electronic devices,
                especially phones and laptops, are so important for the everyday
                business person, worker, and student. Unfortunately machines
                suffer damage or wear-tear and need to be repaired. In order to
                avoid paying expensive fees, a lot of people pretend it is not
                necessary and keep using the faulty device.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ProblemSection;
