import { Request, Response, NextFunction } from 'express';

class SiteControllers {

  // [GET] /
  ladingPage(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render("Site/guest/index", { layout: false });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] /login
  login(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).render('Site/guest/login', {layout: false})
    } catch (error) {
        res.status(500).render('Satus/500', {layout: false})
    }
  }

  // [GET] /register
  register(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).render('Site/guest/register', {layout: false})
    } catch (error) {
        res.status(500).render('Status/500', {layout: false})
    }
  }

  // [GET] /faq
    fag(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).render('Site/guest/faq', {layout: false})
        } catch (error) {
            res.status(500).render('Status/500', {layout: false})
        }
    }

  // [GET] /about-us
  about(req: Request, res: Response, next: NextFunction) {
      try {
        res.status(200).render('Site/guest/about', { layout: false });
    } catch (error) {
        res.status(500).render('Status/500', {layout: false})
    }
  }

  // [GET] /contact-us
  contact(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).render('Site/guest/contact', { layout: false });
    } catch (error) {
        res.status(500).render('Status/500', {layout: false})
    }
  }
}

export default new SiteControllers();
