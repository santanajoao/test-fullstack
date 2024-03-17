import express from 'express';
import 'express-async-errors';

import { errorMiddleware } from './middlewares/error';
import { rateLimit } from 'express-rate-limit';
import { rateLimitMiddleware } from './middlewares/rateLimit';

import clientRoutes from './routes/client';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());

app.use(helmet());

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
