import express from 'express';
import { getMe, signin, signup } from '../controllers/auth';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/me', auth, getMe);
router.post('/signin', signin);
router.post('/signup', signup);

export default router;
