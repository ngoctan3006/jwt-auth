import express from 'express';
import { createStudent } from '../controllers/student';

const router = express.Router();

router.post('/', createStudent);

export default router;
