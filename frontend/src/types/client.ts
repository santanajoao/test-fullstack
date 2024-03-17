import { createClientSchema, updateClientSchema } from '@/lib/schemas/client';
import { z } from 'zod';

type ClientStatus = {
  status: 'active' | 'inactive' | 'waiting' | 'disabled';
}

export type CreateClient = z.infer<typeof createClientSchema> & ClientStatus;

export type UpdateClient = z.infer<typeof updateClientSchema> & ClientStatus;

export type Client = CreateClient & {
  id: number;
};
