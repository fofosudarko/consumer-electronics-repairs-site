// SiteFeedbackInput.js

import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object as Yup } from 'yup';
import { BiMailSend } from 'react-icons/bi';

import {
  YUP_EMAIL_ADDRESS_VALIDATOR,
  YUP_GENERAL_NAME_VALIDATOR,
  YUP_EMAIL_MESSAGE_VALIDATOR,
} from 'src/config/validators';
import { useDeviceDimensions } from 'src/hooks';

import { CreateButton } from 'src/components/lib';

function SiteFeedbackInput({ onSubmit, processing }) {
  const siteFeedbackInputSchema = Yup({
    name: YUP_GENERAL_NAME_VALIDATOR,
    emailAddress: YUP_EMAIL_ADDRESS_VALIDATOR,
    message: YUP_EMAIL_MESSAGE_VALIDATOR,
  });
  const { isLargeDevice } = useDeviceDimensions();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(siteFeedbackInputSchema),
  });

  const handleSubmitSiteFeedback = useCallback(
    ({ name, emailAddress, message }) => {
      const newSiteFeedback = Object.assign(
        {},
        {
          name,
          message,
          emailAddress,
        }
      );
      onSubmit && onSubmit(newSiteFeedback);
    },
    [onSubmit]
  );

  return (
    <div>
      <Form onSubmit={handleSubmit(handleSubmitSiteFeedback)} noValidate>
        <Row xs={{ cols: 1 }}>
          <Form.Group className="my-1" as={Col}>
            <Form.Label className="main-form-label">Name</Form.Label>
            <Controller
              render={({ field }) => (
                <Form.Control
                  placeholder="Your name"
                  {...field}
                  isInvalid={!!errors.name}
                  style={{ height: 50 }}
                />
              )}
              name="name"
              control={control}
            />
            {errors.name ? (
              <Form.Control.Feedback type="invalid">
                {errors.name.message}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>

          <Form.Group className="my-1" as={Col}>
            <Form.Label className="main-form-label">Email address</Form.Label>
            <Controller
              render={({ field }) => (
                <Form.Control
                  placeholder="Your email address"
                  {...field}
                  isInvalid={!!errors.emailAddress}
                  style={{ height: 50 }}
                />
              )}
              name="emailAddress"
              control={control}
            />
            {errors.emailAddress ? (
              <Form.Control.Feedback type="invalid">
                {errors.emailAddress.message}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>

          <Form.Group className="my-1" as={Col}>
            <Form.Label className="main-form-label">Message</Form.Label>
            <Controller
              render={({ field }) => (
                <Form.Control
                  type="textarea"
                  placeholder="Your message"
                  {...field}
                  isInvalid={!!errors.message}
                  style={{ height: 200 }}
                  as="textarea"
                />
              )}
              name="message"
              control={control}
            />
            {errors.message ? (
              <Form.Control.Feedback type="invalid">
                {errors.message.message}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>
        </Row>

        <div className="justify-start my-2">
          <CreateButton
            type="submit"
            clicked={processing}
            text="Send"
            autoWidth={isLargeDevice}
            variant="primary"
            textColor="white"
            Icon={<BiMailSend size={20} />}
          />
        </div>
      </Form>
    </div>
  );
}

SiteFeedbackInput.propTypes = {
  onSubmit: PropTypes.func,
  processing: PropTypes.bool,
};
SiteFeedbackInput.defaultProps = {
  onSubmit: undefined,
  processing: false,
};

export default SiteFeedbackInput;
