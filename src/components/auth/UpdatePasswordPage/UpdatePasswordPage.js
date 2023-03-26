// UpdatePasswordPage.js

import { useState, useCallback, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object as Yup } from 'yup';
import Link from 'next/link';

import {
  YUP_PASSWORD_VALIDATOR,
  YUP_PHONE_NUMBER_VALIDATOR,
} from 'src/config/validators';
import { isValidPhoneNumber } from 'src/utils';
import { useRoutes, useNotificationHandler } from 'src/hooks';

import { AppPhoneInput } from 'src/components/lib';

function UpdatePasswordPage() {
  const updatePasswordSchema = Yup({
    password: YUP_PASSWORD_VALIDATOR,
    confirmPassword: YUP_PASSWORD_VALIDATOR,
    mobileNumber: YUP_PHONE_NUMBER_VALIDATOR,
  });

  const [processing, setProcessing] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm({ resolver: yupResolver(updatePasswordSchema) });
  const { signInRoute } = useRoutes().useSignInRoute();
  const handleNotification = useNotificationHandler();

  const handleUpdatePassword = useCallback(
    async ({ password, confirmPassword, mobileNumber }) => {
      try {
        if (password !== confirmPassword) {
          setError('password', 'Passwords do not match. Please check.');
          return;
        }

        if (mobileNumber && !isValidPhoneNumber(mobileNumber)) {
          setError('mobileNumber', {
            type: 'manual',
            message: 'Invalid mobile number. Must be at least 12 digits long',
          });
          return;
        }

        const body = {
          password: password,
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
    [handleNotification, setError]
  );

  return (
    <div>
      <Form onSubmit={handleSubmit(handleUpdatePassword)}>
        <Form.Group className="my-1">
          <Form.Label className="auth-form-label">mobile number</Form.Label>
          <Controller
            name="mobileNumber"
            control={control}
            render={({ field: { name, onChange, value } }) => (
              <AppPhoneInput
                value={value}
                onChange={onChange}
                componentProps={{
                  inputProps: {
                    type: 'tel',
                    placeholder: 'Your mobile number',
                    autoComplete: 'tel',
                    className: 'w-100 mobile-number-padding form-control',
                    name,
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

        <Form.Group className="my-1">
          <Form.Label className="auth-form-label">password</Form.Label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Form.Control
                type="password"
                autoComplete="new-password"
                isInvalid={!!errors.password}
                {...field}
                placeholder="Your password"
              />
            )}
          />
          {errors.password && (
            <Form.Control.Feedback type="invalid">
              {errors.password.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="my-1">
          <Form.Label className="auth-form-label">confirm password</Form.Label>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Form.Control
                type="password"
                autoComplete="new-password"
                isInvalid={!!errors.confirmPassword}
                {...field}
                placeholder="Confirm your password"
              />
            )}
          />
          {errors.confirmPassword && (
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword.message}
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
            {processing ? `Updating password...` : `Update password`}
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

UpdatePasswordPage.propTypes = {};
UpdatePasswordPage.defaultProps = {};

export default UpdatePasswordPage;
