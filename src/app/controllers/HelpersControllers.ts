import { Request, Response, NextFunction } from 'express';

class HelpersControllers {
  // [POST] /api/checker/account
  async accountChecker(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [POST] /api/checker/email
  async emailChecker(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new HelpersControllers();
