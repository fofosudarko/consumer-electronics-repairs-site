// UsersSection.js

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

import { useDeviceDimensions } from 'src/hooks';

function UsersSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="users" className="users-section">
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }} className="gx-4">
            <Col as="div" className="p-2 p-lg-5">
              <div
                className="p-2 p-lg-5 rounded"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="site-fs-2 fw-bold text-black text-center text-lg-end">
                  What our users say...
                </p>

                <p>
                  <Row xs={{ cols: 1 }} lg={{ cols: 2 }} className="gx-4">
                    <Col className="text-center">
                      <Image
                        alt="6567b33d-4104-4434-b24f-805e16c7e4be.jpeg"
                        src="/img/6567b33d-4104-4434-b24f-805e16c7e4be.jpeg"
                        height={500}
                        width={270}
                      />
                    </Col>
                    <Col as="div" className="site-fs-4 fw-normal">
                      <p className="fw-bold">Hi, I&apos;m Daniel Ofori.</p>
                      <p>
                        I tried out the services Replugg offers and I was glad I
                        reached out to them.
                      </p>
                      <p>
                        I had issues with my iPhone battery and I reached out to
                        them for assistance and it was resolved within the day.
                      </p>
                      <p>Thank you, Replugg.</p>
                    </Col>
                  </Row>
                </p>
              </div>
            </Col>
            <Col as="div" className="text-center">
              <Image
                alt="Ghana map.png"
                src="/img/Ghana map.png"
                height={837}
                width={590}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default UsersSection;
