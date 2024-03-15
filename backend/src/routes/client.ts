import { Router } from 'express';
import * as clientService from '../services/client';
import { isSuccessStatus } from '../utils/http';

const clientRoutes = Router();

clientRoutes.post('/', async (req, res) => {
  const { status, ...result } = await clientService.createClient(req.body);

  return res.status(status).json({
    success: isSuccessStatus(status),
    ...result,
  });
});

clientRoutes.get('/', async (_req, res) => {
  const { status, ...result } = await clientService.findAllClients();

  return res.status(status).json({
    success: isSuccessStatus(status),
    ...result
  });
});

clientRoutes.put('/:id', async (req, res) => {
  const targetId = Number.parseInt(req.params.id);
  const { status, ...result } = await clientService.updateClient(targetId, req.body);

  return res.status(status).json({
    success: isSuccessStatus(status),
    ...result,
  });
});

clientRoutes.get('/:id', async (req, res) => {
  const targetId = Number.parseInt(req.params.id);
  const { status, ...result } = await clientService.getClientById(targetId);

  return res.status(status).json({
    success: isSuccessStatus(status),
    ...result,
  });
});

export { clientRoutes as default };
