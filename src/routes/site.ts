import express from 'express';

// Controllers
import siteControllers from '../app/controllers/Site/LandingControllers';

const router = express.Router();

router.get('/login', siteControllers.login);
router.get('/', siteControllers.ladingPage);

export default router;
