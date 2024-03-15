export const successStatus = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
} as const;

export const errorStatus = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const status = {
  ...successStatus,
  ...errorStatus
} as const;
