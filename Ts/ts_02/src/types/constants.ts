export const API_URL = "https://api.example.com";
export const API_VERSION = "v1";
export const APP_NAME = "MyAwesomeApp";
export const VERSION = "1.0.0";
export const DEFAULT_TIMEOUT = 3000;
export const MAX_FILE_SIZE = 5 * 1024 * 1024; 

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500
} as const;

export function getFullApiUrl(endpoint: string): string {
  return `${API_URL}/${API_VERSION}/${endpoint}`;
}