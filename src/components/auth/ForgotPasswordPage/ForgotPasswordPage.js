// ForgotPasswordPage.js

import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object as Yup } from 'yup';
import Link from 'next/link';

import {
  YUP_PHONE_NUMBER_VALIDATOR,
  YUP_CONFIRMATION_CODE_VALIDATOR,
} from 'src/config/validators';
import { isValidPhoneNumber } from 'src/utils';
import { useRoutes, useNotificationHandler } from 'src/hooks';

import { AppPhoneInput } from 'src/components/lib';

function ForgotPasswordPage({ appUser }) {
  const [processing, setProcessing] = useState(false);
  const [showConfirmForgotPasswordOTP, setShowConfirmForgotPasswordOTP] =
    useState(false);
  const handleNotification = useNotificationHandler();

  const handleForgotPasswordSubmit = useCallback(
    async ({ mobileNumber }) => {
      try {
        const body = {
          channel: null,
          receiver: mobileNumber,
        };
        setProcessing(true);
        console.log(body);
      } catch (error) {
        handleNotification(error);
        setProcessing(false);
      }
    },
    [handleNotification]
  );

  const handleConfirmForgotPasswordOTPSubmit = useCallback(
    async ({ mobileNumber = null, confirmationCode = null }) => {
      try {
        const body = {
          receiver: mobileNumber,
          token: confirmationCode,
          channel: null,
        };
        setProcessing(true);
        console.log(body);
      } catch (error) {
        handleNotification(error);
        setProcessing(false);
      }
    },
    [handleNotification]
  );

  return (
    <div>
      {!showConfirmForgotPasswordOTP ? (
        <ForgotPasswordView
          appUser={appUser}
          processing={processing}
          onSubmit={handleForgotPasswordSubmit}
        />
      ) : (
        <ConfirmForgotPasswordOTPInputView
          appUser={appUser}
          onSubmit={handleConfirmForgotPasswordOTPSubmit}
          processing={processing}
        />
      )}
    </div>
  );
}

function ForgotPasswordView({ onSubmit, processing }) {
  const forgotPasswordSchema = Yup({
    mobileNumber: YUP_PHONE_NUMBER_VALIDATOR,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(forgotPasswordSchema) });
  const { signInRoute } = useRoutes().useSignInRoute();

  const handleForgotPassword = useCallback(
    async ({ mobileNumber }) => {
      if (mobileNumber && !isValidPhoneNumber(mobileNumber)) {
        setError('mobileNumber', {
          type: 'manual',
          message: 'Invalid mobile number. Must be at least 12 digits long',
        });
        return;
      }

      onSubmit && onSubmit({ mobileNumber });
    },
    [onSubmit, setError]
  );

  return (
    <div>
      <Form onSubmit={handleSubmit(handleForgotPassword)}>
        <Form.Group className="my-1">
          <Form.Label className="auth-form-label">mobile number</Form.Label>
          <Controller
            name="mobileNumber"
            control={control}
            render={({ field }) => (
              <AppPhoneInput
                {...field}
                errors={errors}
                componentProps={{
                  inputProps: {
                    type: 'tel',
                    placeholder: 'Your mobile number',
                    autoComplete: 'tel',
                    className: 'w-100 mobile-number-padding form-control',
                  },
                  country: 'gh',
                  regions: ['africa'],
                  prefix: '+',
                }}
              />
            )}
          />
          {errors.mobileNumber && (
            <Form.Control.Feedback type="invalid">
              {errors.mobileNumber.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <div className="my-4">
          <Button
            type="submit"
            variant="primary"
            className="w-100 fw-bold text-white"
            disabled={processing}
          >
            {processing
              ? `Requesting password update...`
              : `Request password update`}
          </Button>
        </div>
      </Form>
      <div>
        <Link href={signInRoute} className="text-decoration-none">
          <div>Log in</div>
        </Link>
      </div>
    </div>
  );
}

function ConfirmForgotPasswordOTPInputView({ onSubmit, processing }) {
  const confirmForgotPasswordOTPSchema = Yup({
    mobileNumber: YUP_PHONE_NUMBER_VALIDATOR,
    confirmationCode: YUP_CONFIRMATION_CODE_VALIDATOR,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(confirmForgotPasswordOTPSchema) });

  const handleConfirmForgetPasswordOTP = useCallback(
    async ({ confirmationCode, mobileNumber }) => {
      if (mobileNumber && !isValidPhoneNumber(mobileNumber)) {
        setError('mobileNumber', {
          type: 'manual',
          message: 'Invalid mobile number. Must be at least 12 digits long',
        });
        return;
      }

      onSubmit && onSubmit({ confirmationCode, mobileNumber });
    },
    [onSubmit, setError]
  );

  return (
    <div>
      <Form onSubmit={handleSubmit(handleConfirmForgetPasswordOTP)}>
        <Form.Group className="my-1">
          <Form.Label className="auth-form-label">mobile number</Form.Label>
          <Controller
            name="mobileNumber"
            control={control}
            render={({ field }) => (
              <AppPhoneInput
                {...field}
                errors={errors}
                componentProps={{
                  inputProps: {
                    type: 'tel',
                    placeholder: 'Your mobile number',
                    autoComplete: 'tel',
                    className: 'w-100 mobile-number-padding form-control',
                  },
                  country: 'gh',
                  regions: ['africa'],
                  prefix: '+',
                }}
              />
            )}
          />
          {errors.mobileNumber && (
            <Form.Control.Feedback type="invalid">
              {errors.mobileNumber.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label className="auth-form-label">confirmation code</Form.Label>
          <Controller
            render={({ field }) => (
              <Form.Control
                type="text"
                autoComplete="confirmation-code"
                isInvalid={!!errors.confirmationCode}
                {...field}
                placeholder="Your confirmation code"
              />
            )}
            name="confirmationCode"
            control={control}
          />
          {errors.confirmationCode && (
            <Form.Control.Feedback type="invalid">
              {errors.confirmationCode.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <div className="my-4">
          <Button
            type="submit"
            variant="primary"
            className="w-100 fw-bold text-white"
            disabled={processing}
          >
            {processing ? `Confirming...` : `Confirm`}
          </Button>
        </div>

        <div>
          <p className="text-center fw-light fs-6">
            Please check your mobile device and enter the 6-digit confirmation
            code you just received.
          </p>
        </div>
      </Form>
    </div>
  );
}

ForgotPasswordPage.propTypes = {
  appUser: PropTypes.object,
};
ForgotPasswordPage.defaultProps = {
  appUser: null,
};
ForgotPasswordView.propTypes = {
  onSubmit: PropTypes.func,
  processing: PropTypes.bool,
};
ForgotPasswordView.defaultProps = {
  onSubmit: undefined,
  processing: false,
};
ConfirmForgotPasswordOTPInputView.propTypes = {
  onSubmit: PropTypes.func,
  processing: PropTypes.bool,
};
ConfirmForgotPasswordOTPInputView.defaultProps = {
  onSubmit: undefined,
  processing: false,
};

export default ForgotPasswordPage;
