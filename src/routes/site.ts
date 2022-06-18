import express from 'express';

// Controllers
import siteControllers from '../app/controllers/Site/LandingControllers';

const router = express.Router();

router.get('/vn-vi', siteControllers.ladingPage);

export default router;
