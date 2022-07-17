import express from 'express';
import { createTeacher, getMe } from '../controllers/teacher';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/me', auth, getMe);
router.post('/', auth, createTeacher);

export default router;
