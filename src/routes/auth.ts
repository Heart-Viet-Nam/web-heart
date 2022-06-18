import express, {Request, Response, NextFunction} from 'express';
import passport from 'passport'

const router = express.Router();

router.get('/google', passport.authenticate('google', {scope: ['profile']}))
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), 
    (req: Request, res: Response, next: NextFunction) => {
        res.redirect('/vn-vi/user')
    })

export default router;