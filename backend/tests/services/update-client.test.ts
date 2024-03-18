import { Client } from '@prisma/client';
import prisma from '../../src/lib/prisma';
import * as clientService from '../../src/services/client';
import { CreateClient, UpdateClient } from '../../src/types/client';
import { status } from '../../src/constants/status/http';
import { SuccessServiceResponse } from '../../src/types/response';
import { updateClientData, validClient } from '../mocks/clients';

describe('updateClient service', () => {
  describe('business logic', () => {
    test('returns updated client and right status', async () => {
      jest.spyOn(prisma.client, 'findUnique').mockResolvedValue(validClient);
      jest.spyOn(prisma.client, 'count').mockResolvedValue(0);
      jest.spyOn(prisma.client, 'update').mockResolvedValue(validClient);
    
      const result = await clientService
        .updateClient(validClient.id, updateClientData) as SuccessServiceResponse<Client>;
      expect(result.status).toBe(status.OK);
      expect(result.data).toEqual(validClient);
    });

    test('returns with error if updated id doesnt exist', async () => {
      jest.spyOn(prisma.client, 'findUnique').mockResolvedValue(null);

      const result = await clientService
        .updateClient(validClient.id, updateClientData);
      expect(result.status).toBe(status.NOT_FOUND);
      expect(result).toHaveProperty('message');
    });

    test('return with error if tried to update the cpf for a existing one', async () => {
      const clientWithDifferentCpf = {
        ...validClient,
        cpf: '754.036.490-42',
      };

      jest.spyOn(prisma.client, 'findUnique').mockResolvedValue(clientWithDifferentCpf);
      jest.spyOn(prisma.client, 'count').mockResolvedValue(1);

      const result = await clientService
        .updateClient(validClient.id, updateClientData);
      expect(result.status).toBe(status.CONFLICT);
      expect(result).toHaveProperty('message');
    });
  });

  describe('input validations', () => {
    test('returns with error if a invalid id is sent', async () => {
      const invalidId = Number.parseInt('banana');

      const result = await clientService.updateClient(invalidId, updateClientData);

      expect(result.status).toBe(status.BAD_REQUEST);
      expect(result).toHaveProperty('message');
    });

    test('returns with error if the cpf is invalid', async () => {
      const invalidUpdateClientDataupdateClientData: CreateClient = {
        ...updateClientData,
        cpf: '123.456.789-00',
      };

      const result = await clientService.createClient(invalidUpdateClientDataupdateClientData);
      expect(result.status).toBe(status.BAD_REQUEST);
      expect(result).toHaveProperty('message');
    });

    test('respond with error if name length is short than 2', async () => {
      const invalidNameData: CreateClient = {
        ...updateClientData,
        name: 'A',
      };

      const result = await clientService.updateClient(validClient.id, invalidNameData);
      expect(result.status).toBe(status.BAD_REQUEST);
      expect(result).toHaveProperty('message');
    });

    test('respond with error if email is invalid', async () => {
      const invalidEmailData: UpdateClient = {
        ...updateClientData,
        email: 'invalid email',
      };

      const result = await clientService.updateClient(validClient.id, invalidEmailData);
      expect(result.status).toBe(status.BAD_REQUEST);
      expect(result).toHaveProperty('message');
    });

    test('respond with error if status is not valid', async () => {
      const invalidStatusData: CreateClient = {
        ...updateClientData,
        status: 'banana',
      };
  
      const result = await clientService.updateClient(validClient.id, invalidStatusData);
      expect(result.status).toBe(status.BAD_REQUEST);
      expect(result).toHaveProperty('message');
    });

    describe('respond with success with one of the valid statuses', () => {
      test('disabled', async () => {
        const validStatusData: UpdateClient = {
          ...updateClientData,
          status: 'disabled',
        };
          
        jest.spyOn(prisma.client, 'count').mockResolvedValue(0);
        jest.spyOn(prisma.client, 'create').mockResolvedValue(validClient);
    
        const result = await clientService.createClient(validStatusData) as SuccessServiceResponse<Client>;
        expect(result.status).toBe(status.CREATED);
        expect(result.data).toEqual(validClient);
      });

      test('active', async () => {
        const validStatusData: UpdateClient = {
          ...updateClientData,
          status: 'active',
        };

        jest.spyOn(prisma.client, 'count').mockResolvedValue(0);
        jest.spyOn(prisma.client, 'create').mockResolvedValue(validClient);
    
        const result = await clientService.createClient(validStatusData) as SuccessServiceResponse<Client>;
        expect(result.status).toBe(status.CREATED);
        expect(result.data).toEqual(validClient);
      });

      test('inactive', async () => {
        const validStatusData: UpdateClient = {
          ...updateClientData,
          status: 'inactive',
        };
          
        jest.spyOn(prisma.client, 'count').mockResolvedValue(0);
        jest.spyOn(prisma.client, 'create').mockResolvedValue(validClient);
    
        const result = await clientService.createClient(validStatusData) as SuccessServiceResponse<Client>;
        expect(result.status).toBe(status.CREATED);
        expect(result.data).toEqual(validClient);
      });
    });
  });
});