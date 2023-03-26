// got-backend.js

import got from 'got';
import * as https from 'https';

import {
  DEFAULT_API_TIMEOUT,
  MTN_MOMO_API_URL,
  MTN_MOMO_SUBSCRIPTION_PRIMARY_KEY,
  MTN_MOMO_API_TARGET_ENVIRONMENT,
} from 'src/config/backend';

https.globalAgent.options.rejectUnauthorized = false;

export const momoApi = got.extend({
  prefixUrl: MTN_MOMO_API_URL,
  timeout: { request: DEFAULT_API_TIMEOUT },
  /*headers: {
    'Ocp-Apim-Subscription-Key': MTN_MOMO_SUBSCRIPTION_PRIMARY_KEY,
    'X-Target-Environment': MTN_MOMO_API_TARGET_ENVIRONMENT,
    Authorization:
      'Bearer NDBlOWM3NWQtMzY0MS00NThlLTk3YTAtOTQxODlhYTQ5MjZlOmRhMWYwOWQyODgyOTRjYjM4MTc0YjNjMzJhZTQ1Nzkx',
  },*/
});
