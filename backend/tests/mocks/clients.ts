import { CreateClient, UpdateClient } from '../../src/types/client';

export const createClientData: CreateClient = {
  cpf: '92607579082',
  email: 'teste@gmail.com',
  name: 'Teste',
  phoneNumber: '77999999999',
  status: 'waiting',
};

export const updateClientData: UpdateClient = {
  cpf: '92607579082',
  email: 'teste@gmail.com',
  name: 'Teste',
  phoneNumber: '77999999999',
  status: 'waiting',
};

export const validClient = {
  ...createClientData,
  id: 1,
};

export const validClientList = [validClient, validClient];
