// FundingSection.js

import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

import { useDeviceDimensions } from 'src/hooks';

function FundingSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div
      id="repairers-program-funding"
      className="repairers-program-funding-section"
    >
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <div className="text-start">
            <p className="site-fs-1 fw-bold">Funding</p>
          </div>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }}>
            <Col>
              <p className="site-fs-4 text-black">
                Replugg provides support to eligible repairers to set up their
                shops, if they find it difficult to do so themselves.
              </p>
              <div className="mt-5">
                <div>
                  <ApplyButton />
                </div>
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-decoration-none text-primary site-fs-5 fw-bold"
                  >
                    Check out eligibility criteria&nbsp;&nbsp;&nbsp;&nbsp;
                    <BsArrowRight size={30} className="text-secondary" />
                  </a>
                </div>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export function ApplyButton() {
  const route = '#apply';
  return (
    <Button
      className="w-25 my-1 text-white"
      variant="primary"
      onClick={() => {
        window.location.href = route;
      }}
    >
      <div>
        <span className="fw-bold site-heading-font">Apply</span>
      </div>
    </Button>
  );
}

export default FundingSection;
