// signup.js

import { useState, useCallback } from 'react';
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

import { AppPhoneInput, WelcomeText } from 'src/components/lib';

function SignUpPage() {
  const signUpSchema = Yup({
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
  } = useForm({ resolver: yupResolver(signUpSchema) });
  const { signInRoute } = useRoutes().useSignInRoute();
  const { termsOfServiceRoute } = useRoutes().useTermsOfServiceRoute();

  const handleNotification = useNotificationHandler();

  const handleSignUp = useCallback(
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

        const newAccount = {
          mobileNumber,
          password,
        };
        setProcessing(true);
        console.log(newAccount);
      } catch (error) {
        handleNotification(error);
        setProcessing(false);
      }
    },
    [handleNotification, setError]
  );

  return (
    <div>
      <WelcomeText
        text={
          <>
            Hello, we&apos;re excited
            <br /> you&apos;re here!
          </>
        }
      />
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <Form.Group className="my-1">
          <Form.Label className="auth-form-label">mobile number</Form.Label>
          <Controller
            name="mobileNumber"
            control={control}
            render={({ field }) => (
              <AppPhoneInput
                errors={errors}
                {...field}
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
            {processing ? `Signing up...` : `Sign up`}
          </Button>
        </div>
      </Form>
      <div className="text-center mb-2">
        <Link href={signInRoute} className="text-decoration-none">
          <div>Log in</div>
        </Link>
      </div>
      <div className="text-center" style={{ fontSize: '14px' }}>
        By signing up, you agree to the Replugg&apos;s&nbsp;
        <Link
          href={termsOfServiceRoute}
          target="_blank"
          className="text-decoration-none"
        >
          <div>terms of service</div>
        </Link>
        .
      </div>
    </div>
  );
}

SignUpPage.propTypes = {};
SignUpPage.defaultProps = {};

export default SignUpPage;
