import express from 'express';
import { createStudent, getMe } from '../controllers/student';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/me', auth, getMe);
router.post('/', auth, createStudent);

export default router;
