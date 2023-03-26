import PropTypes from 'prop-types';
import { Modal, ProgressBar } from 'react-bootstrap';

function MediaUploadDialog({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>Uploading media...</Modal.Header>
      <Modal.Body>
        <ProgressBar animated now={100} striped variant="success" />
      </Modal.Body>
    </Modal>
  );
}

MediaUploadDialog.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};
MediaUploadDialog.defaultProps = {
  show: false,
  onHide: undefined,
};

export default MediaUploadDialog;
