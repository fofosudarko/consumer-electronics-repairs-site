// HeaderSection.js

import { Container } from 'react-bootstrap';

import { useDeviceDimensions } from 'src/hooks';

function HeaderSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="locations-header" className="locations-header-section">
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <div className="section-padding text-white text-center">
            <p className="site-fs-1 fw-bold">Locations</p>
            <p className="site-fs-4">
              You can visit any of our locations across the Greater Accra
              region. We&apos;re expanding rapidly into new communities.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default HeaderSection;
