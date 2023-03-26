// HeaderSection.js

import { Container } from 'react-bootstrap';

import { useDeviceDimensions } from 'src/hooks';

function HeaderSection() {
  const { isLargeDevice } = useDeviceDimensions();

  return (
    <div id="about-header" className="about-header-section">
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <div className="section-padding text-white text-center">
            <p className="site-fs-1 fw-bold">About Us</p>
            <p className="site-fs-4">
              Replugg is an electronics repair company that aims at continuously
              developing new products and solutions that make it convenient to
              use electronic devices
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default HeaderSection;
