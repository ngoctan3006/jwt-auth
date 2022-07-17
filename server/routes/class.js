import express from 'express';
import { createClass, getClass } from '../controllers/class';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/', auth, getClass);
router.post('/', auth, createClass);

export default router;
