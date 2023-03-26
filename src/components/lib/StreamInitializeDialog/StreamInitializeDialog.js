// StreamInitializeDialog.js

import PropTypes from 'prop-types';
import { ProgressBar, Modal } from 'react-bootstrap';

function StreamInitializeDialog({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>Initializing stream...</Modal.Header>
      <Modal.Body>
        <ProgressBar animated now={100} striped variant="success" />
      </Modal.Body>
    </Modal>
  );
}

StreamInitializeDialog.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};
StreamInitializeDialog.defaultProps = {
  show: false,
  onHide: undefined,
};

export default StreamInitializeDialog;
