// SignInPage.js

import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object as Yup } from 'yup';
import Link from 'next/link';

import {
  YUP_PASSWORD_VALIDATOR,
  YUP_PHONE_NUMBER_VALIDATOR,
} from 'src/config/validators';
import { useRoutes, useNotificationHandler } from 'src/hooks';

import { WelcomeText, AppPhoneInput } from 'src/components/lib';

function SignInPage({ appUser }) {
  return (
    <div>
      <WelcomeText text="Good to see you again!" />
      <_SignInPage appUser={appUser} />
    </div>
  );
}

export function _SignInPage({ appUser }) {
  const signInSchema = Yup({
    mobileNumber: YUP_PHONE_NUMBER_VALIDATOR,
    password: YUP_PASSWORD_VALIDATOR,
  });

  const [processing, setProcessing] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signInSchema) });
  const { signUpRoute } = useRoutes().useSignUpRoute();
  const { forgotPasswordRoute } = useRoutes().useForgotPasswordRoute();

  const handleNotification = useNotificationHandler();

  const handleSignIn = useCallback(
    async ({ mobileNumber, password }) => {
      try {
        setProcessing(true);
        console.log({ mobileNumber, password });
      } catch (error) {
        handleNotification(error);
        setProcessing(false);
      }
    },
    [handleNotification]
  );

  return (
    <div>
      <Form onSubmit={handleSubmit(handleSignIn)}>
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

        <Form.Group>
          <Form.Label className="auth-form-label">password</Form.Label>
          <Controller
            render={({ field }) => (
              <Form.Control
                type="password"
                autoComplete="password"
                isInvalid={!!errors.password}
                {...field}
                placeholder="Your password"
              />
            )}
            control={control}
            name="password"
          />

          {errors.password && (
            <Form.Control.Feedback type="invalid">
              {errors.password.message}
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
            {processing ? `Signing in...` : `Sign in`}
          </Button>
        </div>
      </Form>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between">
        <Link href={signUpRoute} className="text-decoration-none">
          <div>Create an account</div>
        </Link>

        <Link href={forgotPasswordRoute} className="text-decoration-none">
          <div>Forgot password?</div>
        </Link>
      </div>
    </div>
  );
}

SignInPage.propTypes = {
  appUser: PropTypes.object,
};
SignInPage.defaultProps = {
  appUser: null,
};
_SignInPage.propTypes = {
  appUser: PropTypes.object,
};
_SignInPage.defaultProps = {
  appUser: null,
};

export default SignInPage;
