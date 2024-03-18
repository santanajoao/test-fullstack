import { Client } from '@prisma/client';
import prisma from '../../src/lib/prisma';
import * as clientService from '../../src/services/client';
import { SuccessServiceResponse } from '../../src/types/response';
import { status } from '../../src/constants/status/http';
import { validClient, validClientList } from '../mocks/clients';

describe('getClients service', () => {
  test('returns all clients', async () => {
    jest.spyOn(prisma.client, 'findMany').mockResolvedValue(validClientList);

    const result = await clientService.findAllClients() as SuccessServiceResponse<Client[]>;
    expect(result.status).toBe(status.OK);
    expect(result.data).toEqual(validClientList);
  });

  test('returns all clients', async () => {
    jest.spyOn(prisma.client, 'findMany').mockResolvedValue(validClientList);

    const result = await clientService.findAllClients() as SuccessServiceResponse<Client[]>;
    expect(result.status).toBe(status.OK);
    expect(result.data).toEqual(validClientList);
  });

  test('returns a client by id', async () => {
    jest.spyOn(prisma.client, 'findUnique').mockResolvedValue(validClient);

    const result = await clientService.getClientById(validClient.id) as SuccessServiceResponse<Client>;
    expect(result.status).toBe(status.OK);
    expect(result.data).toEqual(validClient);
  });

  test('responds with error if a id not exists', async () => {
    jest.spyOn(prisma.client, 'findUnique').mockResolvedValue(null);

    const result = await clientService.getClientById(validClient.id);
    expect(result.status).toBe(status.NOT_FOUND);
    expect(result).toHaveProperty('message');
  });
});
