// KinesisProcessDialog.js

import PropTypes from 'prop-types';
import { ProgressBar, Modal } from 'react-bootstrap';

function KinesisProcessDialog({ show, onHide, challenge }) {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        Processing challenge activity for&nbsp;
        <b>{challenge?.BucketObjectFilename}</b>&nbsp;...
      </Modal.Header>
      <Modal.Body>
        <ProgressBar animated now={100} striped variant="success" />
      </Modal.Body>
    </Modal>
  );
}

KinesisProcessDialog.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  challenge: PropTypes.object,
};
KinesisProcessDialog.defaultProps = {
  show: false,
  onHide: undefined,
  challenge: null,
};

export default KinesisProcessDialog;
