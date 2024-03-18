import { ErrorStatusCode, SuccessStatusCode } from './http';

export type SuccessServiceResponse<T> = {
  status: SuccessStatusCode;
  data: T;
}

export type ErrorServiceResponse = {
  status: ErrorStatusCode
  message: string;
}

export type ServiceResponse<T> = SuccessServiceResponse<T> | ErrorServiceResponse;
