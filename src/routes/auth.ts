import express, {Request, Response, NextFunction} from 'express';
import passport from 'passport'

const router = express.Router();

router.get('/google', passport.authenticate('google', {scope: ['profile']}))
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/'
}), ())

export default router;