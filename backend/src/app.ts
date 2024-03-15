import express from 'express';
import * as clientService from './services/client';
import { isSuccessStatus } from './utils/http';

const app = express();
app.use(express.json());

app.post('/clients', async (req, res) => {
  const { status, ...result } = await clientService.createClient(req.body);

  return res.status(status).json({
    success: isSuccessStatus(status),
    ...result,
  });
});

app.get('/clients', async (_req, res) => {
  const { status, ...result } = await clientService.findAllClients();

  return res.status(status).json({
    success: isSuccessStatus(status),
    ...result
  });
});

app.put('/clients/:id', async (req, res) => {
  const targetId = Number.parseInt(req.params.id);
  const { status, ...result } = await clientService.updateClient(targetId, req.body);

  return res.status(status).json({
    success: isSuccessStatus(status),
    ...result,
  });
});

app.get('/clients/:id', async (req, res) => {
  const targetId = Number.parseInt(req.params.id);
  const { status, ...result } = await clientService.getClientById(targetId);

  return res.status(status).json({
    success: isSuccessStatus(status),
    ...result,
  });
});

export { app as default };
