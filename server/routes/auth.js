import express from 'express';
import { changePassword, getMe, signin, signup } from '../controllers/auth';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/me', auth, getMe);
router.post('/signin', signin);
router.post('/signup', signup);
router.post('/change-password', auth, changePassword);

export default router;
