import { Request, Response, NextFunction } from 'express';

class LoginControllers {
  // [GET] /admin/login
  loginRender(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }

  // [POST] /admin/auth
  loginAuth(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }

  // [GET] /admin/logout
  logout(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }
}

export default new LoginControllers();
