import { ApiResponse } from '@/types/api';

export async function treatApiFetch<T>(callback: () => Promise<ApiResponse<T>>): Promise<ApiResponse<T>>  {
  try {
    return callback();
  } catch {
    return { success: false, message: 'Algo deu errado' };
  }
}
