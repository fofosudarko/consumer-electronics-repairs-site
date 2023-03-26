// SolutionSection.js

import { Container, Row, Col } from 'react-bootstrap';

import { useDeviceDimensions } from 'src/hooks';

function SolutionSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="about-intro" className="about-intro-section">
      <section className="py-2 py-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Row
            xs={{ cols: 1 }}
            lg={{ cols: 2 }}
            style={{ backgroundColor: '#DCCBFF' }}
            className="about-statement-container p-2 p-lg-5"
          >
            <Col as="div" className="text-center"></Col>
            <Col as="div" className="p-3 p-lg-5 content-center">
              <p className="site-fs-1 fw-bold" style={{ color: '#2F033A' }}>
                The Solution
              </p>
              <p className="site-fs-4 fw-bold">
                Replugg makes repair services easily accessible to everyone. We
                believe that you do not have to travel far away for affordable
                repairs while other commitments await you. Reliable services can
                still be easily accessible wherever you are. Our platform
                connects you directly to a qualified repairer within minutes.
                Our solution seeks to do exactly what technology always does,
                make life easier for you.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default SolutionSection;
