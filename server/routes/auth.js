import express from 'express';
import { changePassword, signin, signup } from '../controllers/auth';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.put('/change-password', auth, changePassword);

export default router;
