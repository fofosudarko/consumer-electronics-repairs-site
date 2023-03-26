// ServiceModeSection.js

import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

import { useDeviceDimensions } from 'src/hooks';

function ServiceModeSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="products" className="service-mode-section">
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Row xs={{ cols: 1 }} lg={{ cols: 2 }}>
            <Col as="div" className="p-2 p-lg-5">
              <p className="fw-bold ps-0 ps-lg-4 lh-sm">
                <div className="site-fs-1">3 unique ways</div>
                <div className="site-fs-3 text-uppercase">
                  to repair your device
                </div>
              </p>
            </Col>
            <Col></Col>
          </Row>

          <Row id="pickup" xs={{ cols: 1 }} lg={{ cols: 2 }}>
            <Col as="div" className="text-center">
              <Image
                src="/img/close-up-delivery-person-giving-parcel-client-1.png"
                alt="close-up-delivery-person-giving-parcel-client-1.png"
                height={637}
                width={625}
              />
            </Col>
            <Col as="div" className="p-2 p-lg-5">
              <p className="site-fs-3 fw-bold">Pick up</p>
              <div className="site-fs-4 fw-normal">
                <p>
                  We&apos;ve designed this specifically for those who for some
                  reason can&apos;t go to the repair center to fix their faulty
                  devices.
                </p>
                <p>
                  We will pick up the device from your location, repair it and
                  deliver it to you typically within 24 hours.
                </p>
                <p>You can easily track the progress on our website.</p>
                <p>
                  <RepairDeviceButton />
                </p>
              </div>
            </Col>
          </Row>

          <Row id="walkin" xs={{ cols: 1 }} lg={{ cols: 2 }} className="my-3">
            <Col as="div" className="p-2 p-lg-5">
              <p className="site-fs-3 fw-bold">Walk in</p>
              <div className="site-fs-4 fw-normal">
                <p>
                  Alternatively, if this is the most convenient option for you,
                  walk into any of our repair centers to repair your faulty
                  device. To avoid the long queues, you can book the service
                  ahead of time.
                </p>
                <p>
                  You&apos;re always welcome to our repair centers - in fact,
                  we&apos;ve reserved a seat just for you!
                </p>
                <p>
                  <RepairDeviceButton />
                </p>
              </div>
            </Col>
            <Col as="div" className="text-center">
              <Image
                src="/img/waiting-room-1.png"
                alt="waiting-room-1.png"
                height={625}
                width={628}
              />
            </Col>
          </Row>

          <Row id="onsite" xs={{ cols: 1 }} lg={{ cols: 2 }} className="my-3">
            <Col as="div" className="text-center">
              <Image
                src="/img/christina-wocintechchat-com-NMmQQE-N-_Y-unsplash-1.png"
                alt="christina-wocintechchat-com-NMmQQE-N-_Y-unsplash-1.png"
                height={633}
                width={632}
              />
            </Col>
            <Col as="div" className="p-2 p-lg-5">
              <p className="site-fs-3 fw-bold">On site</p>
              <div className="site-fs-4 fw-normal">
                <p>
                  We have a special package for our clients who would rather
                  have their devices repaired at their location - this could be
                  at home, workplace or social space.
                </p>
                <p>
                  We’ll need at least 24 hours notice to make adequate
                  preparation before the repair service can be done.
                </p>
                <p>
                  This package is, however, limited to specific faults only.
                </p>
                <p>
                  <RepairDeviceButton />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export function RepairDeviceButton({ type, clicked }) {
  const route = '/#welcome';
  return (
    <Button
      type={type}
      className="w-auto my-1 text-white"
      variant="primary"
      onClick={() => {
        window.location.href = route;
      }}
      disabled={clicked}
    >
      <div>
        <span className="site-fs-5 fw-bold site-heading-font">
          Repair a device
        </span>
      </div>
    </Button>
  );
}

RepairDeviceButton.propTypes = {
  type: PropTypes.string,
  clicked: PropTypes.bool,
};
RepairDeviceButton.defaultProps = {
  type: 'button',
  clicked: false,
};

export default ServiceModeSection;
