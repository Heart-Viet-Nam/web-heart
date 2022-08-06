import { Request, Response, NextFunction } from 'express';
import { Booking } from '../models';

class BookingControllers {
  // [POST]
  async createBlog(req: Request, res: Response, next: NextFunction) {
    try {
      const newBooking = new Booking(req.body)
      const savedBooking = await newBooking.save()
      res.redirect('/booking')
    } catch (error) {
      console.log(error);
    }
  }

  // [PATCH]
  updateBlog(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }

  // [DELETE]
  destroyBlog(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }
}

export default new BookingControllers();
