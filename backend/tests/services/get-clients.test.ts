import { Client } from '@prisma/client';
import prisma from '../../src/lib/prisma';
import * as clientService from '../../src/services/client';
import { SuccessServiceResponse } from '../../src/types/response';
import { status } from '../../src/constants/status/http';

describe('getClients service', () => {
  const client: Client = {
    id: 40028922,
    cpf: '92607579082',
    email: 'teste@gmail.com',
    name: 'Teste',
    phoneNumber: '77999999999',
    status: 'waiting',
  };

  test('returns all clients', async () => {
    const clients: Client[] = [
      {
        id: 1,
        cpf: '92607579082',
        email: 'test@gmail.com',
        name: 'Ana',
        phoneNumber: '77999999999',
        status: 'waiting',
      },
      {
        id: 2,
        cpf: '75403649042',
        email: 'other@gmail.com',
        name: 'Zé',
        phoneNumber: '77989999999',
        status: 'active',
      },
    ];

    jest.spyOn(prisma.client, 'findMany').mockResolvedValue(clients);

    const result = await clientService.findAllClients() as SuccessServiceResponse<Client[]>;
    expect(result.status).toBe(status.OK);
    expect(result.data).toEqual(clients);
  });

  test('returns all clients', async () => {
    const clients: Client[] = [
      {
        id: 1,
        cpf: '92607579082',
        email: 'test@gmail.com',
        name: 'Ana',
        phoneNumber: '77999999999',
        status: 'waiting',
      },
      {
        id: 2,
        cpf: '75403649042',
        email: 'other@gmail.com',
        name: 'Zé',
        phoneNumber: '77989999999',
        status: 'active',
      },
    ];

    jest.spyOn(prisma.client, 'findMany').mockResolvedValue(clients);

    const result = await clientService.findAllClients() as SuccessServiceResponse<Client[]>;
    expect(result.status).toBe(status.OK);
    expect(result.data).toEqual(clients);
  });

  test('returns a client by id', async () => {
    jest.spyOn(prisma.client, 'findUnique').mockResolvedValue(client);

    const result = await clientService.getClientById(client.id) as SuccessServiceResponse<Client>;
    expect(result.status).toBe(status.OK);
    expect(result.data).toEqual(client);
  });

  test('responds with error if a id not exists', async () => {
    jest.spyOn(prisma.client, 'findUnique').mockResolvedValue(null);

    const result = await clientService.getClientById(client.id);
    expect(result.status).toBe(status.NOT_FOUND);
    expect(result).toHaveProperty('message');
  });
});
