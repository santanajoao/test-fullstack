import { Client } from '@prisma/client';
import prisma from '../../src/lib/prisma';
import * as clientService from '../../src/services/client';
import { CreateClient } from '../../src/types/client';
import { status } from '../../src/constants/status/http';
import { SuccessServiceResponse } from '../../src/types/response';

describe('createClient service', () => {
  const createClientData: CreateClient = {
    cpf: '92607579082',
    email: 'teste@gmail.com',
    name: 'Teste',
    phoneNumber: '77999999999',
    status: 'waiting',
  };

  const createdClient: Client = {
    id: 1,
    ...createClientData,
  };

  describe('business logic', () => {
    test('returns created client and right status', async () => {
    
      jest.spyOn(prisma.client, 'count').mockResolvedValue(0);
      jest.spyOn(prisma.client, 'create').mockResolvedValue(createdClient);
    
      const result = await clientService.createClient(createClientData) as SuccessServiceResponse<Client>;
      expect(result.status).toBe(status.CREATED);
      expect(result.data).toEqual(createdClient);
    });
    
    test('responds with error if the cpf already exists', async () => {
      jest.spyOn(prisma.client, 'count').mockResolvedValue(1);
    
      const result = await clientService.createClient(createClientData);
      expect(result.status).toBe(status.CONFLICT);
      expect(result).toHaveProperty('message');
    });
  });

  describe('input validations', () => {
    test('accepts cpf with pontuation', async () => {
      const pontuationCpfData: CreateClient = {
        ...createClientData,
        cpf: '926.075.790-82',
      };

      jest.spyOn(prisma.client, 'count').mockResolvedValue(0);
      jest.spyOn(prisma.client, 'create').mockResolvedValue(createdClient);
    
      const result = await clientService.createClient(pontuationCpfData) as SuccessServiceResponse<Client>;
      expect(result.status).toBe(status.CREATED);
      expect(result.data).toEqual(createdClient);
    });

    test('returns with error if the cpf is invalid', async () => {
      const invalidCreateClientData: CreateClient = {
        ...createClientData,
        cpf: '123.456.789-00',
      };

      const result = await clientService.createClient(invalidCreateClientData);
      expect(result.status).toBe(status.BAD_REQUEST);
      expect(result).toHaveProperty('message');
    });

    describe('accepts formatted phone number', () => {
      test('1', async () => {
        const pontuationCpfData: CreateClient = {
          ...createClientData,
          phoneNumber: '(77) 99999-9999',
        };
  
        jest.spyOn(prisma.client, 'count').mockResolvedValue(0);
        jest.spyOn(prisma.client, 'create').mockResolvedValue(createdClient);
  
        const result = await clientService.createClient(pontuationCpfData) as SuccessServiceResponse<Client>;
        expect(result.status).toBe(status.CREATED);
        expect(result.data).toEqual(createdClient);
      });

      test('2', async () => {
        const pontuationCpfData: CreateClient = {
          ...createClientData,
          phoneNumber: '(77) 9 9999-9999',
        };
  
        jest.spyOn(prisma.client, 'count').mockResolvedValue(0);
        jest.spyOn(prisma.client, 'create').mockResolvedValue(createdClient);
  
        const result = await clientService.createClient(pontuationCpfData) as SuccessServiceResponse<Client>;
        expect(result.status).toBe(status.CREATED);
        expect(result.data).toEqual(createdClient);
      });
    });

    test('respond with error if name length is short than 2', async () => {
      const invalidNameData: CreateClient = {
        ...createClientData,
        name: 'A',
      };

      const result = await clientService.createClient(invalidNameData);
      expect(result.status).toBe(status.BAD_REQUEST);
      expect(result).toHaveProperty('message');
    });

    test('respond with error if email is invalid', async () => {
      const invalidEmailData: CreateClient = {
        ...createClientData,
        email: 'invalid email',
      };

      const result = await clientService.createClient(invalidEmailData);
      expect(result.status).toBe(status.BAD_REQUEST);
      expect(result).toHaveProperty('message');
    });

    describe('respond with success with one of the valid statuses', () => {
      test('disabled', async () => {
        const validStatusData: CreateClient = {
          ...createClientData,
          status: 'disabled',
        };
          
        jest.spyOn(prisma.client, 'count').mockResolvedValue(0);
        jest.spyOn(prisma.client, 'create').mockResolvedValue(createdClient);
    
        const result = await clientService.createClient(validStatusData) as SuccessServiceResponse<Client>;
        expect(result.status).toBe(status.CREATED);
        expect(result.data).toEqual(createdClient);
      });

      test('active', async () => {
        const validStatusData: CreateClient = {
          ...createClientData,
          status: 'active',
        };
          
        jest.spyOn(prisma.client, 'count').mockResolvedValue(0);
        jest.spyOn(prisma.client, 'create').mockResolvedValue(createdClient);
    
        const result = await clientService.createClient(validStatusData) as SuccessServiceResponse<Client>;
        expect(result.status).toBe(status.CREATED);
        expect(result.data).toEqual(createdClient);
      });

      test('inactive', async () => {
        const validStatusData: CreateClient = {
          ...createClientData,
          status: 'inactive',
        };
          
        jest.spyOn(prisma.client, 'count').mockResolvedValue(0);
        jest.spyOn(prisma.client, 'create').mockResolvedValue(createdClient);
    
        const result = await clientService.createClient(validStatusData) as SuccessServiceResponse<Client>;
        expect(result.status).toBe(status.CREATED);
        expect(result.data).toEqual(createdClient);
      });
    });

    test('respond with error if status is not valid', async () => {
      const invalidStatusData: CreateClient = {
        ...createClientData,
        status: 'banana',
      };
  
      const result = await clientService.createClient(invalidStatusData);
      expect(result.status).toBe(status.BAD_REQUEST);
      expect(result).toHaveProperty('message');
    });
  });
});