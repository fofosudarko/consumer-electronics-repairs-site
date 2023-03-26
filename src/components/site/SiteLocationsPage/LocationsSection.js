// LocationsSection.js

import PropTypes from 'prop-types';
import { Container, Stack } from 'react-bootstrap';
import { BiCaretDownCircle } from 'react-icons/bi';

import { useDeviceDimensions } from 'src/hooks';

function LocationsSection() {
  const { isLargeDevice } = useDeviceDimensions();

  const locations = [
    { place: 'ADENTA' },
    { place: 'MADINA' },
    null,
    null,
    null,
    null,
    null,
  ];

  return (
    <div id="locations" className="locations-section">
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <Stack>
            <Stack direction="horizontal" gap={4} className="mb-5">
              <div className="site-fs-4 fw-bold text-black site-heading-font">
                Regions
              </div>
              <div className="site-tab-inactive text-center fw-bold">
                <span className="text-primary">GREATER ACCRA</span>
              </div>
            </Stack>
            <Stack className="site-heading-font">
              {locations.map((item, index) =>
                item ? <LocationItem place={item.place} key={index} /> : null
              )}
            </Stack>
          </Stack>
        </Container>
      </section>
    </div>
  );
}

function LocationItem({ place }) {
  return (
    <div className="text-start py-5 px-3 gap-2 site-fs-5 border border-start-0 border-end-0">
      <span className="text-primary fw-bold">{place}</span>
      <span className="ms-4">
        <BiCaretDownCircle size={20} />
      </span>
    </div>
  );
}

LocationItem.propTypes = {
  place: PropTypes.string,
};
LocationItem.defaultProps = {
  place: null,
};

export default LocationsSection;
