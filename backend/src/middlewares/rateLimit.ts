import { Request, Response } from 'express';
import { status } from '../constants/status/http';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function rateLimitMiddleware(_req: Request, res: Response) {
  return res.status(status.TOO_MANY_REQUESTS).json({
    success: false,
    message: 'Você excedeu o limite de requisições. Tente novamente, mais tarde.'
  });
}