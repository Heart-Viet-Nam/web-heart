import express from 'express'

// Controllers
import siteControllers from '../app/controllers/Site/SiteControllers'

const router = express.Router()

router.get('/about-us', siteControllers.aboutRender)
router.get('/', siteControllers.ladingPage)

export default router