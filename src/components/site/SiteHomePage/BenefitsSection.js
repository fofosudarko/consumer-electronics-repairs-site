// BenefitsSection.js

import { Container, Row, Col } from 'react-bootstrap';
import { useDeviceDimensions } from 'src/hooks';
import { MdOutlineCheckCircle } from 'react-icons/md';
import Image from 'next/image';

function BenefitsSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="benefits" className="benefits-section">
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }}>
            <Col as="div" className="p-2 p-lg-5">
              <p className="site-fs-2 fw-bold text-white">Benefits</p>
              <div className="py-5">
                <p className="site-fs-3 fw-normal">
                  <span className="me-3">
                    <MdOutlineCheckCircle size={30} className="text-white" />
                  </span>
                  <span className="fw-bold text-white">Save time & effort</span>
                </p>

                <p className="site-fs-3 fw-normal">
                  <span className="me-3">
                    <MdOutlineCheckCircle size={30} className="text-white" />
                  </span>
                  <span className="fw-bold text-white">
                    Enjoy best-in-class service delivery
                  </span>
                </p>

                <p className="site-fs-3 fw-normal">
                  <span className="me-3">
                    <MdOutlineCheckCircle size={30} className="text-white" />
                  </span>
                  <span className="fw-bold text-white text-wrap">
                    Enjoy affordable rates on all services
                  </span>
                </p>
              </div>
            </Col>
            <Col as="div" className="text-center">
              <Image
                alt="screen.png"
                src="/img/screen.png"
                height={1000}
                width={460}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default BenefitsSection;
