import { errorStatus, status, successStatus } from '../constants/status/http';

export type SuccessStatusName = keyof typeof successStatus;
export type ErrorStatusName = keyof typeof errorStatus

export type SuccessStatusCode = typeof successStatus[SuccessStatusName];
export type ErrorStatusCode = typeof errorStatus[ErrorStatusName];

export type HttpStatusName = keyof typeof status;
export type HttpStatusCode = typeof status[HttpStatusName];
