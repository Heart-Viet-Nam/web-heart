import { Request, Response, NextFunction } from 'express';

declare module 'express-session' {
  interface Session {
    adminLogged: boolean;
    adminRole: string | number;
    logged: boolean;
  }
}

export const loginAdminSession = (req: Request, res: Response, next: NextFunction) => {
  try {
    const status = req.session.adminLogged;
    if (status === true) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    res.status(500).render('Status/500', { layout: false });
  }
};

export const adminPermission = (req: Request, res: Response, next: NextFunction) => {
  try {
    const status = req.session.adminRole;
    if (status === 0) {
      next();
    } else {
      res.status(403).render('Status/403', { layout: false });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginSession = (req: Request, res: Response, next: NextFunction) => {
  try {
    const status = req.session.logged;
    if (status === true) {
      next();
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.status(500).render('Status/500', { layout: false });
  }
};
