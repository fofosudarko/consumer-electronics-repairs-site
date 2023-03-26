// GeolocationDialog.js

import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Row, Col } from 'react-bootstrap';
import { MdMyLocation, MdLocationOn } from 'react-icons/md';

import { useGeolocation, useNotificationHandler } from 'src/hooks';

import { CreateButton, CancelButton } from '../ControlButtons';

function GeolocationDialog({ onGetCurrentPosition, useTooltip }) {
  const [showDialog, setShowDialog] = useState(false);
  const {
    currentPosition,
    setCurrentPosition,
    handleGetCurrentPosition,
    error,
    setError,
    setGeolocation,
    processing,
  } = useGeolocation();
  const handleNotification = useNotificationHandler();

  useEffect(() => {
    if (error) {
      setShowDialog(false);
      handleNotification(error);
    }

    return () => {
      setError(null);
    };
  }, [error, handleNotification, handleShowDialog, setError]);

  useEffect(() => {
    if (currentPosition) {
      onGetCurrentPosition && onGetCurrentPosition(currentPosition);
      setShowDialog(false);
    }
  }, [currentPosition, onGetCurrentPosition, setCurrentPosition]);

  useEffect(() => {
    return () => {
      setCurrentPosition(null);
      setGeolocation(null);
    };
  }, [setCurrentPosition, setGeolocation]);

  const handleShowDialog = useCallback(() => {
    setShowDialog(!showDialog);
  }, [showDialog]);

  return (
    <>
      <CreateButton
        onClick={handleShowDialog}
        Icon={<MdMyLocation size={20} />}
        useTooltip={useTooltip}
        variant="transparent"
        textColor="black"
        text="Current location"
        showIcon={!useTooltip}
      />
      <Modal show={showDialog} onHide={handleShowDialog} size="lg" centered>
        <Modal.Body>
          <Row
            xs={{ cols: 1 }}
            lg={{ cols: 2 }}
            className="d-flex flex-column-reverse flex-lg-row gy-2 gy-lg-0"
          >
            <Col>
              <CancelButton onClick={handleShowDialog} />
            </Col>
            <Col>
              <CreateButton
                onClick={handleGetCurrentPosition}
                Icon={<MdLocationOn size={20} />}
                variant="transparent"
                textColor="black"
                text={
                  processing
                    ? 'Getting current location...'
                    : 'Get current location'
                }
                showIcon
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

GeolocationDialog.propTypes = {
  onGetCurrentPosition: PropTypes.func,
  useTooltip: PropTypes.bool,
};
GeolocationDialog.defaultProps = {
  onGetCurrentPosition: undefined,
  useTooltip: false,
};

export default GeolocationDialog;
