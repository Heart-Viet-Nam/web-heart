import { Request, Response, NextFunction } from "express";

class SiteControllers {
  // [GET] /
  ladingPage(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render("Site/landing/index", { layout: false });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] /login
  signIn(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }

  // [GET] /signup
  signOut(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }

  // [GET] /event/:slug
  eventRender(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }

  // [GET] /blog/:slug
  blogRender(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }

  // [GET] /about-us
  aboutRender(req: Request, res: Response, next: NextFunction) {
    res.status(200).render("Site/landing/about-us", { layout: false });
  }

  // [GET] /contact-us
  contactRender(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }
}

export default new SiteControllers();
