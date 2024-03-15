import express from 'express';
import { createClientSchema } from './schemas/client';
import prisma from './lib/prisma';
import { status } from './constants/status/http';

const app = express();
app.use(express.json());

app.post('/clients', async (req, res) => {
  const clientValidation = createClientSchema.safeParse(req.body);

  if (!clientValidation.success) {
    return res
      .status(status.UNPROCESSABLE_ENTITY)
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

// app.get('/clients', async (req, res) => {

// });

// app.patch('/clients/:id', async (req, res) => {

// });

// app.get('/clients/:id', async (req, res) => {

// });

export { app as default };
