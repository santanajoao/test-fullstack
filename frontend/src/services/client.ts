import { ApiResponse } from '@/types/api';
import { Client, CreateClient, UpdateClient } from '@/types/client';
import { treatApiFetch } from '@/utils/fetch';

const domain = 'http://localhost:3006';

export async function getAllClients(): Promise<ApiResponse<Client[]>> {
  return treatApiFetch(async () => {
    const response = await fetch(`${domain}/clients`, {
      cache: 'no-store'
    });
  
    return response.json();
  });
}

export async function createClient(data: CreateClient): Promise<ApiResponse<Client>> {
  return treatApiFetch(async () => {
    const response = await fetch(`${domain}/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    return response.json();
  });
}

export async function updateClient(id: number, data: UpdateClient): Promise<ApiResponse<Client>> {
  return treatApiFetch(async () => {
    const response = await fetch(`${domain}/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    return response.json();
  });
}

export async function getClientById(id: number | string): Promise<ApiResponse<Client>> {
  return treatApiFetch(async () => {
    const response = await fetch(`${domain}/clients/${id}`, {
      cache: 'no-store',
    });
  
    return response.json();
  });
}
