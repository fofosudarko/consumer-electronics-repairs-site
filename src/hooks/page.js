// page.js
import { useMemo, useCallback, useState, useRef } from 'react';

import {
  PERSONALITY_TYPES,
  ROLE_TYPE,
  APP_ROUTE_CONTEXT,
  PAGER,
} from 'src/config';

import { useAuthStore } from 'src/stores/auth';

import useRoutes from './routes';
import { useRegisterAccountRole } from './api';

export function usePersonalityHomeRoute({ personalityType = null }) {
  const [error, setError] = useState(null);
  const { useCustomerHomeRoute, useRepairerHomeRoute } = useRoutes();
  const { handleCustomerHomeRoute } = useCustomerHomeRoute();
  const { handleRepairerHomeRoute } = useRepairerHomeRoute();

  const handlePersonalityHomeRoute = useMemo(() => {
    let handlePersonalityHomeRoute;
    switch (personalityType) {
      case PERSONALITY_TYPES.customer.type:
        handlePersonalityHomeRoute = handleCustomerHomeRoute;
        break;
      case PERSONALITY_TYPES.repairer.type:
        handlePersonalityHomeRoute = handleRepairerHomeRoute;
        break;
      default:
        handlePersonalityHomeRoute;
    }
    return handlePersonalityHomeRoute;
  }, [handleCustomerHomeRoute, handleRepairerHomeRoute, personalityType]);

  return {
    handlePersonalityHomeRoute,
    error,
    setError,
  };
}

export function useRedirectRoute(options = {}) {
  const { appUser = null, personalityType = null } = options;
  const setAppUser = useAuthStore((state) => state.setAppUser);
  const [error, setError] = useState(null);

  const handleRedirectRoute = useCallback(
    ({ account = null }) => {
      try {
        let {
            roles = null,
            user = null,
            locationsCount = null,
          } = account ?? {},
          handleHomeRoute,
          hasRole = false;
        if (roles) {
          roles = roles.map((role) => role.name);
          if (roles.includes(ROLE_TYPE.ROLE_REPAIRER)) {
            handleHomeRoute = () => {
              setAppUser({
                ...appUser,
                routeContext: APP_ROUTE_CONTEXT.REPAIRER,
              });
            };
            hasRole = true;
          } else if (roles.includes(ROLE_TYPE.ROLE_CUSTOMER)) {
            handleHomeRoute = () => {
              setAppUser({
                ...appUser,
                routeContext: APP_ROUTE_CONTEXT.CUSTOMER,
              });
            };
            hasRole = true;
          }
        }

        if (hasRole && handleHomeRoute) {
          handleHomeRoute();
        }
      } catch (error) {
        setError(error);
      }
    },
    [appUser, setAppUser]
  );

  return {
    error,
    setError,
    handleRedirectRoute,
  };
}

export function useSkipWelcomeProcess({ personalityType, appUser }) {
  const { handlePersonalityHomeRoute } = usePersonalityHomeRoute({
    appUser,
    personalityType,
  });

  const handleSkipWelcomeProcess = useCallback(async () => {
    handlePersonalityHomeRoute();
  }, [handlePersonalityHomeRoute]);

  return { handleSkipWelcomeProcess };
}

export function useSelectAccountRole({ personalityType, appUser }) {
  const { account } = appUser ?? {};
  const { handleRegisterAccountRole, error, setError } = useRegisterAccountRole(
    { appUser }
  );

  const handleSelectAccountRole = useCallback(async () => {
    let role;
    switch (personalityType) {
      case PERSONALITY_TYPES.customer.type:
        role = { role: ROLE_TYPE.ROLE_CUSTOMER };
        break;
      case PERSONALITY_TYPES.repairer.type:
        role = { role: ROLE_TYPE.ROLE_REPAIRER };
        break;
      default:
        role = null;
    }
    role && (await handleRegisterAccountRole({ account, body: role }));
  }, [account, handleRegisterAccountRole, personalityType]);

  return { handleSelectAccountRole, error, setError };
}

export function usePager(options = {}) {
  const {
    dispatch,
    page: _page,
    endPaging: _endPaging,
    setPager,
    key,
  } = options;

  if (dispatch === undefined || typeof dispatch !== 'function') {
    throw new Error('dispatch must be a function');
  }

  if (setPager === undefined || typeof setPager !== 'function') {
    throw new Error('setPager must be a function');
  }

  if (key === undefined || typeof key !== 'object') {
    throw new Error('key must be a object');
  }

  const pageRef = useRef(_page);

  const isPageNull = _page === null || _page === undefined;

  let page, currentPage, endPaging;
  page = isPageNull ? 1 : _page;
  currentPage = isPageNull ? 1 : pageRef.current;
  endPaging = isPageNull ? false : _endPaging;

  const handleInitializePager = useCallback(() => {
    dispatch(
      setPager({
        [key.name]: key.value,
        page: 1,
        pagerType: PAGER.PAGE,
      })
    );
    dispatch(
      setPager({
        [key.name]: key.value,
        endPaging: false,
        pagerType: PAGER.END_PAGING,
      })
    );
  }, [dispatch, key, setPager]);

  const handleEndPaging = useCallback(() => {
    dispatch(
      setPager({
        [key.name]: key.value,
        pagerType: PAGER.END_PAGING,
        endPaging: true,
      })
    );
  }, [dispatch, key.name, key.value, setPager]);

  const setPage = useCallback(
    (page) => {
      dispatch(
        setPager({ pagerType: PAGER.PAGE, page, [key.name]: key.value })
      );
    },
    [dispatch, key.name, key.value, setPager]
  );

  const handleResetPage = useCallback(() => {
    dispatch(
      setPager({
        [key.name]: key.value,
        pagerType: PAGER.RESET_PAGE,
      })
    );
  }, [dispatch, key.name, key.value, setPager]);

  return {
    page,
    currentPage,
    endPaging,
    isPageNull,
    pageRef,
    handleInitializePager,
    handleEndPaging,
    setPage,
    handleResetPage,
  };
}
