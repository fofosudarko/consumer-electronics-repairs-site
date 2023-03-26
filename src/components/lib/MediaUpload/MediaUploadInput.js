// MediaUploadInput.js

import { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object as Yup } from 'yup';

import { YUP_MEDIA_VALIDATOR } from 'src/config/validators';
import { useProgress, useNotificationHandler } from 'src/hooks';

import { FileUploadButton } from '../ControlButtons';
import MediaUploadDialog from '../MediaUploadDialog/MediaUploadDialog';

function MediaUploadInput({ onSubmit, processing, header, name }) {
  const mediaUploadSchema = Yup({
    [name]: YUP_MEDIA_VALIDATOR,
  });

  const [files, setFiles] = useState(null);
  const defaultValues = useMemo(() => {
    return {
      [name]: undefined,
    };
  }, [name]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(mediaUploadSchema),
  });

  const handleNotification = useNotificationHandler();

  const { progress, setProgress, handleProgress } = useProgress();

  const handleMediaUploadSubmit = useCallback(async () => {
    try {
      setProgress(true);
      onSubmit && onSubmit(files);
    } catch (error) {
      setProgress(false);
      handleNotification(error);
    }
  }, [files, handleNotification, onSubmit, setProgress]);

  return (
    <div>
      <Row xs={{ cols: 1 }} as="div" className="gy-2">
        <Form.Group as={Col}>
          <Form.Label className="main-form-label">{header}</Form.Label>
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, name, ref } }) => (
              <Form.Control
                onChange={(event) => {
                  const files = event.target.files;
                  onChange(files);
                  files && setFiles(files);
                }}
                isInvalid={!!errors.media}
                type="file"
                ref={ref}
                name={name}
              />
            )}
          />
          {errors[name] && (
            <Form.Control.Feedback type="invalid">
              {errors[name].message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Col as="div">
          <FileUploadButton
            clicked={processing}
            onClick={handleSubmit(handleMediaUploadSubmit)}
          />
        </Col>
      </Row>
      <MediaUploadDialog show={progress} onHide={handleProgress} />
    </div>
  );
}

MediaUploadInput.propTypes = {
  onSubmit: PropTypes.func,
  processing: PropTypes.bool,
  header: PropTypes.string,
  name: PropTypes.string,
};
MediaUploadInput.defaultProps = {
  onSubmit: undefined,
  processing: false,
  header: 'Upload media',
  name: 'media',
};

export default MediaUploadInput;
