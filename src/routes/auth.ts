import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: 'profile' }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req: Request, res: Response, next: NextFunction) => {
  res.redirect('/vn-vi/user');
});

router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req: Request, res: Response, next: NextFunction) => {
  res.redirect('/');
});

export default router;
