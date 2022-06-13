import { Application } from "express";
import adminRouter from "./admin";
import doctorRouter from "./doctor";
import patientRouter from "./patient";
import siteRouter from "./site";
import statusRouter from "./status";

const route = (app: Application) => {
  // app.use('/administration')

  // app.use('/doctor')

  // app.use('/patient')

  app.use("/", siteRouter);

  app.use("/", statusRouter);
};

export default route;
