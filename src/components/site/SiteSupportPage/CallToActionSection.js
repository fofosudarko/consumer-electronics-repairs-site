// CallToActionSection.js

import { Container, Button, Stack } from 'react-bootstrap';

import { useDeviceDimensions, useRoutes } from 'src/hooks';

function CallToActionSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="faqs-faqs" className="faqs-call-to-action-section">
      <section className="py-2 py-lg-5">
        <Container
          fluid
          style={{
            width: isLargeDevice ? '75%' : '100%',
          }}
        >
          <CallToAction />
        </Container>
      </section>
    </div>
  );
}

function CallToAction() {
  const { isLargeDevice } = useDeviceDimensions();
  const { handleRepairersProgramRoute } =
    useRoutes().useRepairersProgramRoute();

  return (
    <div className="w-100 text-center">
      <Stack
        gap={isLargeDevice ? 4 : 2}
        direction={isLargeDevice ? 'horizontal' : 'vertical'}
      >
        <Button
          className="w-100 my-1 text-white"
          variant="primary"
          onClick={() => {
            window.location.href = '/#welcome';
          }}
        >
          <div className="py-2 site-fs-4">
            <span className="fw-bold">Repair a device</span>
          </div>
        </Button>
        <Button
          className="w-100 my-1 bg-white text-black"
          variant="outline-dark"
          onClick={handleRepairersProgramRoute}
        >
          <div className="py-2 site-fs-4">
            <span className="fw-bold">Become a repairer</span>
          </div>
        </Button>
      </Stack>
    </div>
  );
}

CallToAction.propTypes = {};
CallToAction.defaultProps = {};

export default CallToActionSection;
