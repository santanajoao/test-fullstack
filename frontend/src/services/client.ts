import { ApiResponse } from '@/types/api';
import { Client } from '@/types/client';

const domain = 'http://localhost:3006';

export async function getAllClients(): Promise<ApiResponse<Client[]>> {
  try {
    const response = await fetch(`${domain}/clients`, {
      next: {
        revalidate: 1,
      },
    });
  
    return response.json();
  } catch {
    return { success: false, message: 'Algo deu errado' };
  }
}
