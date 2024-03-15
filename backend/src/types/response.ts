import { ErrorStatusCode, SuccessStatusCode } from './http';

type SuccessServiceResponse<T> = {
  status: SuccessStatusCode;
  data: T;
}

type ErrorServiceResponse = {
  status: ErrorStatusCode
  message: string;
}

export type ServiceResponse<T> = SuccessServiceResponse<T> | ErrorServiceResponse;
