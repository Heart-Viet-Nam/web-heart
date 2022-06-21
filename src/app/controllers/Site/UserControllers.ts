import { Request, Response, NextFunction } from 'express';

class UserControllers {
  //TODO
  // [GET] /user/home
  async homeRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('Site/user/home', {layout: 'layouts/user'});
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }

  // [GET] /user/activity
  async activityRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('Site/user/activity');
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }

  //TODO
  // [GET] /user/invoice
  async invoiceRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('Site/user/invoice');
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }

  //TODO
  // [GET] /user/profile
  async profileRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('Site/user/profile');
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }

  //TODO
  // [GET] /user/about-us
  async aboutRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('Site/user/about', {layout: 'layouts/user'});
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }

  //TODO
  // [GET] /user/blogs
  async blogsRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('Site/user/blog');
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }

  //TODO
  // [GET] /user/events
  async eventsRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('Site/user/event');
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }

  // [GET] /user/blog/:slug
  async detailBlogRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('Site/user/blog-detail');
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }

  // [GET] /user/event/:slug
  async detailEventRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('Site/user/event-detail');
    } catch (error) {
      res.status(500).render('Status/500', { layout: false });
    }
  }
}

export default new UserControllers();
