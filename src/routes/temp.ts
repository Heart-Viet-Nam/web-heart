import express from 'express';
import blogControllers from '../app/controllers/BlogControllers';
import eventControllers from '../app/controllers/EventControllers';
import doctorControllers from '../app/controllers/DoctorControllers';
import { upload } from '../config/multer';

const router = express.Router();

router.post('/blog', upload.single('image'), blogControllers.createBlog);

router.post('/event', eventControllers.createEvent);

router.post('/doctor', upload.single('image'), doctorControllers.createDoctor)




export default router;
