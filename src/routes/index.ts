import { Application } from 'express';
import adminRouter from './admin';
import doctorRouter from './doctor';
import userRouter from './user';
import siteRouter from './site';
import statusRouter from './status';
import authRouter from './auth';

const route = (app: Application) => {
  // app.use('/administration')

  // app.use('/doctor')

  app.use('/user', userRouter)

  app.use('/auth', authRouter);

  app.use('/', siteRouter);

  app.use('/', statusRouter);
};

export default route;
