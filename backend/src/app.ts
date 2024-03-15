import express from 'express';
import 'express-async-errors';
import clientRoutes from './routes/client';
import { errorMiddleware } from './middlewares/error';

const app = express();
app.use(express.json());

app.use('/clients', clientRoutes);

app.use(errorMiddleware);

export { app as default };
