import express, {Request, Response, NextFunction} from 'express';
import userControllers from '../app/controllers/Site/UserControllers'

const router = express.Router();

router.get('/about-us', userControllers.aboutRender)
router.get('/home', userControllers.homeRender)
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.redirect('/user/home')
})

export default router;
