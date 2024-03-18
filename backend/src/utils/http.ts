import { successStatus } from '../constants/status/http';
import { ServiceResponse, SuccessServiceResponse } from '../types/response';

export function isSuccessResponse<T>(serviceResponse: ServiceResponse<T>): serviceResponse is SuccessServiceResponse<T>  {
  const successStatusArray = Object.values(successStatus) as number[];
  return successStatusArray.includes(serviceResponse.status);
}
