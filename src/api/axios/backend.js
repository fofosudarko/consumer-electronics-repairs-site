// axios.js

import * as axios from 'axios';
import * as https from 'https';

import {
  DEFAULT_API_TIMEOUT,
  MTN_MOMO_API_URL,
  MTN_MOMO_SUBSCRIPTION_PRIMARY_KEY,
  MTN_MOMO_API_TARGET_ENVIRONMENT,
} from 'src/config/backend';

export const momoApi = axios.create({
  baseURL: MTN_MOMO_API_URL,
  timeout: DEFAULT_API_TIMEOUT,
});

https.globalAgent.options.rejectUnauthorized = false;

momoApi.defaults.headers.common['Ocp-Apim-Subscription-Key'] =
  MTN_MOMO_SUBSCRIPTION_PRIMARY_KEY;
momoApi.defaults.headers.common['X-Target-Environment'] =
  MTN_MOMO_API_TARGET_ENVIRONMENT;
