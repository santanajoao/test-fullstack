export type SuccessApiResponse<T> = {
  success: true;
  data: T;
};

export type ErrorApiResponse = {
  success: false;
  message: string;
};

export type ApiResponse<T> = SuccessApiResponse<T> | ErrorApiResponse;

export type Client = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  status: 'active' | 'inactive' | 'waiting' | 'disabled';
};
