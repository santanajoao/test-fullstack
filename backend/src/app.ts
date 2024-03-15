import express from 'express';
import 'express-async-errors';
import clientRoutes from './routes/client';
import { errorMiddleware } from './middlewares/error';
import { rateLimit } from 'express-rate-limit';
import { rateLimitMiddleware } from './middlewares/rateLimit';

const app = express();
app.use(express.json());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  limit: 30,
  handler: rateLimitMiddleware,
  // maximum of 30 requests per minute
});

app.use(limiter);

app.use('/clients', clientRoutes);

app.use(errorMiddleware);

export { app as default };
