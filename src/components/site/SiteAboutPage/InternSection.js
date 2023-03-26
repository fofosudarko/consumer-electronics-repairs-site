// InternSection.js

import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

import { useDeviceDimensions } from 'src/hooks';

function InternSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="repairers-program-funding" className="about-intern-section">
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <div className="text-start">
            <p className="site-fs-1 fw-bold">Intern at Replugg</p>
          </div>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }} className="gx-4">
            <Col>
              <p className="site-fs-4">
                If you want to help clients stay productive always, then join us
                at Replugg to repair as many devices as we can.
              </p>
              <div className="mt-5">
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-decoration-none text-white site-fs-5 fw-bold"
                  >
                    Check out open positions here&nbsp;&nbsp;&nbsp;&nbsp;
                    <BsArrowRight size={30} />
                  </a>
                </div>
              </div>
            </Col>
            <Col as="div" className="text-center">
              <Image
                alt="Intern 1.png"
                src="/img/Intern 1.png"
                height={417}
                width={793}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default InternSection;
