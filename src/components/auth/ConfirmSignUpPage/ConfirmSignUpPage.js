import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object as Yup } from 'yup';
import { useAuthStore } from 'src/stores/auth';

import { ACCOUNT_STATUS } from 'src/config';
import {
  YUP_CONFIRMATION_CODE_VALIDATOR,
  YUP_PHONE_NUMBER_VALIDATOR,
} from 'src/config/validators';
import { isValidPhoneNumber } from 'src/utils';
import { useRoutes, useNotificationHandler } from 'src/hooks';
import {
  ResendConfirmationCodeButton,
  AppPhoneInput,
} from 'src/components/lib';

function ConfirmSignUpPage({ appUser, action, status }) {
  const { appUserRegistration } = useAuthStore((state) => state);

  const handleNotification = useNotificationHandler();

  const [processing, setProcessing] = useState(false);
  const [resendConfirmationCode, setResendConfirmationCode] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const [confirmationCodeResent, setConfirmationCodeResent] = useState(false);

  useEffect(() => {
    if (action === 'resend-confirmation-code') {
      if (status === ACCOUNT_STATUS.UNCONFIRMED) {
        setConfirmStatus(true);
      } else {
        setResendConfirmationCode(true);
      }
    }
  }, [action, status]);

  const handleConfirmStatusSubmit = useCallback(
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

  const handleResendConfirmationCode = useCallback(async () => {
    try {
      let receiver;
      if (appUserRegistration) {
        receiver = appUserRegistration.mobileNumber;
      }
      const body = {
        receiver,
        channel: null,
      };
      setConfirmationCodeResent(true);
      console.log(body);
    } catch (error) {
      handleNotification(error);
      setProcessing(false);
    }
  }, [appUserRegistration, handleNotification]);

  const handleConfirmSignUp = useCallback(
    async ({ confirmationCode }) => {
      try {
        let receiver;
        if (appUserRegistration) {
          receiver = appUserRegistration.mobileNumber;
        } else if (sendAccountActivationCode) {
          receiver = sendAccountActivationCode.receiver;
        }
        const body = {
          receiver,
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
    [appUserRegistration, handleNotification]
  );

  return (
    <div>
      {confirmStatus ? (
        <ConfirmStatusView
          processing={processing}
          onSubmit={handleConfirmStatusSubmit}
        />
      ) : (
        <ConfirmSignUpView
          processing={processing}
          resendConfirmationCode={resendConfirmationCode}
          confirmationCodeResent={confirmationCodeResent}
          onResend={handleResendConfirmationCode}
          onSubmit={handleConfirmSignUp}
        />
      )}
    </div>
  );
}

function ConfirmStatusView({ onSubmit, processing }) {
  const confirmStatusSchema = Yup({
    mobileNumber: YUP_PHONE_NUMBER_VALIDATOR,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(confirmStatusSchema) });

  const handleConfirmStatus = useCallback(
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
      <Form onSubmit={handleSubmit(handleConfirmStatus)}>
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
            {processing ? `Confirming your status...` : `Confirm status`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

function ConfirmSignUpView({
  onSubmit,
  onResend,
  resendConfirmationCode,
  confirmationCodeResent,
  processing,
}) {
  const confirmationCodeSchema = Yup({
    confirmationCode: YUP_CONFIRMATION_CODE_VALIDATOR,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(confirmationCodeSchema) });

  const handleResendConfirmationCode = useCallback(() => {
    onResend && onResend();
  }, [onResend]);

  const handleConfirmSignUp = useCallback(
    ({ confirmationCode }) => {
      onSubmit && onSubmit({ confirmationCode });
    },
    [onSubmit]
  );

  return (
    <div>
      <Form onSubmit={handleSubmit(handleConfirmSignUp)}>
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

        {resendConfirmationCode ? (
          <div className="mb-2 block">
            <ResendConfirmationCodeButton
              onClick={handleResendConfirmationCode}
              clicked={confirmationCodeResent}
            />
          </div>
        ) : null}

        {!resendConfirmationCode ? (
          <div>
            <p className="text-center fw-light fs-6">
              Please check your mobile device and enter the 6-digit confirmation
              code you just received.
            </p>
          </div>
        ) : null}
      </Form>
    </div>
  );
}

ConfirmSignUpPage.propTypes = {
  appUser: PropTypes.object,
  action: PropTypes.string,
  status: PropTypes.string,
};
ConfirmSignUpPage.defaultProps = {
  appUser: null,
  action: null,
  status: null,
};
ConfirmStatusView.propTypes = {
  onSubmit: PropTypes.func,
  processing: PropTypes.bool,
};
ConfirmStatusView.defaultProps = {
  onSubmit: undefined,
  processing: false,
};
ConfirmSignUpView.propTypes = {
  onSubmit: PropTypes.func,
  onResend: PropTypes.func,
  processing: PropTypes.bool,
  resendConfirmationCode: PropTypes.bool,
  confirmationCodeResent: PropTypes.bool,
};
ConfirmSignUpView.defaultProps = {
  onSubmit: undefined,
  onResend: undefined,
  processing: false,
  resendConfirmationCode: false,
  confirmationCodeResent: false,
};

export default ConfirmSignUpPage;
