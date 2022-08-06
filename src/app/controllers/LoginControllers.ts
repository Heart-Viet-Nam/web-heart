import { Request, Response, NextFunction } from 'express';

class LoginControllers {
  // [GET] /login
  login(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('site/guest/login', { layout: false });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /register
  register(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('site/guest/register', { layout: false });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }
}

export default new LoginControllers();
