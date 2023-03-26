// index.js

import { nanoid } from 'nanoid';
import * as _round from 'lodash.round';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import crypto from 'crypto';

import { useAuthStore } from 'src/stores/auth';
import {
  ZEROES_WITHIN_PHONE_NUMBER_REGEX,
  VALID_PHONE_NUMBER_REGEX,
} from 'src/config';

dayjs.extend(relativeTime);

function handleNotification(error = null) {
  console.error(error);
  throw error;
}

function alertWebError(error = null) {
  console.error(error);

  if (isAxiosError(error)) {
    const response = error.response;

    if (response) {
      if (isCKYCError(response.data)) {
        alert(response.data.possibleCause);
      } else {
        alert(
          response.data.error
            ? response.data.error.message
            : 'Oops, Something happened. Please check later.'
        );
      }
    } else {
      alert('Oops, Something happened. Please check later.');
    }
  } else {
    if (isCKYCError(error)) {
      alert(error?.possibleCause);
    } else {
      alert(error?.message);
    }
  }
}

function readErrorMessage(error = null) {
  let errorMessage;

  console.error(error);

  if (isAxiosError(error)) {
    const response = error.response;

    if (response) {
      if (isCKYCError(response.data)) {
        errorMessage = response.data.possibleCause;
      } else {
        errorMessage = response.data.error
          ? response.data.error.message
          : 'Oops, Something happened. Please check later.';
      }
    } else {
      errorMessage = 'Oops, Something happened. Please check later.';
    }
  } else {
    if (isCKYCError(error)) {
      errorMessage = error?.possibleCause;
    } else {
      errorMessage = error?.message;
    }
  }

  return errorMessage;
}

function isCKYCError(data = null) {
  return data && (data.exception || data.responseCode);
}

function hasUserSignedUp(UserStatus = null) {
  return UserStatus && ['CONFIRMED'].includes(UserStatus);
}

function createSecretHash({ secret = null, data = null }) {
  if (!(secret && data)) {
    return '';
  }

  return crypto.createHmac('sha256', secret).update(data).digest('base64');
}

function getAppUserAccessToken() {
  const appUserAccessToken = useAuthStore.getState();

  if (!appUserAccessToken) {
    return null;
  }

  return appUserAccessToken.account.token || '';
}

function getFolders({ userId = null, rootFolder = null }) {
  if (!userId) {
    userId = '';
  }

  if (!rootFolder) {
    rootFolder = '';
  }

  const userFolder = `${userId}`;
  const bucketFolder = `${rootFolder}/${userId}`;

  return [bucketFolder, userFolder];
}

function humanizeDate(date = null) {
  let humanizedDate = '';

  if (!date || !(date instanceof Date)) {
    return humanizedDate;
  }

  humanizedDate = new Date(date);

  return humanizedDate.toUTCString();
}

function humanizeTime(time = null) {
  let humanizedTime = '';

  if (!time) {
    return humanizedTime;
  }

  time = parseFloat(time);
  let quotient,
    i = 0;

  const seconds = 1,
    minutes = 60 * seconds,
    hours = 60 * minutes,
    days = 24 * hours,
    years = 365 * days,
    divisors = [years, days, hours, minutes, seconds],
    unitsFormatMore = ['years', 'days', 'hours', 'minutes', 'seconds'],
    unitsFormatOne = ['year', 'day', 'hour', 'minute', 'second'],
    times = [];

  for (const divisor of divisors) {
    quotient = Math.floor(time / divisor);
    times.push({
      units: quotient <= 1 ? unitsFormatOne[i] : unitsFormatMore[i],
      quotient,
    });
    time = time % divisor;
    i++;
  }

  times.push({ units: 'ms', quotient: _round(time * 1000) });

  if (times.length) {
    humanizedTime = times.reduce((acc, x) => {
      if (x.quotient !== 0) {
        acc.push(`${x.quotient} ${x.units}`);
      }
      return acc;
    }, []);
  }

  return Array.isArray(humanizedTime) ? humanizedTime.join(', ') : '';
}

function getId() {
  return nanoid();
}

function removeForwardSlashes(string = null) {
  if (!string) {
    return string;
  }

  return string.replace(/^.+\//g, '');
}

function convertBytesToNearestForm(value = null) {
  let nearestForm = '';

  if (!value) {
    return nearestForm;
  }

  value = parseInt(value);
  nearestForm = null;
  let quotient,
    i = 0;

  const bytes = 1,
    kilobytes = 1024 * bytes,
    megabytes = 1024 * kilobytes,
    gigabytes = 1024 * megabytes,
    terabytes = 1024 * gigabytes,
    divisors = [terabytes, gigabytes, megabytes, kilobytes, bytes],
    unitsFormat = ['TB', 'GB', 'MB', 'KB', 'B'];

  for (const divisor of divisors) {
    quotient = _round(value / divisor, 1);

    if (quotient >= 1) {
      nearestForm = {};
      nearestForm.units = unitsFormat[i];
      nearestForm.quotient = quotient;
      break;
    }

    i++;
  }

  return nearestForm ? `${nearestForm.quotient} ${nearestForm.units}` : '';
}

function isVideoCaptureSupported() {
  if (!navigator) {
    return false;
  }

  return 'mediaDevices' in navigator;
}

function truncateString({ limit = 32, string = null, position = 'middle' }) {
  if (!string) {
    return '';
  }

  if (string.length <= limit) {
    return string;
  }

  const parts = 2,
    quotient = Math.floor(limit / parts);

  if (position === 'middle') {
    string =
      string.substring(0, quotient) +
      '...' +
      string.substring(string.length - quotient, string.length);
  } else if (position === 'end') {
    string = string.substring(0, string.length - quotient) + '...';
  } else if (position === 'start') {
    string = '...' + string.substring(string.length - quotient);
  }

  return string;
}

function convertDatePropertiesInResponseToISOString({
  response = null,
  properties,
}) {
  if (!response) {
    return response;
  }

  if (!properties || !Array.isArray(properties)) {
    return response;
  }

  for (const property of properties) {
    if ([property] in response) {
      if (response[property] instanceof Date) {
        response[property] = response[property].toISOString();
      }
    }
  }

  return response;
}

function transformS3ObjectResponse(options = {}) {
  return options;
}

function convertValueToDurationUnit({ durationUnit = null, value = null }) {
  let conversion = -1;

  if (!durationUnit || !value) {
    return conversion;
  }

  switch (durationUnit) {
    case 'SECONDS':
      conversion = value;
      break;
    case 'MINUTES':
      conversion = value * 60;
      break;
    case 'HOURS':
      conversion = value * 60 * 60;
      break;
    case 'DAYS':
      conversion = value * 24 * 60 * 60;
      break;
    case 'WEEKS':
      conversion = value * 7 * 24 * 60 * 60;
      break;
    case 'MONTHS':
      conversion = value * 30 * 24 * 60 * 60;
      break;
    case 'YEARS':
      conversion = value * 12 * 30 * 24 * 60 * 60;
      break;
  }

  return conversion;
}

function convertDurationUnitToValue({ durationUnit = null, value = null }) {
  let conversion = -1;

  if (!durationUnit || !value) {
    return conversion;
  }

  switch (durationUnit) {
    case 'SECONDS':
      conversion = value;
      break;
    case 'MINUTES':
      conversion = value / 60;
      break;
    case 'HOURS':
      conversion = value / (60 * 60);
      break;
    case 'DAYS':
      conversion = value / (24 * 60 * 60);
      break;
    case 'WEEKS':
      conversion = value / (7 * 24 * 60 * 60);
      break;
    case 'MONTHS':
      conversion = value / (30 * 24 * 60 * 60);
      break;
    case 'YEARS':
      conversion = value / (12 * 30 * 24 * 60 * 60);
      break;
  }

  return conversion;
}

function getEndTime({ startTime = null, duration = null }) {
  let endTime = null;

  if (!startTime || !duration) {
    return endTime;
  }

  startTime = new Date(startTime).getTime() * 0.001;
  endTime = startTime + duration;

  return new Date(endTime * 1000);
}

function convertDateToUTCString(date = null) {
  let conversion = '';

  if (date instanceof Date) {
    conversion = date.toUTCString();
  } else if (typeof date === 'string' || typeof date === 'number') {
    conversion = new Date(date).toUTCString();
  }

  return conversion;
}

function convertDateToISOString(date = null, removeZ = true) {
  let conversion = '';

  if (date instanceof Date) {
    conversion = date.toISOString();
  } else if (typeof date === 'string' || typeof date === 'number') {
    conversion = new Date(date).toISOString();
  }

  return removeZ ? conversion.replace('Z', '') : conversion;
}

function convertToLowerCase(string = null) {
  return string && typeof string === 'string' ? string.toLocaleLowerCase() : '';
}

function getRelativeTime(date = null) {
  return dayjs(date).fromNow();
}

function isAxiosError(error = null) {
  return !!error?.response;
}

function removeZeroesWithinPhoneNumber(phoneNumber = '') {
  if (!phoneNumber || typeof phoneNumber !== 'string') {
    return '';
  }

  const matches = phoneNumber.match(ZEROES_WITHIN_PHONE_NUMBER_REGEX);

  if (matches?.length === 4) {
    phoneNumber = matches[1] + matches[3];
  }

  return phoneNumber;
}

function isValidPhoneNumber(phoneNumber = null) {
  if (!phoneNumber) {
    return false;
  }

  return phoneNumber.match(VALID_PHONE_NUMBER_REGEX);
}

function prependPlusToPhoneNumber(phoneNumber = null) {
  const plus = '+';

  if (!phoneNumber) {
    return phoneNumber;
  }

  if (!phoneNumber.match(/^\+/)) {
    phoneNumber = plus + phoneNumber;
  }

  return phoneNumber;
}

function getTimestamp(date = null) {
  return date ? new Date(date).getTime() : null;
}

function isDateBefore({ firstDate = null, secondDate = null }) {
  if (!(firstDate instanceof Date || secondDate instanceof Date)) {
    return false;
  }

  return firstDate.getTime() < secondDate.getTime();
}

function isDateAfter({ firstDate = null, secondDate = null }) {
  if (!(firstDate instanceof Date || secondDate instanceof Date)) {
    return false;
  }

  return firstDate.getTime() > secondDate.getTime();
}

function getDurationContext(context = null) {
  if (!context) {
    return {};
  }

  const {
    startedOn = null,
    duration = null,
    endedOn: _endedOn = null,
    expiredOn = null,
  } = context;

  const isInProgress = isDateAfter({
    firstDate: new Date(),
    secondDate: new Date(startedOn),
  });
  const endedOn = _endedOn
    ? _endedOn
    : getEndTime({ startTime: startedOn, duration });
  const hasStarted = startedOn
      ? isDateAfter({
          firstDate: new Date(),
          secondDate: new Date(startedOn),
        })
      : false,
    hasEnded = endedOn
      ? isDateAfter({
          firstDate: new Date(),
          secondDate: new Date(endedOn),
        })
      : null,
    hasExpired = expiredOn
      ? isDateAfter({
          firstDate: new Date(),
          secondDate: new Date(expiredOn),
        })
      : false;

  return {
    isInProgress,
    endedOn,
    startedOn,
    hasStarted,
    hasEnded,
    hasExpired,
    expiredOn,
  };
}

function allowCors(fn) {
  return async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    return await fn(req, res);
  };
}

function generateCipher(bytesSize = 20, format = 'base64') {
  return crypto
    .randomBytes(bytesSize)
    .toLocaleString(format)
    .toLocaleUpperCase();
}

function generateUUID() {
  return crypto.randomUUID();
}

function generateFullname({ fullname, firstname, middlename, lastname }) {
  let newFullname = '';
  let oldFirstname, oldMiddlename, oldLastname;

  if (fullname) {
    const splittedNames = fullname.split(' ');
    if (splittedNames?.length === 2) {
      [oldFirstname, oldLastname] = splittedNames;
    } else {
      [oldFirstname, oldMiddlename, oldLastname] = splittedNames;
    }
  }

  if (firstname && typeof firstname === 'string') {
    newFullname = firstname;
  } else if (firstname === null || firstname === undefined) {
    if (oldFirstname) {
      newFullname = oldFirstname;
    }
  }

  if (middlename && typeof middlename === 'string') {
    newFullname = `${newFullname} ${middlename}`;
  } else if (middlename === null || middlename === undefined) {
    if (oldMiddlename) {
      newFullname = `${newFullname} ${oldMiddlename}`;
    }
  }

  if (lastname && typeof lastname === 'string') {
    newFullname = `${newFullname} ${lastname}`;
  } else if (lastname === null || lastname === undefined) {
    if (oldLastname) {
      newFullname = `${newFullname} ${oldLastname}`;
    }
  }

  return newFullname.length === 0 ? null : newFullname;
}

function convertToDate(dateString) {
  return dateString === undefined || typeof dateString !== 'string'
    ? null
    : new Date(dateString);
}

function getAccountResetActivationCodeKeys({ channel, receiver }) {
  const app = process.env.APP_NAME || '';
  const tokenKey = `${app}-account-reset-activation-code-${channel}-${receiver}-token`,
    secretKey = `${app}-account-reset-activation-code-${channel}-${receiver}-secret`;
  return { tokenKey, secretKey };
}

function getAccountActivationCodeKeys({ channel, receiver }) {
  const app = process.env.APP_NAME || '';
  const tokenKey = `${app}-account-activation-code-${channel}-${receiver}-token`,
    secretKey = `${app}-account-activation-code-${channel}-${receiver}-secret`;
  return { tokenKey, secretKey };
}

function isTrue(value = null) {
  return (typeof value !== 'string' ? value?.toString() : value) === 'true';
}

function convertToNumber(value = null, isFloat = false) {
  const result = isFloat ? Number.parseFloat(value) : Number.parseInt(value);
  return !isNaN(result) ? result : undefined;
}

function isDev() {
  return process.env.NODE_ENV === 'development';
}

function round(number, precision = 3) {
  return _round(number, precision);
}

function humanizeString({
  string: _string = null,
  toUpperCase = false,
  toLowerCase = false,
  capitalize = false,
  delimiter = /_/g,
  replacementDelimiter = ' ',
  firstWord = false,
}) {
  if (!_string) {
    return '';
  }

  let strings = _string
    .replace(delimiter, replacementDelimiter)
    .split(replacementDelimiter);
  let stringArray = [];

  for (const string of strings) {
    if (toUpperCase) {
      stringArray.push(string.toLocaleUpperCase());
    } else if (toLowerCase) {
      stringArray.push(string.toLocaleLowerCase());
    } else if (capitalize) {
      stringArray.push(
        string.charAt(0).toLocaleUpperCase() +
          string.substring(1).toLocaleLowerCase()
      );
    } else {
      stringArray.push(string);
    }
  }

  if (capitalize && firstWord) {
    const previousStringArray = stringArray.slice();
    stringArray = [];
    previousStringArray.slice(1).forEach((string) => {
      stringArray.push(string.toLocaleLowerCase());
    });
    stringArray.unshift(previousStringArray[0]);
  }

  return stringArray.join(replacementDelimiter);
}

function extractDateString(dateString = null) {
  if (!dateString) {
    return '';
  }

  const match = dateString.match(/(\d{4}-\d{2}-\d{2})/i);

  return match ? match[0] : '';
}

function getSubstring({
  string = null,
  length = 8,
  toLowerCase = false,
  toUpperCase = false,
}) {
  if (!string || typeof string !== 'string') {
    return string;
  }

  string = string.replace(/-/g, '').substring(0, length);

  if (toLowerCase) {
    string = string.toLocaleLowerCase();
  }

  if (toUpperCase) {
    string = string.toLocaleUpperCase();
  }

  return string;
}

function convertToBase64(string) {
  return Buffer.from(string).toString('base64');
}

function convertFromBase64(base64, isRawData = false) {
  return isRawData
    ? Buffer.from(base64, 'base64')
    : Buffer.from(base64, 'base64').toString();
}

function getTransactionId() {
  function addZeroPadding(value) {
    return !value ? value : `${value <= 9 ? `0${value}` : `${value}`}`;
  }
  const date = new Date();
  return `${date.getFullYear()}${addZeroPadding(
    date.getMonth() + 1
  )}${addZeroPadding(date.getDate())}${addZeroPadding(
    date.getUTCHours()
  )}${addZeroPadding(date.getUTCMinutes())}${addZeroPadding(
    date.getUTCSeconds()
  )}${addZeroPadding(date.getUTCMilliseconds())}`;
}

function getReferenceId() {
  return generateUUID();
}

function convertToFloat(value) {
  return Number.parseFloat(value);
}

function constructS3Endpoint(endpointUrl) {
  const endpoint = new URL(endpointUrl) ?? null;
  return {
    hostname: endpoint?.hostname,
    protocol: endpoint?.protocol,
    port: endpoint?.port,
    query: endpoint?.query,
    path: endpoint?.path,
  };
}

export {
  handleNotification,
  hasUserSignedUp,
  createSecretHash,
  getAppUserAccessToken,
  getFolders,
  alertWebError,
  humanizeDate,
  humanizeTime,
  getId,
  removeForwardSlashes,
  convertBytesToNearestForm,
  isVideoCaptureSupported,
  truncateString,
  convertDatePropertiesInResponseToISOString,
  transformS3ObjectResponse,
  convertValueToDurationUnit,
  convertDurationUnitToValue,
  convertDateToUTCString,
  getEndTime,
  convertToLowerCase,
  getRelativeTime,
  convertDateToISOString,
  isCKYCError,
  isAxiosError,
  removeZeroesWithinPhoneNumber,
  isValidPhoneNumber,
  prependPlusToPhoneNumber,
  readErrorMessage,
  getTimestamp,
  isDateBefore,
  isDateAfter,
  getDurationContext,
  round,
  allowCors,
  generateCipher,
  generateFullname,
  convertToDate,
  getAccountResetActivationCodeKeys,
  getAccountActivationCodeKeys,
  isTrue,
  convertToNumber,
  isDev,
  generateUUID,
  humanizeString,
  extractDateString,
  getSubstring,
  convertToBase64,
  convertFromBase64,
  getReferenceId,
  getTransactionId,
  convertToFloat,
  constructS3Endpoint,
};
