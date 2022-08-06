import {Request, Response, NextFunction} from 'express'
import {Doctor} from '../models'

class DoctorControllers {

    // [POST]
  async createDoctor(req: Request, res: Response, next: NextFunction) {
    try {
      const newDoctor = new Doctor(req.body)
      const savedDoctor = await newDoctor.save()
      res.status(200).json(savedDoctor)
    } catch (error) {
        res.status(500).json(500)
    }
  }

  // [PATCH]
  updateDoctor(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }

  // [DELETE]
  destroyDoctor(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }
}

export default new DoctorControllers