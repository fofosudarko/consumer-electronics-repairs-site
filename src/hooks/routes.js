// routes.js
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from 'src/stores/auth';

import { APP_ROUTE_CONTEXT } from 'src/config';

const routes = {
  INDEX_ROUTE: '/',
  COVERAGE_ROUTE: '/coverage',
  REPAIRERS_PROGRAM_ROUTE: '/repairers-program',
  LOCATIONS_ROUTE: '/locations',
  ABOUT_ROUTE: '/about',
  SUPPORT_ROUTE: '/support',
  TERMS_OF_SERVICE_ROUTE: '/docs/legal/Replugg General Terms of Service.pdf',
  PRIVACY_POLICY_ROUTE: '/docs/legal/Replugg Privacy Policy.pdf',
  SIGNIN_ROUTE: '/auth/signin',
  SIGNUP_ROUTE: '/auth/signup',
  CONFIRM_SIGNUP_ROUTE: '/auth/confirm-signup',
  FORGOT_PASSWORD_ROUTE: '/auth/forgot-password',
  UPDATE_PASSWORD_ROUTE: '/auth/update-password',
  SIGNOUT_ROUTE: '/auth/signout',
  HOME_ROUTE: '/{{APP_USERNAME}}',
};

export default function useRoutes() {
  const router = useRouter();
  const appUser = useAuthStore((state) => state.appUser);
  const { account = null } = appUser ?? {};
  const username = account?.username;

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleReload = useCallback(() => {
    router.reload();
  }, [router]);

  const useIndexRoute = useCallback(() => {
    const indexRoute = routes.INDEX_ROUTE;

    const handleIndexRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: indexRoute, query });
    };

    return { indexRoute, handleIndexRoute };
  }, [router]);

  const useRepairersProgramRoute = useCallback(() => {
    const repairersProgramRoute = routes.REPAIRERS_PROGRAM_ROUTE;

    const handleRepairersProgramRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: repairersProgramRoute, query });
    };

    return { repairersProgramRoute, handleRepairersProgramRoute };
  }, [router]);

  const useCoverageRoute = useCallback(() => {
    const coverageRoute = routes.COVERAGE_ROUTE;

    const handleCoverageRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: coverageRoute, query });
    };

    return { coverageRoute, handleCoverageRoute };
  }, [router]);

  const useLocationsRoute = useCallback(() => {
    const locationsRoute = routes.LOCATIONS_ROUTE;

    const handleLocationsRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: locationsRoute, query });
    };

    return { locationsRoute, handleLocationsRoute };
  }, [router]);

  const useAboutRoute = useCallback(() => {
    const aboutRoute = routes.ABOUT_ROUTE;

    const handleAboutRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: aboutRoute, query });
    };

    return { aboutRoute, handleAboutRoute };
  }, [router]);

  const useSupportRoute = useCallback(() => {
    const supportRoute = routes.SUPPORT_ROUTE;

    const handleSupportRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: supportRoute, query });
    };

    return { supportRoute, handleSupportRoute };
  }, [router]);

  const useTermsOfServiceRoute = useCallback(() => {
    const termsOfServiceRoute = routes.TERMS_OF_SERVICE_ROUTE;

    const handleTermsOfServiceRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: termsOfServiceRoute, query });
    };

    return { termsOfServiceRoute, handleTermsOfServiceRoute };
  }, [router]);

  const usePrivacyPolicyRoute = useCallback(() => {
    const privacyPolicyRoute = routes.PRIVACY_POLICY_ROUTE;

    const handlePrivacyPolicyRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: privacyPolicyRoute, query });
    };

    return { privacyPolicyRoute, handlePrivacyPolicyRoute };
  }, [router]);

  const useSignInRoute = useCallback(() => {
    const signInRoute = routes.SIGNIN_ROUTE;

    const handleSignInRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: signInRoute, query });
    };

    return { signInRoute, handleSignInRoute };
  }, [router]);

  const useSignUpRoute = useCallback(() => {
    const signUpRoute = routes.SIGNUP_ROUTE;

    const handleSignUpRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: signUpRoute, query });
    };

    return { signUpRoute, handleSignUpRoute };
  }, [router]);

  const useConfirmSignUpRoute = useCallback(() => {
    const confirmSignUpRoute = routes.CONFIRM_SIGNUP_ROUTE;

    const handleConfirmSignUpRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: confirmSignUpRoute, query });
    };

    return { confirmSignUpRoute, handleConfirmSignUpRoute };
  }, [router]);

  const useForgotPasswordRoute = useCallback(() => {
    const forgotPasswordRoute = routes.FORGOT_PASSWORD_ROUTE;

    const handleForgotPasswordRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: forgotPasswordRoute, query });
    };

    return { forgotPasswordRoute, handleForgotPasswordRoute };
  }, [router]);

  const useUpdatePasswordRoute = useCallback(() => {
    const updatePasswordRoute = routes.UPDATE_PASSWORD_ROUTE;

    const handleUpdatePasswordRoute = (options = {}) => {
      const { query = null } = options;
      router.push({ pathname: updatePasswordRoute, query });
    };

    return { updatePasswordRoute, handleUpdatePasswordRoute };
  }, [router]);

  const useSignOutRoute = useCallback(() => {
    const signOutRoute = routes.SIGNOUT_ROUTE;

    const handleSignOutRoute = (options = {}) => {
      const { query = null } = options;
      router.replace({ pathname: signOutRoute, query });
    };

    return { signOutRoute, handleSignOutRoute };
  }, [router]);

  const useHomeRoute = useCallback(() => {
    const homeRoute = handleNamedRoute({
      route: routes.HOME_ROUTE,
      username,
    });

    const handleHomeRoute = (options = {}) => {
      const { query = null, params = null } = options;
      router.push({
        pathname: handleNamedRoute({
          username: params?.username,
          route: homeRoute,
        }),
        query,
      });
    };

    return { homeRoute, handleHomeRoute };
  }, [router, username]);

  return {
    appUser,
    router,
    handleBack,
    handleReload,
    useSignInRoute,
    useSignUpRoute,
    useConfirmSignUpRoute,
    useUpdatePasswordRoute,
    useForgotPasswordRoute,
    useSignOutRoute,
    useIndexRoute,
    useHomeRoute,
    useRepairersProgramRoute,
    useCoverageRoute,
    useLocationsRoute,
    useAboutRoute,
    useSupportRoute,
    useTermsOfServiceRoute,
    usePrivacyPolicyRoute,
    routes,
  };
}

export function useRouteContext(appUser = null) {
  const { routeContext } = appUser ?? {};
  const isCustomer = routeContext === APP_ROUTE_CONTEXT.CUSTOMER;
  const isRepairer = routeContext === APP_ROUTE_CONTEXT.REPAIRER;
  const isManager = routeContext === APP_ROUTE_CONTEXT.MANAGER;
  return { isCustomer, isRepairer, isManager };
}

function handleNamedRoute({ username, route = null, currentStatus = null }) {
  if (!route) {
    route = '';
  }

  if (username) {
    route = route.replace('{{APP_USERNAME}}', username);
  }
  if (currentStatus) {
    route = route.replace(
      '{{APP_REPAIRS_CURRENT_STATUS}}',
      currentStatus.toLocaleLowerCase()
    );
  }

  return route;
}
