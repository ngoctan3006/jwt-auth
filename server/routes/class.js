import express from 'express';
import { createClass, getClass, getClasses } from '../controllers/class';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/', auth, getClasses);
router.get('/:code', auth, getClass);
router.post('/', auth, createClass);

export default router;
