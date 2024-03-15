import { successStatus } from '../constants/status/http';

export function isSuccessStatus(httpStatus: number) {
  const successStatusArray = Object.values(successStatus) as number[];
  return successStatusArray.includes(httpStatus);
}
