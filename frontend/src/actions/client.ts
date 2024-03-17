'use server';

import * as clientService from '@/services/client';
import { CreateClient, UpdateClient } from '@/types/client';
import { redirect } from 'next/navigation';

export async function createClient(data: CreateClient) {
  const result = await clientService.createClient(data);

  if (result.success) {
    redirect('/');
  }

  return result;
}

export async function updateClient(id: number, data: UpdateClient) {
  const result = await clientService.updateClient(id, data);

  if (result.success) {
    redirect('/');
  }

  return result;
}
