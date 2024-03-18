import { Router } from 'express';
import * as clientService from '../services/client';
import { isSuccessResponse } from '../utils/http';

const clientRoutes = Router();

clientRoutes.post('/', async (req, res) => {
  const response = await clientService.createClient(req.body);
  const { status, ...rest } = response;

  return res.status(status).json({
    success: isSuccessResponse(response),
    ...rest,
  });
});

clientRoutes.get('/', async (_req, res) => {  
  const response = await clientService.findAllClients();
  const { status, ...rest } = response;

  return res.status(status).json({
    success: isSuccessResponse(response),
    ...rest,
  });
});

clientRoutes.put('/:id', async (req, res) => {
  const targetId = Number.parseInt(req.params.id);
  const response = await clientService.updateClient(targetId, req.body);
  const { status, ...rest } = response;

  return res.status(status).json({
    success: isSuccessResponse(response),
    ...rest,
  });
});

clientRoutes.get('/:id', async (req, res) => {
  const targetId = Number.parseInt(req.params.id);
  const response = await clientService.getClientById(targetId);
  const { status, ...rest } = response;

  return res.status(status).json({
    success: isSuccessResponse(response),
    ...rest,
  });
});

export { clientRoutes as default };
