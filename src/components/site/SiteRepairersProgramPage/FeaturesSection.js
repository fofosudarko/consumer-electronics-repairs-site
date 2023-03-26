// FeaturesSection.js

import PropTypes from 'prop-types';
import { Container, Stack } from 'react-bootstrap';
import { FaSquare } from 'react-icons/fa';

import { useDeviceDimensions } from 'src/hooks';

function FeaturesSection() {
  const { isLargeDevice } = useDeviceDimensions();

  const features = [
    {
      feature:
        'Repairers have access to multiple repair jobs daily through our website',
    },
    {
      feature: 'Each repairer is fully equipped with Toolsets if the need be.',
    },
    {
      feature:
        'Repairers will receive regular training on best professional practices.',
    },
    {
      feature: 'Enjoy flexible working hours.',
    },
    {
      feature: 'Repairers will get access to up-to-date repair guides',
    },
    {
      feature:
        'Repairers get complete access to genuine spare parts at the right price',
    },
    {
      feature:
        'Our team of industry experts are always available to assist repairers.',
    },
    {
      feature: 'Get paid at you own convenience – instantly or periodically',
    },
  ];

  return (
    <div
      id="repairers-program-features"
      className="repairers-program-features-section"
    >
      <section className="my-2 my-lg-5">
        <Container fluid style={{ width: isLargeDevice ? '75%' : '100%' }}>
          <p className="site-fs-1 fw-bold justify-start">Features</p>
          <Stack>
            {features.map((item, index) =>
              item ? <FeatureItem feature={item.feature} key={index} /> : null
            )}
          </Stack>
        </Container>
      </section>
    </div>
  );
}

function FeatureItem({ feature }) {
  const { isLargeDevice } = useDeviceDimensions();
  return (
    <div className="text-start py-2 py-lg-5 px-3 gap-2 site-fs-5">
      <span className="me-2 me-lg-5">
        <FaSquare size={isLargeDevice ? 100 : 50} className="text-secondary" />
      </span>
      <span className="site-fs-4 fw-normal text-black">{feature}</span>
    </div>
  );
}

FeatureItem.propTypes = {
  feature: PropTypes.string,
};
FeatureItem.defaultProps = {
  feature: null,
};

export default FeaturesSection;
