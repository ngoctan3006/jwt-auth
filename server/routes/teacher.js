import express from 'express';
import { createTeacher } from '../controllers/teacher';

const router = express.Router();

router.post('/', createTeacher);

export default router;
