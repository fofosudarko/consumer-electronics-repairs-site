// FileUploadButton.js

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaFileUpload } from 'react-icons/fa';

function FileUploadButton({ onClick, clicked, type, iconSize }) {
  return (
    <div>
      <Button
        className="w-100 fw-bold"
        type={type}
        disabled={clicked}
        variant="outline-dark"
        onClick={onClick}
      >
        <div>
          <FaFileUpload size={iconSize} />
          <span className="px-2 control-button-label">
            {clicked ? 'Uploading...' : 'Upload'}
          </span>
        </div>
      </Button>
    </div>
  );
}

FileUploadButton.propTypes = {
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
  type: PropTypes.string,
  iconSize: PropTypes.number,
};
FileUploadButton.defaultProps = {
  onClick: undefined,
  clicked: false,
  type: 'button',
  iconSize: 20,
};

export default FileUploadButton;
