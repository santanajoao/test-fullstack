import express from 'express';
import { createClientSchema, updateClientSchema } from './schemas/client';
import prisma from './lib/prisma';
import { status } from './constants/status/http';

const app = express();
app.use(express.json());

app.post('/clients', async (req, res) => {
  const clientValidation = createClientSchema.safeParse(req.body);

  if (!clientValidation.success) {
    return res
      .status(status.BAD_REQUEST)
      .json({
        success: false,
        message: clientValidation.error.issues[0].message,
      });
  }

  const usersWithCpf = await prisma.client.count({
    where: {
      cpf: clientValidation.data.cpf,
    },
  });

  if (usersWithCpf > 0) {
    return res
      .status(status.CONFLICT)
      .json({
        success: false,
        message: 'O cpf informado já está cadastrado',
      });
  }

  const newClient = await prisma.client.create({
    data: clientValidation.data,
  });

  res
    .status(status.OK)
    .json({
      success: true,
      data: newClient,
    });
});

app.get('/clients', async (_req, res) => {
  const clients = await prisma.client.findMany();

  res
    .status(status.OK)
    .json({
      success: true,
      data: clients
    });
});

app.put('/clients/:id', async (req, res) => {
  const clientValidation = updateClientSchema.safeParse(req.body);

  if (!clientValidation.success) {
    return res
      .status(status.BAD_REQUEST)
      .json({
        success: false,
        message: clientValidation.error.issues[0].message,
      });
  }

  const targetId = Number.parseInt(req.params.id);
  if (Number.isNaN(targetId)) {
    return res
      .status(status.BAD_REQUEST)
      .json({
        success: false,
        message: 'id de cliente inválido',
      });
  }

  const clientsWithId = await prisma.client.count({
    where: {
      id: targetId,
    },
  });

  if (clientsWithId === 0) {
    return res
      .status(status.NOT_FOUND)
      .json({
        success: false,
        message: 'Não há clientes cadastrados com o id informado',
      });
  }

  const updatedClient = await prisma.client.update({
    where: {
      id: targetId,
    },
    data: clientValidation.data,
  });

  return res
    .status(status.OK)
    .json({
      success: true,
      data: updatedClient,
    });
});

// app.get('/clients/:id', async (req, res) => {

// });

export { app as default };
