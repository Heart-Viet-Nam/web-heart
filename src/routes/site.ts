import express from 'express';
import loginControllers from '../app/controllers/LoginControllers';
import renderControllers from '../app/controllers/RenderControllers';
import paymentControllers from '../app/controllers/PaymentControllers';

const router = express.Router();

router.get('/transaction-history', renderControllers.transaction)
router.get('/login', loginControllers.login);
router.get('/booking-history', renderControllers.history);
router.get('/booking', renderControllers.bookingRender);
router.get('/event/:slug', renderControllers.detailEventRender);
router.get('/events', renderControllers.eventsRender);
router.get('/blog/:slug', renderControllers.detailBlogRender);
router.get('/blogs', renderControllers.blogsRender);
router.get('/faq', renderControllers.faqRender);
router.get('/about-us', renderControllers.aboutRender);
router.post('/checkout-payment', paymentControllers.payment)
router.get('/', renderControllers.homeRender);

export default router;
