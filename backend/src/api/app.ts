import express from 'express';
import userRouter from './routes/userRoutes';
import errorHandler from './middlewares/errorHandler';
import incomeRouter from './routes/incomeRouter';

export function createApp() {
  const app = express();

  app.use(express.json({ limit: '10kb' }));

  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/incomes', incomeRouter);

  app.use(errorHandler);

  return app;
}
