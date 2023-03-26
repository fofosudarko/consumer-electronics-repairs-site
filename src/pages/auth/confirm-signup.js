// confirm-signup.js

import PropTypes from 'prop-types';

import Head from 'next/head';
import { useAuth } from 'src/hooks';

import { getAuthLayout } from 'src/layouts/auth/AuthLayout/AuthLayout';
import { ConfirmSignUpPage } from 'src/components/auth';

export default function ConfirmSignUp({ action, status }) {
  const { appUser } = useAuth();
  return (
    <>
      <Head>
        <title>Confirm Sign up</title>
      </Head>
      <ConfirmSignUpPage action={action} status={status} appUser={appUser} />
    </>
  );
}

export function getServerSideProps(context) {
  const { action = null, status = null } = context.query ?? {};

  return { props: { action, status } };
}

ConfirmSignUp.propTypes = {
  action: PropTypes.string,
  status: PropTypes.string,
};
ConfirmSignUp.defaultProps = {
  action: null,
  status: null,
};

ConfirmSignUp.getLayout = getAuthLayout;
