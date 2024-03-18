import { z } from 'zod';
import { createClientSchema } from '../lib/schemas/client';

export type CreateClient = z.infer<typeof createClientSchema>;

export type UpdateClient = CreateClient;
