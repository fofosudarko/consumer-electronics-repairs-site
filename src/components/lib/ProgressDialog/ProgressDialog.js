// ProgressDialog.js

import PropTypes from 'prop-types';
import { ProgressBar, Modal } from 'react-bootstrap';

function ProgressDialog({ show, onHide, text, closeButton }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton={closeButton}>{text}</Modal.Header>
      <Modal.Body>
        <ProgressBar animated now={100} striped variant="success" />
      </Modal.Body>
    </Modal>
  );
}

ProgressDialog.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  text: PropTypes.string,
  closeButton: PropTypes.bool,
};
ProgressDialog.defaultProps = {
  show: false,
  onHide: undefined,
  text: 'Action in progress...',
  closeButton: false,
};

export default ProgressDialog;
