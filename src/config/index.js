// index.js

export const ACCOUNT_RESET_ACTIVATION_EMAIL_SUBJECT =
  'MeterState - Account Recovery Mail';
export const ACCOUNT_ACTIVATION_NOTIFICATION_ATTEMPTS = Number.parseInt(
  process.env.ACCOUNT_RESET_ACTIVATION_NOTIFICATION_ATTEMPTS || 3
);
export const MAX_ACCOUNT_ACTIVATION_SMS_NOTIFICATION_ATTEMPTS = Number.parseInt(
  process.env.MAX_ACCOUNT_RESET_ACTIVATION_SMS_NOTIFICATION_ATTEMPTS || 3
);
export const MAX_ACCOUNT_ACTIVATION_EMAIL_NOTIFICATION_ATTEMPTS =
  Number.parseInt(
    process.env.MAX_ACCOUNT_RESET_ACTIVATION_EMAIL_NOTIFICATION_ATTEMPTS || 3
  );
export const ACCOUNT_ACTIVATION_EMAIL_SUBJECT =
  'MeterState - Account Activation Mail';
export const SITE_VISITOR_FEEDBACK_EMAIL_SUBJECT =
  'MeterState - Site Visitor Feedback - {{VISITOR_NAME}}';
export const FILE_EXTENSION_REGEX = /\.[a-zA-Z0-9]+$/;
export const APP_NAME = 'Replugg Electronics';
export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 20;
export const VALID_PHONE_NUMBER_REGEX = /^[+]?\d{12,15}$/;
export const ZEROES_WITHIN_PHONE_NUMBER_REGEX = /^(0{0,2}[1-9]{1,3})(0+)(.+)$/;
export const DEFAULT_API_TIMEOUT = 60000;
export const DURATION_UNITS = [
  'SECONDS',
  'MINUTES',
  'HOURS',
  'DAYS',
  'WEEKS',
  'MONTHS',
];
export const DEFAULT_SORT_DIRECTION = 'DESC';
export const SEARCH_MININUM_LENGTH = 2;
export const SEARCH_QUERY_DEBOUNCE_PERIOD = 0;
export const CKYC_TENANT = 'DFS';
export const APP_LOGO =
  process.env.NEXT_PUBLIC_BASE_PATH + '/img/Replugg primary logo.png';
export const APP_DASHBOARD_LOGO =
  process.env.NEXT_PUBLIC_BASE_PATH +
  '/img/Replugg logo in monochrome black on white.png';
export const SPLASH_IMAGE =
  process.env.NEXT_PUBLIC_BASE_PATH +
  '/img/replugg-electronics-splash-image-2.jpg';
export const IMAGE_PLACEHOLDER =
  process.env.NEXT_PUBLIC_BASE_PATH + '/img/image-placeholder.jpeg';
export const DEFAULT_IGNORE_SUM = true;
export const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;
export const JWT_EXPIRATION_PERIOD = process.env.JWT_EXPIRATION_PERIOD || '10m';
export const JWT_SIGNING_KEY = process.env.JWT_SIGNING_KEY;
export const PERSONALITY_TYPES = {
  customer: { type: 'customer', label: 'Customer' },
  repairer: { type: 'repairer', label: 'Repairer' },
};
export const REGIONS_IN_GHANA = [
  'Greater Accra',
  'Ashanti',
  'Eastern',
  'Central',
  'Volta',
  'Oti',
  'Western',
  'Western North',
  'Bono',
  'Bono East',
  'Ahafo',
  'Northern',
  'Savannah',
  'North East',
  'Upper West',
  'Upper East',
];
export const GENDERS = ['MALE', 'FEMALE'];
export const DEFAULT_LOCATIONS_NUMBER = 5;
export const DEFAULT_MODELS_NUMBER = 20;
export const DEFAULT_BRANDS_NUMBER = 20;
export const DEFAULT_SERVICE_TYPES_NUMBER = 20;
export const DEFAULT_GADGETS_NUMBER = 20;
export const PAGER = {
  PAGE: 'PAGE',
  END_PAGING: 'END_PAGING',
  RESET_PAGE: 'RESET_PAGE',
};
export const ACCOUNT_STATUS = {
  UNCONFIRMED: 'UNCONFIRMED',
  CONFIRMED: 'CONFIRMED',
  ARCHIVED: 'ARCHIVED',
  COMPROMISED: 'COMPROMISED',
  UNKNOWN: 'UNKNOWN',
  RESET_REQUIRED: 'RESET_REQUIRED',
  FORCE_CHANGE_PASSWORD: 'FORCE_CHANGE_PASSWORD',
};
export const ROLE_TYPE = {
  ROLE_USER: 'ROLE_USER',
  ROLE_CUSTOMER: 'ROLE_CUSTOMER',
  ROLE_REPAIRER: 'ROLE_REPAIRER',
  ROLE_SUPERUSER: 'ROLE_SUPERUSER',
};
export const APP_ROUTE_CONTEXT = {
  CUSTOMER: 'CUSTOMER',
  REPAIRER: 'REPAIRER',
  MANAGER: 'MANAGER',
};
export const APP_API_URL =
  process.env.NEXT_PUBLIC_REPLUGG_ELECTRONICS_API_URL || '';
export const MANAGE_RESOURCE_ITEM = {
  BRANDS: 'Brands',
  GADGETS: 'Gadgets',
  SERVICE_TYPES: 'Service types',
  GENERAL_LOCATIONS: 'General locations',
  LOCATIONS: 'Locations',
  REPAIR_SERVICES: 'Repair services',
};
export const MANAGE_RESOURCES_LIST = [
  { key: MANAGE_RESOURCE_ITEM.BRANDS, value: MANAGE_RESOURCE_ITEM.BRANDS },
  { key: MANAGE_RESOURCE_ITEM.GADGETS, value: MANAGE_RESOURCE_ITEM.GADGETS },
  {
    key: MANAGE_RESOURCE_ITEM.SERVICE_TYPES,
    value: MANAGE_RESOURCE_ITEM.SERVICE_TYPES,
  },
  {
    key: MANAGE_RESOURCE_ITEM.GENERAL_LOCATIONS,
    value: MANAGE_RESOURCE_ITEM.GENERAL_LOCATIONS,
  },
];
export const MANAGE_REPAIRER_RESOURCES_LIST = [
  { key: MANAGE_RESOURCE_ITEM.GADGETS, value: MANAGE_RESOURCE_ITEM.GADGETS },
  {
    key: MANAGE_RESOURCE_ITEM.SERVICE_TYPES,
    value: MANAGE_RESOURCE_ITEM.SERVICE_TYPES,
  },
  {
    key: MANAGE_RESOURCE_ITEM.REPAIR_SERVICES,
    value: MANAGE_RESOURCE_ITEM.REPAIR_SERVICES,
  },
  {
    key: MANAGE_RESOURCE_ITEM.LOCATIONS,
    value: MANAGE_RESOURCE_ITEM.LOCATIONS,
  },
];
export const MANAGE_CUSTOMER_RESOURCES_LIST = [
  {
    key: MANAGE_RESOURCE_ITEM.LOCATIONS,
    value: MANAGE_RESOURCE_ITEM.LOCATIONS,
  },
];
export const MANAGE_REPAIR_ITEM = {
  ALL: 'All',
  NEW: 'New',
  ACCEPTED: 'Accepted',
  DECLINED: 'Declined',
  QUEUED: 'Queued',
  PENDING: 'Pending',
  IN_PROGRESS: 'In progress',
  COMPLETED: 'Completed',
  NOT_PAID: 'Not paid',
  PARTLY_PAID: 'Partly paid',
  FULLY_PAID: 'Fully paid',
  COLLECTED_FROM_CUSTOMER: 'Collected from customer',
  DELIVERED_TO_CUSTOMER: ['Delivered to customer', 'Received'],
  COLLECTED_FROM_REPAIRER: 'Collected from repairer',
  DELIVERED_TO_REPAIRER: 'Delivered to repairer',
};
export const MANAGE_ACCOUNT_ITEM = {
  ALL: 'All',
  ROLE_REPAIRER: 'Repairer',
  ROLE_CUSTOMER: 'Customer',
  ROLE_MANAGER: 'Manager',
};
export const MANAGE_REPAIRS_LIST = [
  { key: MANAGE_REPAIR_ITEM.ALL, value: 'ALL' },
  { key: MANAGE_REPAIR_ITEM.PENDING, value: 'PENDING' },
  { key: MANAGE_REPAIR_ITEM.NEW, value: 'ASSIGNED' },
  { key: MANAGE_REPAIR_ITEM.ACCEPTED, value: 'ACCEPTED' },
  { key: MANAGE_REPAIR_ITEM.DECLINED, value: 'DECLINED' },
  {
    key: MANAGE_REPAIR_ITEM.COLLECTED_FROM_CUSTOMER,
    value: 'COLLECTED_FROM_CUSTOMER',
  },
  {
    key: MANAGE_REPAIR_ITEM.DELIVERED_TO_REPAIRER,
    value: 'DELIVERED_TO_REPAIRER',
  },
  {
    key: MANAGE_REPAIR_ITEM.QUEUED,
    value: 'QUEUED',
  },
  {
    key: MANAGE_REPAIR_ITEM.IN_PROGRESS,
    value: 'IN_PROGRESS',
  },
  {
    key: MANAGE_REPAIR_ITEM.COMPLETED,
    value: 'COMPLETED',
  },
  {
    key: MANAGE_REPAIR_ITEM.NOT_PAID,
    value: 'NOT_PAID',
  },
  {
    key: MANAGE_REPAIR_ITEM.PARTLY_PAID,
    value: 'PARTLY_PAID',
  },
  {
    key: MANAGE_REPAIR_ITEM.FULLY_PAID,
    value: 'FULLY_PAID',
  },
  {
    key: MANAGE_REPAIR_ITEM.COLLECTED_FROM_REPAIRER,
    value: 'COLLECTED_FROM_REPAIRER',
  },
  {
    key: MANAGE_REPAIR_ITEM.DELIVERED_TO_CUSTOMER[0],
    value: 'DELIVERED_TO_CUSTOMER',
  },
];
export const MANAGE_REPAIRER_REPAIRS_LIST = [
  { key: MANAGE_REPAIR_ITEM.ALL, value: 'ALL' },
  { key: MANAGE_REPAIR_ITEM.NEW, value: 'ASSIGNED' },
  { key: MANAGE_REPAIR_ITEM.ACCEPTED, value: 'ACCEPTED' },
  { key: MANAGE_REPAIR_ITEM.QUEUED, value: 'QUEUED' },
  { key: MANAGE_REPAIR_ITEM.IN_PROGRESS, value: 'IN_PROGRESS' },
  { key: MANAGE_REPAIR_ITEM.COMPLETED, value: 'COMPLETED' },
  {
    key: MANAGE_REPAIR_ITEM.DELIVERED_TO_CUSTOMER[0],
    value: 'DELIVERED_TO_CUSTOMER',
  },
];
export const MANAGE_CUSTOMER_REPAIRS_LIST = [
  { key: MANAGE_REPAIR_ITEM.ALL, value: 'ALL' },
  { key: MANAGE_REPAIR_ITEM.PENDING, value: 'PENDING' },
  { key: MANAGE_REPAIR_ITEM.NEW, value: 'ASSIGNED' },
  { key: MANAGE_REPAIR_ITEM.COMPLETED, value: 'COMPLETED' },
  {
    key: MANAGE_REPAIR_ITEM.DELIVERED_TO_CUSTOMER[1],
    value: 'DELIVERED_TO_CUSTOMER',
  },
];
export const MANAGE_ACCOUNTS_LIST = [
  { key: MANAGE_ACCOUNT_ITEM.ALL, value: 'ALL' },
  { key: MANAGE_ACCOUNT_ITEM.ROLE_REPAIRER, value: 'ROLE_REPAIRER' },
  { key: MANAGE_ACCOUNT_ITEM.ROLE_CUSTOMER, value: 'ROLE_CUSTOMER' },
  { key: MANAGE_ACCOUNT_ITEM.ROLE_MANAGER, value: 'ROLE_MANAGER' },
];
export const DEFAULT_CSV_FILE_SIZE = 1 * 1024 * 1024;
export const SITE_VISITOR_MAIL_RECIPIENT =
  process.env.NEXT_PUBLIC_SITE_VISITOR_MAIL_RECIPIENT;
export const SITE_VISITOR_MAIL_SENDER =
  process.env.NEXT_PUBLIC_SITE_VISITOR_MAIL_SENDER;
export const SITE_VISITOR_MAIL_SUBJECT =
  process.env.NEXT_PUBLIC_SITE_VISITOR_MAIL_SUBJECT;
export const DEFAULT_SELECT_SIZE = 20;
export const DEFAULT_MODELS_SELECT_SIZE = 100;
