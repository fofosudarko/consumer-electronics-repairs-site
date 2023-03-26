// signup.js
import Head from 'next/head';

import { SignUpPage } from 'src/components/auth';
import { getAuthLayout } from 'src/layouts/auth/AuthLayout/AuthLayout';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <SignUpPage />
    </>
  );
}

SignUp.getLayout = getAuthLayout;
