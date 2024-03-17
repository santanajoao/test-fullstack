import { ApiResponse } from '@/types/api';
import { Client, CreateClient, UpdateClient } from '@/types/client';

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

export async function createClient(data: CreateClient): Promise<ApiResponse<Client>> {
  try {
    const response = await fetch(`${domain}/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    return response.json();
  } catch {
    return { success: false, message: 'Algo deu errado' };
  }
}

export async function updateClient(id: number, data: UpdateClient): Promise<ApiResponse<Client>> {
  try {
    const response = await fetch(`${domain}/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    return response.json();
  } catch {
    return { success: false, message: 'Algo deu errado' };
  }
}

export async function getClientById(id: number | string): Promise<ApiResponse<Client>> {
  try {
    const response = await fetch(`${domain}/clients/${id}`, {
      next: {
        revalidate: 1,
      },
    });
  
    return response.json();
  } catch {
    return { success: false, message: 'Algo deu errado' };
  }
}
