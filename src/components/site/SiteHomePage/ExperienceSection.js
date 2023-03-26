// ExperienceSection.js

import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDeviceDimensions } from 'src/hooks';

function ExperienceSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="experience" className="experience-section">
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }}>
            <Col as="div" className="p-2 p-lg-5">
              <p className="site-fs-3 fw-bold text-white text-center">
                Enjoy the
              </p>
              <p className="site-fs-2 fw-normal text-white text-center">
                Replugg Experience
              </p>
              <p className="text-center">
                <StartHereButton />
              </p>
            </Col>
            <Col as="div"></Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

function StartHereButton() {
  const route = '#welcome';
  return (
    <Button
      className="w-auto my-1 bg-white text-black border border-light rounded"
      onClick={() => {
        window.location.href = route;
      }}
    >
      <div>
        <span className="fw-bold site-heading-font">Start here</span>
      </div>
    </Button>
  );
}

export default ExperienceSection;
