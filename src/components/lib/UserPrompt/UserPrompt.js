import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import { RemoveButton, CancelButton } from '../ControlButtons';

function UserPrompt({
  title,
  show,
  onHide,
  processing,
  ctaText,
  callToAction,
  children,
  closeButton,
}) {
  return (
    <div>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton={closeButton}>
          <Modal.Title className="text-primary">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-end">
            <CancelButton
              variant="outline-dark"
              onClick={onHide}
              text="Cancel"
            />
            <div className="ms-2">
              <RemoveButton
                clicked={processing}
                variant="danger"
                onClick={callToAction}
                text={ctaText}
              />
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

UserPrompt.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  processing: PropTypes.bool,
  ctaText: PropTypes.string,
  callToAction: PropTypes.func,
  children: PropTypes.node,
  closeButton: PropTypes.bool,
};
UserPrompt.defaultProps = {
  title: 'Prompt User',
  show: false,
  onHide: undefined,
  processing: false,
  ctaText: 'Prompt',
  callToAction: undefined,
  children: null,
  closeButton: false,
};

export default UserPrompt;
