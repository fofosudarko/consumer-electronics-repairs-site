// IntroSection.js

import { Container, Row, Col } from 'react-bootstrap';

import { useDeviceDimensions } from 'src/hooks';

import SiteFeedback from './SiteFeedback/SiteFeedback';

function IntroSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="faqs-intro" className="faqs-intro-section">
      <section className="py-2 py-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }}>
            <Col as="div" className="p-2 p-lg-5 content-center">
              <p className="site-fs-1 fw-bold lh-1 py-3">
                Let&apos;s build Replugg together!
              </p>
              <div className="site-fs-5 fw-bold">
                <p>
                  We&apos;d love to hear from you. We rely on our comunity to
                  make Replugg better for everyone.
                </p>
                <p>
                  Share your questions, complaints and suggestions with us and
                  we&apos;ll get right to work to put a smile on your face.
                </p>
              </div>
            </Col>
            <Col as="div" className="site-feedback-area">
              <SiteFeedback />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default IntroSection;
