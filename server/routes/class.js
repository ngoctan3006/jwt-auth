import express from 'express';
import { createClass, deleteClass, getClass, getClasses, updateClass } from '../controllers/class';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/', auth, getClasses);
router.get('/:code', auth, getClass);
router.post('/', auth, createClass);
router.put('/:id', auth, updateClass);
router.delete('/:id', auth, deleteClass);

export default router;
