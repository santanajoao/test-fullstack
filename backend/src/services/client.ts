import { Client } from '@prisma/client';
import { status } from '../constants/status/http';
import prisma from '../lib/prisma';
import { createClientSchema, updateClientSchema } from '../lib/schemas/client';
import { CreateClient, UpdateClient } from '../types/client';
import { ServiceResponse } from '../types/response';

export async function createClient(data: CreateClient): Promise<ServiceResponse<Client>> {
  const clientValidation = createClientSchema.safeParse(data);

  if (!clientValidation.success) {
    return {
      status: status.BAD_REQUEST,
      message: clientValidation.error.issues[0].message,
    };
  }

  const usersWithCpf = await prisma.client.count({
    where: {
      cpf: clientValidation.data.cpf,
    },
  });

  if (usersWithCpf > 0) {
    return {
      status: status.CONFLICT,
      message: 'O cpf informado já está cadastrado',
    };
  }

  const newClient = await prisma.client.create({
    data: clientValidation.data,
  });

  return {
    status: status.CREATED,
    data: newClient,
  };
}

export async function findAllClients(): Promise<ServiceResponse<Client[]>> {
  const clients = await prisma.client.findMany();
  
  return {
    status: status.OK,
    data: clients,
  };
}

export async function updateClient(id: number, data: UpdateClient): Promise<ServiceResponse<Client>> {
  if (Number.isNaN(id)) {
    return {
      status: status.BAD_REQUEST,
      message: 'Id de cliente inválido',
    };
  }

  const clientValidation = updateClientSchema.safeParse(data);

  if (!clientValidation.success) {
    return {
      status: status.BAD_REQUEST,
      message: clientValidation.error.issues[0].message,
    };
  }

  const clientsWithId = await prisma.client.findUnique({
    where: {
      id,
    },
  });

  if (!clientsWithId) {
    return {
      status: status.NOT_FOUND,
      message: 'Cliente com o id informado não encontrado',
    };
  }

  if (clientsWithId.cpf !== clientValidation.data.cpf) {
    const usersWithCpf = await prisma.client.count({
      where: {
        cpf: clientValidation.data.cpf,
      },
    });

    if (usersWithCpf > 0) {
      return {
        status: status.CONFLICT,
        message: 'O cpf informado já está cadastrado',
      };
    }
  }

  const updatedClient = await prisma.client.update({
    where: {
      id,
    },
    data: clientValidation.data,
  });

  return {
    status: status.OK,
    data: updatedClient,
  };
}

export async function getClientById(id: number) {
  if (isNaN(id)) {
    return {
      status: status.BAD_REQUEST,
      message: 'Id de cliente inválido',
    };
  }
  
  const targetClient = await prisma.client.findUnique({
    where: {
      id,
    },
  });

  if (!targetClient) {
    return {
      status: status.NOT_FOUND,
      message: 'Cliente com o id informado não encontrado',
    };
  }

  return {
    status: status.OK,
    data: targetClient,
  };
}
