// validators.js

import * as yup from 'yup';

const USERNAME_INPUT_VALIDATION = {
  regex: {
    value: /^[_\w+][_\w\d]+$/,
    errorMessage:
      'Invalid username. Must be alphanumeric characters and underscore.',
  },
  length: { max: 50, min: 5 },
  required: {
    errorMessage: 'Username required',
  },
};

const PASSWORD_INPUT_VALIDATION = {
  regex: {
    value: /^[\W\w\d\D]+$/,
    errorMessage:
      'Invalid password. Must be alphanumeric characters and any special character.',
  },
  length: { max: 20, min: 8 },
  required: {
    errorMessage: 'Password required',
  },
};

const EMAIL_ADDRESS_INPUT_VALIDATION = {
  regex: {
    value: undefined,
    errorMessage: 'Invalid email address',
  },
  required: {
    errorMessage: 'Email address required',
  },
};

const EMAIL_MESSAGE_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Email message required',
  },
  string: {
    errorMessage: 'Message must be a string',
  },
};

const CONFIRMATION_CODE_INPUT_VALIDATION = {
  regex: {
    value: /^[\d]+$/,
    errorMessage: 'Invalid confirmation code. Must be numeric characters.',
  },
  length: { max: 6, min: 6 },
  required: {
    errorMessage: 'Confirmation code required',
  },
};

const CLIENT_TYPE_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Client type required',
  },
};

const USER_ID_INPUT_VALIDATION = {
  required: {
    errorMessage: 'User ID required',
  },
  number: {
    errorMessage: 'User ID must be a number',
  },
};

const MEDIA_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Media required',
  },
};

const GENERAL_NAME_INPUT_VALIDATION = {
  regex: {
    value: /^[_\w][\w\d\s-'"]+$/,
    errorMessage:
      'Invalid name. Must be alphanumeric characters with either spaces or special characters.',
  },
  length: { max: 100, min: 2 },
  required: {
    errorMessage: 'Name required',
  },
};

const START_TIME_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Start time required',
  },
};

const DURATION_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Duration required',
  },
  number: {
    errorMessage: 'Duration must be a number',
  },
};

const DURATION_UNIT_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Duration unit required',
  },
};

const TARGET_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Target required',
  },
  number: {
    errorMessage: 'Target must be a number',
  },
};

const TARGET_UNIT_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Target unit required',
  },
};

const ACTIVITY_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Activity required',
  },
};

const INVITATION_RECIPIENT_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Invitation recipient required',
  },
};

const INVITATION_EXPIRY_TIME_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Invitation expiry time required',
  },
};

const PHONE_NUMBER_INPUT_VALIDATION = {
  regex: {
    value: /^[+]?\d{12,15}$/,
    errorMessage: 'Invalid phone number. Must be at least 12 digits long.',
  },
  length: { max: 15, min: 0 },
  required: {
    errorMessage: 'Mobile number required',
  },
};

const COUNTRY_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Country required',
  },
};

const REGION_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Region required',
  },
};

const GENERAL_PHONE_NUMBER_INPUT_VALIDATION = {
  regex: {
    value: /^[+]?\d{12,15}$/,
    errorMessage: 'Invalid phone number. Must be at least 12 digits long.',
  },
  length: { max: 15, min: 0 },
  required: {
    errorMessage: 'Mobile number required',
  },
};

const SPOC_NAME_INPUT_VALIDATION = {
  regex: {
    value: /^[_\w][\w\s]+$/,
    errorMessage:
      'Invalid spoc name. Must be alphabetic characters with spaces',
  },
  length: { max: 100, min: 5 },
  required: {
    errorMessage: 'Spoc name required',
  },
};

const GENERAL_ADDRESS_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Address required',
  },
};

const MEMBER_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Member required',
  },
};

const PARTICIPANT_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Participant required',
  },
};

const STREET_ADDRESS_INPUT_VALIDATION = {
  regex: {
    value: /^[\w\d\s\S]+$/,
    errorMessage:
      'Invalid street address. A valid street address is 38 Anomah Avenue, Osu',
  },
};

//     value: /^\d+\s+[\w\d\s]+(,\s+[\w\s]+)+$/,

const DIGITAL_ADDRESS_INPUT_VALIDATION = {
  regex: {
    value: /^[\w\d]+-\d+-\d+$/,
    errorMessage:
      'Invalid digital address. A valid digital address is GA-300-3561',
  },
};

const FIRST_NAME_INPUT_VALIDATION = {
  regex: {
    value: /^[\w-]+$/,
    errorMessage:
      'Invalid first name. Must be alphabetic characters or hypenated',
  },
  required: {
    errorMessage: 'First name required',
  },
};

const MIDDLE_NAME_INPUT_VALIDATION = {
  regex: {
    value: /^[\w-]+$/,
    errorMessage:
      'Invalid middle name. Must be alphabetic characters or hypenated',
  },
};

const LAST_NAME_INPUT_VALIDATION = {
  regex: {
    value: /^[\w-]+$/,
    errorMessage:
      'Invalid last name. Must be alphabetic characters or hypenated',
  },
  required: {
    errorMessage: 'Last name required',
  },
};

const AGE_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Age required',
  },
  number: {
    errorMessage: 'Age must be a number',
  },
};

const DATE_OF_BIRTH_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Date of birth required',
  },
};

const NATIONALITY_INPUT_VALIDATION = {
  string: {
    errorMessage: 'Nationality must be a string',
  },
};

const GENDER_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Gender required',
  },
};

const POSTAL_ADDRESS_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Postal address required',
  },
};

const DESCRIPTION_INPUT_VALIDATION = {
  string: {
    errorMessage: 'Description must be a string',
  },
};

const LABEL_INPUT_VALIDATION = {
  string: {
    errorMessage: 'Label must be a string',
  },
};

const TAG_INPUT_VALIDATION = {
  string: {
    errorMessage: 'Tag must be a string',
  },
};

const ROLE_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Role required',
  },
};

const BRAND_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Brand required',
  },
};

const GADGET_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Gadget required',
  },
};

const SERVICE_TYPE_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Service type required',
  },
};

const MODEL_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Model required',
  },
};

const BRANDS_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Brands required',
  },
};

const GADGETS_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Gadgets required',
  },
};

const SERVICE_TYPES_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Service types required',
  },
};

const DAILY_REPAIRS_LIMIT_INPUT_VALIDATION = {
  number: {
    errorMessage: 'Daily repairs limit must be a number',
  },
};

const LABOUR_CHARGE_INPUT_VALIDATION = {
  number: {
    errorMessage: 'Labour charge must be a number',
  },
  required: {
    errorMessage: 'Labour charge required',
  },
};

const SPARE_PARTS_CHARGE_INPUT_VALIDATION = {
  number: {
    errorMessage: 'Spare parts charge must be a number',
  },
  required: {
    errorMessage: 'Spare parts charge required',
  },
};

const REPAIR_STATUS_INPUT_VALIDATION = {
  string: {
    errorMessage: 'Repair status must be a string',
  },
  required: {
    errorMessage: 'Repair status required',
  },
};

const REPAIR_DELIVERY_STATUS_INPUT_VALIDATION = {
  string: {
    errorMessage: 'Repair delivery status must be a string',
  },
  required: {
    errorMessage: 'Repair delivery status required',
  },
};

const REPAIR_UID_INPUT_VALIDATION = {
  string: {
    errorMessage: 'Repair UID must be a string',
  },
  required: {
    errorMessage: 'Repair UID required',
  },
};

const SERVICE_DELIVERY_MODE_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Service delivery mode required',
  },
};

const DELIVERY_LOCATION_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Delivery location required',
  },
};

const COLLECTION_LOCATION_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Collection location required',
  },
};

const ON_SITE_LOCATION_INPUT_VALIDATION = {
  required: {
    errorMessage: 'On site location required',
  },
};

const PAYMENT_PROVIDER_INPUT_VALIDATION = {
  required: {
    errorMessage: 'Payment provider required',
  },
};

const AMOUNT_INPUT_VALIDATION = {
  number: {
    errorMessage: 'Amount must be a number',
  },
  required: {
    errorMessage: 'Amount required',
  },
};

export const YUP_USERNAME_VALIDATOR = yup
  .string()
  .max(USERNAME_INPUT_VALIDATION.length.max)
  .min(USERNAME_INPUT_VALIDATION.length.min)
  .matches(
    USERNAME_INPUT_VALIDATION.regex.value,
    USERNAME_INPUT_VALIDATION.regex.errorMessage
  )
  .required(USERNAME_INPUT_VALIDATION.required.errorMessage);

export const YUP_PASSWORD_VALIDATOR = yup
  .string()
  .max(PASSWORD_INPUT_VALIDATION.length.max)
  .min(PASSWORD_INPUT_VALIDATION.length.min)
  .matches(
    PASSWORD_INPUT_VALIDATION.regex.value,
    PASSWORD_INPUT_VALIDATION.regex.errorMessage
  )
  .required(PASSWORD_INPUT_VALIDATION.required.errorMessage);

export const YUP_EMAIL_ADDRESS_VALIDATOR = yup
  .string()
  .nullable()
  .email(EMAIL_ADDRESS_INPUT_VALIDATION.regex.errorMessage);

export const YUP_EMAIL_MESSAGE_VALIDATOR = yup
  .string(EMAIL_MESSAGE_INPUT_VALIDATION.string.errorMessage)
  .required(EMAIL_MESSAGE_INPUT_VALIDATION.required.errorMessage)
  .nullable();

export const YUP_CONFIRMATION_CODE_VALIDATOR = yup
  .string()
  .matches(
    CONFIRMATION_CODE_INPUT_VALIDATION.regex.value,
    CONFIRMATION_CODE_INPUT_VALIDATION.regex.errorMessage
  )
  .max(CONFIRMATION_CODE_INPUT_VALIDATION.length.max)
  .min(CONFIRMATION_CODE_INPUT_VALIDATION.length.min)
  .required(CONFIRMATION_CODE_INPUT_VALIDATION.required.errorMessage);

export const YUP_CLIENT_TYPE_VALIDATOR = yup
  .string()
  .required(CLIENT_TYPE_INPUT_VALIDATION.required.errorMessage);

export const YUP_USER_ID_VALIDATOR = yup
  .number(USER_ID_INPUT_VALIDATION.number.errorMessage)
  .required(USER_ID_INPUT_VALIDATION.required.errorMessage)
  .positive();

export const YUP_MEDIA_VALIDATOR = yup
  .string()
  .nullable()
  .required(MEDIA_INPUT_VALIDATION.required.errorMessage);

export const YUP_GENERAL_NAME_VALIDATOR = yup
  .string()
  .max(GENERAL_NAME_INPUT_VALIDATION.length.max)
  .min(GENERAL_NAME_INPUT_VALIDATION.length.min)
  .matches(
    GENERAL_NAME_INPUT_VALIDATION.regex.value,
    GENERAL_NAME_INPUT_VALIDATION.regex.errorMessage
  )
  .required(GENERAL_NAME_INPUT_VALIDATION.required.errorMessage);

export const YUP_START_TIME_VALIDATOR = yup
  .string()
  .required(START_TIME_INPUT_VALIDATION.required.errorMessage);

export const YUP_DURATION_VALIDATOR = yup
  .number(DURATION_INPUT_VALIDATION.number.errorMessage)
  .required(DURATION_INPUT_VALIDATION.required.errorMessage)
  .positive();

export const YUP_DURATION_UNIT_VALIDATOR = yup
  .string()
  .required(DURATION_UNIT_INPUT_VALIDATION.required.errorMessage);

export const YUP_TARGET_VALIDATOR = yup
  .number(TARGET_INPUT_VALIDATION.number.errorMessage)
  .required(TARGET_INPUT_VALIDATION.required.errorMessage)
  .positive();

export const YUP_TARGET_UNIT_VALIDATOR = yup
  .string()
  .required(TARGET_UNIT_INPUT_VALIDATION.required.errorMessage);

export const YUP_ACTIVITY_VALIDATOR = yup
  .string()
  .required(ACTIVITY_INPUT_VALIDATION.required.errorMessage);

export const YUP_INVITATION_RECIPIENT_VALIDATOR = yup
  .object()
  .required(INVITATION_RECIPIENT_INPUT_VALIDATION.required.errorMessage);

export const YUP_INVITATION_EXPIRY_TIME_VALIDATOR = yup
  .string()
  .nullable()
  .required(INVITATION_EXPIRY_TIME_INPUT_VALIDATION.required.errorMessage);

export const YUP_PHONE_NUMBER_VALIDATOR = yup
  .string()
  .nullable()
  .required(PHONE_NUMBER_INPUT_VALIDATION.required.errorMessage)
  .max(PHONE_NUMBER_INPUT_VALIDATION.length.max)
  .min(PHONE_NUMBER_INPUT_VALIDATION.length.min)
  .matches(
    PHONE_NUMBER_INPUT_VALIDATION.regex.value,
    PHONE_NUMBER_INPUT_VALIDATION.regex.errorMessage
  );

export const YUP_COUNTRY_VALIDATOR = yup
  .string()
  .required(COUNTRY_INPUT_VALIDATION.required.errorMessage);

export const YUP_REGION_VALIDATOR = yup
  .string()
  .required(REGION_INPUT_VALIDATION.required.errorMessage);

export const YUP_GENERAL_PHONE_NUMBER_VALIDATOR = yup
  .string()
  .nullable()
  .max(GENERAL_PHONE_NUMBER_INPUT_VALIDATION.length.max)
  .min(GENERAL_PHONE_NUMBER_INPUT_VALIDATION.length.min)
  .matches(
    GENERAL_PHONE_NUMBER_INPUT_VALIDATION.regex.value,
    GENERAL_PHONE_NUMBER_INPUT_VALIDATION.regex.errorMessage
  );

export const YUP_SPOC_NAME_VALIDATOR = yup
  .string()
  .nullable()
  .max(SPOC_NAME_INPUT_VALIDATION.length.max)
  .min(SPOC_NAME_INPUT_VALIDATION.length.min)
  .matches(
    SPOC_NAME_INPUT_VALIDATION.regex.value,
    SPOC_NAME_INPUT_VALIDATION.regex.errorMessage
  );

export const YUP_GENERAL_ADDRESS_VALIDATOR = yup.string().nullable();

export const YUP_MEMBER_VALIDATOR = yup
  .object()
  .nullable()
  .required(MEMBER_INPUT_VALIDATION.required.errorMessage);

export const YUP_PARTICIPANT_VALIDATOR = yup
  .object()
  .nullable()
  .required(PARTICIPANT_INPUT_VALIDATION.required.errorMessage);

export const YUP_STREET_ADDRESS_VALIDATOR = yup
  .string()
  .nullable()
  .matches(
    STREET_ADDRESS_INPUT_VALIDATION.regex.value,
    STREET_ADDRESS_INPUT_VALIDATION.regex.errorMessage
  );

export const YUP_DIGITAL_ADDRESS_VALIDATOR = yup
  .string()
  .nullable()
  .matches(
    DIGITAL_ADDRESS_INPUT_VALIDATION.regex.value,
    DIGITAL_ADDRESS_INPUT_VALIDATION.regex.errorMessage
  );

export const YUP_FIRSTNAME_VALIDATOR = yup
  .string()
  .matches(
    FIRST_NAME_INPUT_VALIDATION.regex.value,
    FIRST_NAME_INPUT_VALIDATION.regex.errorMessage
  );

export const YUP_LASTNAME_VALIDATOR = yup
  .string()
  .matches(
    LAST_NAME_INPUT_VALIDATION.regex.value,
    LAST_NAME_INPUT_VALIDATION.regex.errorMessage
  );

export const YUP_MIDDLENAME_VALIDATOR = yup
  .string()
  .nullable()
  .matches(
    MIDDLE_NAME_INPUT_VALIDATION.regex.value,
    MIDDLE_NAME_INPUT_VALIDATION.regex.errorMessage
  );

export const YUP_AGE_VALIDATOR = yup
  .number(AGE_INPUT_VALIDATION.number.errorMessage)
  .positive();

export const YUP_DATE_OF_BIRTH_VALIDATOR = yup.string();

export const YUP_NATIONALITY_VALIDATOR = yup
  .string(NATIONALITY_INPUT_VALIDATION.string.errorMessage)
  .nullable();

export const YUP_GENDER_VALIDATOR = yup.string();

export const YUP_POSTAL_ADDRESS_VALIDATOR = yup.string().nullable();

export const YUP_DESCRIPTION_VALIDATOR = yup
  .string(DESCRIPTION_INPUT_VALIDATION.string.errorMessage)
  .nullable();

export const YUP_LABEL_VALIDATOR = yup
  .string(LABEL_INPUT_VALIDATION.string.errorMessage)
  .nullable();

export const YUP_TAG_VALIDATOR = yup
  .string(TAG_INPUT_VALIDATION.string.errorMessage)
  .nullable();

export const YUP_ROLE_VALIDATOR = yup
  .mixed()
  .nullable()
  .required(ROLE_INPUT_VALIDATION.required.errorMessage);

export const YUP_BRAND_VALIDATOR = yup
  .object()
  .nullable()
  .required(BRAND_INPUT_VALIDATION.required.errorMessage);

export const YUP_GADGET_VALIDATOR = yup
  .object()
  .nullable()
  .required(GADGET_INPUT_VALIDATION.required.errorMessage);

export const YUP_SERVICE_TYPE_VALIDATOR = yup
  .object()
  .nullable()
  .required(SERVICE_TYPE_INPUT_VALIDATION.required.errorMessage);

export const YUP_MODEL_VALIDATOR = yup
  .object()
  .nullable()
  .required(MODEL_INPUT_VALIDATION.required.errorMessage);

export const YUP_BRAND_NOT_REQUIRED_VALIDATOR = yup.object().nullable();

export const YUP_GADGET_NOT_REQUIRED_VALIDATOR = yup.object().nullable();

export const YUP_SERVICE_TYPE_NOT_REQUIRED_VALIDATOR = yup.object().nullable();

export const YUP_MODEL_NOT_REQUIRED_VALIDATOR = yup.object().nullable();

export const YUP_BRANDS_VALIDATOR = yup
  .array()
  .of(yup.object())
  .nullable()
  .required(BRANDS_INPUT_VALIDATION.required.errorMessage);

export const YUP_GADGETS_VALIDATOR = yup
  .array()
  .of(yup.object())
  .nullable()
  .required(GADGETS_INPUT_VALIDATION.required.errorMessage);

export const YUP_SERVICE_TYPES_VALIDATOR = yup
  .array()
  .of(yup.object())
  .nullable()
  .required(SERVICE_TYPES_INPUT_VALIDATION.required.errorMessage);

export const YUP_DAILY_REPAIRS_LIMIT_VALIDATOR = yup
  .number(DAILY_REPAIRS_LIMIT_INPUT_VALIDATION.number.errorMessage)
  .positive()
  .nullable();

export const YUP_SERVICE_DELIVERY_MODE_VALIDATOR = yup
  .string()
  .nullable()
  .required(SERVICE_DELIVERY_MODE_INPUT_VALIDATION.required.errorMessage);

export const YUP_DELIVERY_LOCATION_VALIDATOR = yup
  .object()
  .nullable()
  .required(DELIVERY_LOCATION_INPUT_VALIDATION.required.errorMessage);

export const YUP_COLLECTION_LOCATION_VALIDATOR = yup
  .object()
  .nullable()
  .required(COLLECTION_LOCATION_INPUT_VALIDATION.required.errorMessage);

export const YUP_ON_SITE_LOCATION_VALIDATOR = yup
  .object()
  .nullable()
  .required(ON_SITE_LOCATION_INPUT_VALIDATION.required.errorMessage);

export const YUP_SPARE_PARTS_CHARGE_VALIDATOR = yup
  .number(SPARE_PARTS_CHARGE_INPUT_VALIDATION.number.errorMessage)
  .required(SPARE_PARTS_CHARGE_INPUT_VALIDATION.required.errorMessage);

export const YUP_LABOUR_CHARGE_VALIDATOR = yup
  .number(LABOUR_CHARGE_INPUT_VALIDATION.number.errorMessage)
  .required(LABOUR_CHARGE_INPUT_VALIDATION.required.errorMessage);

export const YUP_REPAIR_STATUS_VALIDATOR = yup
  .string(REPAIR_STATUS_INPUT_VALIDATION.string.errorMessage)
  .required(REPAIR_STATUS_INPUT_VALIDATION.required.errorMessage);

export const YUP_REPAIR_DELIVERY_STATUS_VALIDATOR = yup
  .string(REPAIR_DELIVERY_STATUS_INPUT_VALIDATION.string.errorMessage)
  .required(REPAIR_DELIVERY_STATUS_INPUT_VALIDATION.required.errorMessage);

export const YUP_REPAIR_UID_VALIDATOR = yup
  .string(REPAIR_UID_INPUT_VALIDATION.string.errorMessage)
  .required(REPAIR_UID_INPUT_VALIDATION.required.errorMessage);

export const YUP_PAYMENT_PROVIDER_VALIDATOR = yup
  .string()
  .nullable()
  .required(PAYMENT_PROVIDER_INPUT_VALIDATION.required.errorMessage);

export const YUP_AMOUNT_VALIDATOR = yup
  .number(AMOUNT_INPUT_VALIDATION.number.errorMessage)
  .required(AMOUNT_INPUT_VALIDATION.required.errorMessage);
