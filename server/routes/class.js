import express from 'express';
import {
  addStudentToClass,
  createClass,
  deleteClass,
  getClass,
  getClasses,
  removeStudentFromClass,
  updateClass,
} from '../controllers/class';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/', auth, getClasses);
router.post('/', auth, createClass);
router.post('/addStudent', auth, addStudentToClass);
router.delete('/deleteStudent', auth, removeStudentFromClass);
router.get('/:code', auth, getClass);
router.put('/:id', auth, updateClass);
router.delete('/:id', auth, deleteClass);

export default router;
