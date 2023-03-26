// auth.js

import { useEffect, useState, useCallback, useContext } from 'react';
import httpStatus from 'http-status';

import { ACCOUNT_STATUS } from 'src/config';
import { isAxiosError } from 'src/utils';
import useRoutes from './routes';
import useNotificationHandler from './notification';
import { useRedirectRoute } from './page';
import { useAuthStore } from 'src/stores/auth';
import { useDashboardStore } from 'src/stores/dashboard';

import { AppContext } from 'src/context/app';

export function useAuth(options = {}) {
  const { user = null } = options;
  const { appUser, appUserRegistration, confirmAccountActivationCode } =
    useAuthStore((state) => state);
  const { useConfirmSignUpRoute } = useRoutes();
  const { handleConfirmSignUpRoute } = useConfirmSignUpRoute();
  const handleSignOut = useSignOut();

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!appUser) {
      (async () => {
        try {
          if (appUserRegistration && !confirmAccountActivationCode) {
            handleConfirmSignUpRoute({
              query: { action: 'resend-confirmation-code' },
            });
          } else {
            await handleSignOut();
          }
        } catch (error) {
          setError(error);
        }
      })();
    } else if (
      user &&
      appUser?.account &&
      appUser.account.username !== user &&
      !appUser?.accountUpdate
    ) {
      (async () => {
        await handleSignOut();
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appUser, appUserRegistration]);

  return { error, appUser };
}

export function useSignOut() {
  const { clearAppState } = useContext(AppContext);
  const { handleSignInRoute } = useRoutes().useSignInRoute();
  const handleNotification = useNotificationHandler();
  const clearAuthState = useAuthStore((state) => state.clearAuthState);
  const clearDashboardState = useDashboardStore(
    (state) => state.clearDashboardState
  );

  const handleSignOut = useCallback(async () => {
    try {
      handleSignInRoute();
    } catch (error) {
      handleNotification(error);
    }

    clearAuthState();
    clearDashboardState();
    clearAppState();
  }, [
    clearAppState,
    clearAuthState,
    clearDashboardState,
    handleNotification,
    handleSignInRoute,
  ]);

  return handleSignOut;
}

export function useHomeRedirect() {
  const appUser = useAuthStore((state) => state.appUser);
  const {
    handleRedirectRoute,
    error: redirectRouteError,
    setError: setRedirectRouteError,
  } = useRedirectRoute({ appUser });
  const handleNotification = useNotificationHandler();

  useEffect(() => {
    if (redirectRouteError) {
      handleNotification(redirectRouteError);
    }

    return () => {
      setRedirectRouteError(null);
    };
  }, [handleNotification, redirectRouteError, setRedirectRouteError]);

  useEffect(() => {
    if (
      appUser?.account &&
      appUser.account.status !== ACCOUNT_STATUS.UNCONFIRMED
    ) {
      handleRedirectRoute({ account: appUser.account });
    }
  }, [appUser, handleRedirectRoute]);
}

export function useForceSignOut() {
  const handleSignOut = useSignOut();

  const handleForceSignOut = useCallback(
    (error = null) => {
      if (
        error &&
        isAxiosError(error) &&
        error.response.status === httpStatus.FORBIDDEN
      ) {
        handleSignOut();
      }
    },
    [handleSignOut]
  );

  return handleForceSignOut;
}

export function usePermissions(options = {}) {
  const { appUser = null } = options;
  const {
    canSwitchToCustomer,
    canSwitchToRepairer,
    canManageSystem,
    setCanManageSystem: _setCanManageSystem,
    setCanSwitchToCustomer: _setCanSwitchToCustomer,
    setCanSwitchToRepairer: _setCanSwitchToRepairer,
  } = useAuthStore((state) => state);

  const setCanSwitchToCustomer = useCallback(
    (canSwitchToCustomer) => {
      _setCanSwitchToCustomer(canSwitchToCustomer);
    },
    [_setCanSwitchToCustomer]
  );
  const setCanSwitchToRepairer = useCallback(
    (canSwitchToRepairer) => {
      _setCanSwitchToRepairer(canSwitchToRepairer);
    },
    [_setCanSwitchToRepairer]
  );
  const setCanManageSystem = useCallback(
    (canManageSystem) => {
      _setCanManageSystem(canManageSystem);
    },
    [_setCanManageSystem]
  );

  return {
    canSwitchToCustomer,
    canSwitchToRepairer,
    canManageSystem,
    setCanManageSystem,
    setCanSwitchToCustomer,
    setCanSwitchToRepairer,
  };
}
