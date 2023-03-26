// forgot-password.js

import Head from 'next/head';

import { getAuthLayout } from 'src/layouts/auth/AuthLayout/AuthLayout';
import { ForgotPasswordPage } from 'src/components/auth';

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <ForgotPasswordPage />
    </>
  );
}

ForgotPassword.getLayout = getAuthLayout;
