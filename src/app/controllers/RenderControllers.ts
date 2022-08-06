import { Request, Response, NextFunction } from 'express';
import { injectFile } from '../../utils/inject';

const files = {
  cssFile: injectFile('public/css', 'main'),
  jsFile: injectFile('public/js', 'main'),
  paymentFile: injectFile('public/js', 'payment')
};

class RenderControllers {
  // [GET] /
  async homeRender(req: Request, res: Response, next: NextFunction) {
    try {
      const home = true
      res.status(200).render('site/user/home', { layout: 'layouts/user', files, home });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /activity
  async activityRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('site/user/activity');
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /invoice
  async invoiceRender(req: Request, res: Response, next: NextFunction) {
    try {
      
      res.status(200).render('site/user/invoice');
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /profile
  async profileRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('site/user/profile');
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /about-us
  async aboutRender(req: Request, res: Response, next: NextFunction) {
    try {
      const about = true
      res.status(200).render('site/user/about', { layout: 'layouts/user', files, about });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /blogs
  async blogsRender(req: Request, res: Response, next: NextFunction) {
    try {
      const social = true
      res.status(200).render('site/user/blog', { layout: 'layouts/user', files, social });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /events
  async eventsRender(req: Request, res: Response, next: NextFunction) {
    try {
      const social = true
      res.status(200).render('site/user/event', { layout: 'layouts/user', files, social });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /user/blog/:slug
  async detailBlogRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('site/user/blog-detail', { layout: 'layouts/user' });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /event/:slug
  async detailEventRender(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).render('site/user/event-detail', { layout: 'layouts/user', files });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /faq
  async faqRender(req: Request, res: Response, next: NextFunction) {
    try {
      const about = true
      res.status(200).render('site/user/faq', { layout: 'layouts/user', files, about });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /booking
  async bookingRender(req: Request, res: Response, next: NextFunction) {
    try {
      const booking = true
      res.status(200).render('site/user/booking', { layout: 'layouts/user', files, booking });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /booking-history
  async history(req: Request, res: Response, next: NextFunction) {
    try {
      const booking = true
      res.status(200).render('site/user/booking-history', { layout: 'layouts/user', files, booking });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }

  // [GET] /transaction-history
  async transaction(req: Request, res: Response, next: NextFunction) {
    try {
      const transaction = true
      res.status(200).render('site/user/invoice', { layout: 'layouts/user', files, transaction });
    } catch (error) {
      res.status(500).render('status/500', { layout: false });
    }
  }
}

export default new RenderControllers();
