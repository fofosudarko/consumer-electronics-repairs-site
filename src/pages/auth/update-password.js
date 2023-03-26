// change-password.js

import Head from 'next/head';

import { getAuthLayout } from 'src/layouts/auth/AuthLayout/AuthLayout';
import { UpdatePasswordPage } from 'src/components/auth';

export default function UpdatePassword() {
  return (
    <>
      <Head>
        <title>Update Password</title>
      </Head>
      <UpdatePasswordPage />
    </>
  );
}

UpdatePassword.getLayout = getAuthLayout;
