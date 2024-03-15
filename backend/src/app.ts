import express from 'express';
import clientRoutes from './routes/client';

const app = express();
app.use(express.json());

app.use('/clients', clientRoutes);

export { app as default };
