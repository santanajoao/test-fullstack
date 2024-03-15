import { NextFunction, Request, Response } from 'express';
import { status } from '../constants/status/http';

export function errorMiddleware(error: unknown, _req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    next(error);
  }

  if (
    error instanceof SyntaxError
    && 'type' in error
    && error.type === 'entity.parse.failed'
  ) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Corpo da requisição inválido',
    });
  }

  return res.status(status.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: 'Um erro inesperado ocorreu. Tente novamente',
  });
}
