// signin.js
import Head from 'next/head';

import { useAuth } from 'src/hooks';

import { SignInPage } from 'src/components/auth';
import { getAuthLayout } from 'src/layouts/auth/AuthLayout/AuthLayout';

export default function SignIn() {
  const { appUser } = useAuth();
  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <SignInPage appUser={appUser} />
    </>
  );
}

SignIn.getLayout = getAuthLayout;
