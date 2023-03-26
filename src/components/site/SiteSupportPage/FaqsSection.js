// FaqsSection.js

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Stack } from 'react-bootstrap';
import { BiCaretDownCircle } from 'react-icons/bi';

import { useDeviceDimensions } from 'src/hooks';

function FaqsSection() {
  const { isLargeDevice } = useDeviceDimensions();

  const faqs = [
    {
      question: 'How long will it take to repair a device if you pick up?',
      answer:
        'It depends on the type of service. Usually, we deliver the repaired gadget within 24 hours.',
    },
    {
      question:
        'How long does it take if you repair the device at my location?',
      answer:
        'For most faults, it takes an average of an hour and half to fix at your location.',
    },
    {
      question: 'Does Replugg own repair centers?',
      answer:
        "We partner with independent repairers to provide excellent services. Replugg facilitates the repair process on our clients' behalf.",
    },
  ];

  return (
    <div id="faqs-faqs" className="faqs-faqs-section">
      <section className="py-2 py-lg-5">
        <Container
          fluid
          style={{
            width: isLargeDevice ? '75%' : '100%',
            backgroundColor: 'white',
          }}
          className="faqs-faqs-section-container"
        >
          <p className="site-fs-1 fw-bold question-center">
            Frequently Asked Questions (FAQ&apos;s)
          </p>
          <Stack className="site-heading-font py-5">
            {faqs.map((item, index) =>
              item ? (
                <FaqItem
                  question={item.question}
                  answer={item.answer}
                  key={index}
                  number={index + 1}
                />
              ) : null
            )}
          </Stack>
        </Container>
      </section>
    </div>
  );
}

function FaqItem({ question, answer, number }) {
  const [showAnswer, setShowAnswer] = useState(true);
  return (
    <div>
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="justify-between py-5 px-3 gap-2 site-fs-4 border border-secondary border-start-0 border-top-0 border-end-0"
      >
        <span className="question-black fw-bold">
          {number}. {question}
        </span>
        <span>
          <BiCaretDownCircle size={20} />
        </span>
      </div>
      {showAnswer ? (
        <div className="py-5 px-3 site-fs-4 fw-light animate__animated animate__fadeInDown">
          {answer}
        </div>
      ) : null}
    </div>
  );
}

FaqItem.propTypes = {
  question: PropTypes.string,
  number: PropTypes.string,
  answer: PropTypes.string,
};
FaqItem.defaultProps = {
  question: null,
  number: undefined,
  answer: null,
};

export default FaqsSection;
