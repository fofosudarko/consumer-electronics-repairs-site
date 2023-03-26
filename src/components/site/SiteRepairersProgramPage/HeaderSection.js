// HeaderSection.js

import { Container } from 'react-bootstrap';

import { useDeviceDimensions } from 'src/hooks';
import { RepairDeviceButton } from '../SiteHomePage/ServiceModeSection';

function HeaderSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div
      id="repairers-program-header"
      className="repairers-program-header-section"
    >
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <div className="section-padding text-center">
            <p className="site-fs-1 fw-bold">Repairers Program</p>
            <p className="site-fs-4">
              <RepairDeviceButton />
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default HeaderSection;
