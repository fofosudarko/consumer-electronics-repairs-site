// GadgetsSection.js

import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import { BiCaretDownCircle } from 'react-icons/bi';

import { IMAGE_PLACEHOLDER } from 'src/config/';
import { useDeviceDimensions } from 'src/hooks';

function GadgetsSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="repairers" className="gadgets-section">
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <p className="site-fs-3 fw-bold text-black text-start text-wrap mb-5">
            Find all the Gadgets, Brands & Models we Cover at Replugg.
          </p>

          <Row xs={{ cols: 1 }} lg={{ cols: 3 }} className="gx-4 gy-2 gy-lg-0">
            <Col as="div">
              <Card className="border-none">
                <Card.Img
                  as={Image}
                  src="/img/180172-OWULCT-713 1.png"
                  alt="180172-OWULCT-713 1.png"
                  height={470}
                  width={470}
                />
                <Card.Body>
                  <Card.Title className="text-start site-fs-4">
                    Smartphones
                  </Card.Title>
                  <Card.Text>
                    <div className="text-start gap-2 site-fs-5">
                      <div>
                        <span className="me-2">
                          <BiCaretDownCircle size={20} />
                        </span>
                        Brands
                      </div>
                      <div>
                        <span className="me-2">
                          <BiCaretDownCircle size={20} />
                        </span>
                        Faults
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col as="div">
              <Card className="border-none">
                <Card.Img
                  as={Image}
                  src={IMAGE_PLACEHOLDER}
                  alt={IMAGE_PLACEHOLDER}
                  height={470}
                  width={470}
                />
                <Card.Body>
                  <Card.Title className="text-start site-fs-4">
                    Laptops
                  </Card.Title>
                  <Card.Text>
                    <div className="text-start gap-2 site-fs-5">
                      <div>
                        <span className="me-2">
                          <BiCaretDownCircle size={20} />
                        </span>
                        Brands
                      </div>
                      <div>
                        <span className="me-2">
                          <BiCaretDownCircle size={20} />
                        </span>
                        Faults
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="border-none">
                <Card.Img
                  as={Image}
                  src={IMAGE_PLACEHOLDER}
                  alt={IMAGE_PLACEHOLDER}
                  height={470}
                  width={470}
                />
                <Card.Body>
                  <Card.Title className="text-start site-fs-4">
                    Computers
                  </Card.Title>
                  <Card.Text>
                    <div className="text-start gap-2 site-fs-5">
                      <div>
                        <span className="me-2">
                          <BiCaretDownCircle size={20} />
                        </span>
                        Brands
                      </div>
                      <div>
                        <span className="me-2">
                          <BiCaretDownCircle size={20} />
                        </span>
                        Faults
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default GadgetsSection;
