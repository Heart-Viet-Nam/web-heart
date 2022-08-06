import { Application } from 'express';
import siteRouter from './site';
import statusRouter from './status';
import authRouter from './auth';
import tempRouter from './temp';

const route = (app: Application) => {
  app.use('/temp', tempRouter);

  app.use('/auth', authRouter);

  app.use('/', siteRouter);

  app.use('/', statusRouter);
};

export default route;
