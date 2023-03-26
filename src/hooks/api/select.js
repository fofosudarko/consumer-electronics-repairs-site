// enum.js

import { useCallback, useReducer, useState } from 'react';
import httpStatus from 'http-status';
import produce from 'immer';

import {
  ServiceTypeService,
  BrandService,
  GadgetService,
  AccountService,
  LocationService,
  GeneralLocationService,
  ModelService,
  RepairService,
  RepairPaymentService,
} from 'src/api/app';
import { DEFAULT_SELECT_SIZE, DEFAULT_MODELS_SELECT_SIZE } from 'src/config/';

const types = {
  SET_SERVICE_TYPES: 'SET_SERVICE_TYPES',
  SET_BRANDS: 'SET_BRANDS',
  SET_GADGETS: 'SET_GADGETS',
  SET_ACCOUNTS: 'SET_ACCOUNTS',
  SET_LOCATIONS: 'SET_LOCATIONS',
  SET_GENERAL_LOCATIONS: 'SET_GENERAL_LOCATIONS',
  SET_MODELS: 'SET_MODELS',
  SET_REPAIRS: 'SET_REPAIRS',
  SET_REPAIR_PAYMENTS: 'SET_REPAIR_PAYMENTS',
  CLEAR_SELECT_STATE: 'CLEAR_SELECT_STATE',
  SET_ERROR: 'SET_ERROR',
  SET_PROCESSING: 'SET_PROCESSING',
};

const initialState = {
  serviceTypes: null,
  brands: null,
  gadgets: null,
  accounts: null,
  locations: null,
  generalLocations: null,
  models: null,
  repairs: null,
  repairPayments: null,
  error: null,
  processing: false,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.SET_SERVICE_TYPES:
      draft.serviceTypes = action.payload;
      return;
    case types.SET_BRANDS:
      draft.brands = action.payload;
      return;
    case types.SET_GADGETS:
      draft.gadgets = action.payload;
      return;
    case types.SET_ACCOUNTS:
      draft.accounts = action.payload;
      return;
    case types.SET_LOCATIONS:
      draft.locations = action.payload;
      return;
    case types.SET_GENERAL_LOCATIONS:
      draft.generalLocations = action.payload;
      return;
    case types.SET_MODELS:
      draft.models = action.payload;
      return;
    case types.SET_REPAIRS:
      draft.repairs = action.payload;
      return;
    case types.SET_REPAIR_PAYMENTS:
      draft.repairPayments = action.payload;
      return;
    case types.SET_ERROR:
      draft.error = action.payload;
      return;
    case types.SET_PROCESSING:
      draft.processing = action.payload;
      return;
    case types.CLEAR_SELECT_STATE:
      return initialState;
    default:
      return draft;
  }
});

export function useSelectItems() {
  const [
    {
      error,
      processing,
      serviceTypes,
      brands,
      gadgets,
      accounts,
      locations,
      generalLocations,
      models,
      repairs,
      repairPayments,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const setError = useCallback((error) => {
    dispatch({ type: types.SET_ERROR, payload: error });
  }, []);
  const setProcessing = useCallback((processing) => {
    dispatch({ type: types.SET_PROCESSING, payload: processing });
  }, []);
  const setServiceTypes = useCallback((serviceTypes) => {
    dispatch({ type: types.SET_SERVICE_TYPES, payload: serviceTypes });
  }, []);
  const setBrands = useCallback((brands) => {
    dispatch({ type: types.SET_BRANDS, payload: brands });
  }, []);
  const setGadgets = useCallback((gadgets) => {
    dispatch({ type: types.SET_GADGETS, payload: gadgets });
  }, []);
  const setAccounts = useCallback((accounts) => {
    dispatch({
      type: types.SET_ACCOUNTS,
      payload: accounts,
    });
  }, []);
  const setLocations = useCallback((locations) => {
    dispatch({
      type: types.SET_LOCATIONS,
      payload: locations,
    });
  }, []);
  const setGeneralLocations = useCallback((generalLocations) => {
    dispatch({
      type: types.SET_GENERAL_LOCATIONS,
      payload: generalLocations,
    });
  }, []);
  const setModels = useCallback((models) => {
    dispatch({ type: types.SET_MODELS, payload: models });
  }, []);
  const setRepairs = useCallback((repairs) => {
    dispatch({
      type: types.SET_REPAIRS,
      payload: repairs,
    });
  }, []);
  const setRepairPayments = useCallback((repairPayments) => {
    dispatch({
      type: types.SET_REPAIR_PAYMENTS,
      payload: repairPayments,
    });
  }, []);

  const handleListServiceTypes = useCallback(
    async (options = {}) => {
      try {
        setProcessing(true);
        const { repairer = null, name, size = DEFAULT_SELECT_SIZE } = options;
        const response = await ServiceTypeService.listServiceTypes({
          name,
          repairer,
          size,
        });
        if (response && response.status === httpStatus.OK) {
          setProcessing(false);
          const serviceTypes = response.data.data;
          setServiceTypes(serviceTypes);
        }
      } catch (error) {
        setProcessing(false);
        setError(error);
      }
    },
    [setProcessing, setServiceTypes, setError]
  );

  const handleListBrands = useCallback(
    async (options = {}) => {
      try {
        setProcessing(true);
        const {
          repairer = null,
          name,
          gadget = null,
          size = DEFAULT_SELECT_SIZE,
        } = options;
        const response = await BrandService.listBrands({
          repairer,
          name,
          gadget,
          size,
        });
        if (response && response.status == httpStatus.OK) {
          setProcessing(false);
          const brands = response.data.data;
          setBrands(brands);
        }
      } catch (error) {
        setError(error);
      }
    },
    [setProcessing, setBrands, setError]
  );

  const handleListGadgets = useCallback(
    async (options = {}) => {
      try {
        setProcessing(true);
        const { repairer = null, name, size = DEFAULT_SELECT_SIZE } = options;
        const response = await GadgetService.listGadgets({
          name,
          repairer,
          size,
        });
        if (response && response.status == httpStatus.OK) {
          setProcessing(false);
          const gadgets = response.data.data;
          setGadgets(gadgets);
        }
      } catch (error) {
        setProcessing(false);
        setError(error);
      }
    },
    [setError, setGadgets, setProcessing]
  );

  const handleListAccounts = useCallback(
    async (options = {}) => {
      try {
        setProcessing(true);
        const {
          generalLocation,
          username,
          brand,
          gadget,
          emailAddress,
          mobileNumber,
          role,
          serviceType,
          model,
          location,
          status,
          size = DEFAULT_SELECT_SIZE,
        } = options;
        const response = await AccountService.listAccounts({
          generalLocation,
          username,
          brand,
          gadget,
          emailAddress,
          mobileNumber,
          role,
          serviceType,
          location,
          model,
          size,
          status,
        });
        if (response && response.status == httpStatus.OK) {
          setProcessing(false);
          setAccounts(response.data.data);
        }
      } catch (error) {
        setProcessing(false);
        setError(error);
      }
    },
    [setProcessing, setAccounts, setError]
  );

  const handleListLocations = useCallback(
    async (options = {}) => {
      try {
        setProcessing(true);
        const {
          account,
          repairer,
          customer,
          size = DEFAULT_SELECT_SIZE,
        } = options;
        const response = await LocationService.listLocations({
          size,
          account: account ?? repairer ?? customer,
        });
        if (response && response.status == httpStatus.OK) {
          setProcessing(false);
          const locations = response.data.data;
          setLocations(locations);
        }
      } catch (error) {
        setProcessing(false);
        setError(error);
      }
    },
    [setError, setLocations, setProcessing]
  );

  const handleListGeneralLocations = useCallback(
    async (options = {}) => {
      try {
        setProcessing(true);
        const { size = DEFAULT_SELECT_SIZE } = options;
        const response = await GeneralLocationService.listGeneralLocations({
          size,
        });
        if (response && response.status == httpStatus.OK) {
          setProcessing(false);
          setGeneralLocations(response.data.data);
        }
      } catch (error) {
        setProcessing(false);
        setError(error);
      }
    },
    [setError, setGeneralLocations, setProcessing]
  );

  const handleListModels = useCallback(
    async (options = {}) => {
      try {
        setProcessing(true);
        const {
          repairer = null,
          brand = null,
          name,
          gadget = null,
          size = DEFAULT_MODELS_SELECT_SIZE,
        } = options;
        const response = await ModelService.listModels({
          brand,
          repairer,
          name,
          gadget,
          size,
        });
        if (response && response.status === httpStatus.OK) {
          setProcessing(false);
          const models = response.data.data;
          setModels(models);
        }
      } catch (error) {
        setProcessing(false);
        setError(error);
      }
    },
    [setProcessing, setModels, setError]
  );

  const handleListRepairs = useCallback(
    async (options = {}) => {
      try {
        setProcessing(true);
        const {
          repairer,
          customer,
          currentStatus,
          uid,
          status,
          size = DEFAULT_SELECT_SIZE,
        } = options;
        const response = await RepairService.listRepairs({
          repairer,
          customer,
          currentStatus,
          uid,
          status,
          size,
        });
        if (response && response.status == httpStatus.OK) {
          setProcessing(false);
          setRepairs(response.data.data);
        }
      } catch (error) {
        setProcessing(false);
        setError(error);
      }
    },
    [setProcessing, setRepairs, setError]
  );

  const handleListRepairPayments = useCallback(
    async (options = {}) => {
      try {
        setProcessing(true);
        const {
          repairer,
          customer,
          paymentProvider,
          transactionId,
          referenceId,
          size = DEFAULT_SELECT_SIZE,
        } = options;
        const response = await RepairPaymentService.listRepairPayments({
          repairer,
          customer,
          paymentProvider,
          transactionId,
          referenceId,
          size,
        });
        if (response && response.status == httpStatus.OK) {
          setProcessing(false);
          setRepairPayments(response.data.data);
        }
      } catch (error) {
        setProcessing(false);
        setError(error);
      }
    },
    [setProcessing, setRepairPayments, setError]
  );

  return {
    handleListServiceTypes,
    serviceTypes,
    setServiceTypes,
    handleListBrands,
    brands,
    setBrands,
    handleListGadgets,
    gadgets,
    setGadgets,
    handleListAccounts,
    accounts,
    setAccounts,
    handleListLocations,
    locations,
    setLocations,
    handleListGeneralLocations,
    generalLocations,
    setGeneralLocations,
    handleListModels,
    models,
    setModels,
    handleListRepairs,
    repairs,
    setRepairs,
    handleListRepairPayments,
    repairPayments,
    setRepairPayments,
    error,
    setError,
    processing,
    setProcessing,
  };
}

export function useSearchItems() {
  const [isSearch, setIsSearch] = useState(false);
  const handleSearch = useCallback((isSearch) => {
    setIsSearch(isSearch);
  }, []);
  return { isSearch, setIsSearch, handleSearch };
}
