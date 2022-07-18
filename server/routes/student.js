import express from 'express';
import { createStudent, getMe, getStudents } from '../controllers/student';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/me', auth, getMe);
router.get('/student-list/:code', auth, getStudents);
router.post('/', auth, createStudent);

export default router;
