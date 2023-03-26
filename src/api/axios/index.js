// index.js

import axios from 'axios';

import { DEFAULT_API_TIMEOUT, APP_API_URL } from 'src/config';
import { getAppUserAccessToken } from 'src/utils';

export const appApi = axios.create({
  baseURL: APP_API_URL,
  timeout: DEFAULT_API_TIMEOUT,
});

appApi.interceptors.request.use((config) => {
  config = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${getAppUserAccessToken()}`,
    },
  };
  return config;
});
