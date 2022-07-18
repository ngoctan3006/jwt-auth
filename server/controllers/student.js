import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { STUDENT, TEACHER, USER } from '../constants';
import { create, findInfo, findOne, getStudentList } from '../utils/db_querry';
import { generateUsername } from '../utils/user';

dotenv.config();

export const getMe = async (req, res) => {
  const { user } = req;

  try {
    const result = await findInfo(STUDENT, user.id);

    delete result.password;
    delete result.role;

    if (result) {
      return res.json(result);
    }
    res.status(404).json({ message: 'Không tìm thấy thông tin.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getStudents = async (req, res) => {
  const { id: userId, role } = req.user;
  const { code } = req.params;
  const { status } = req.query;

  try {
    const user = await findOne(TEACHER, { userId });

    if (!user || role < 1) {
      return res.status(401).json({ message: 'Bạn không có quyền thực hiện chức năng này.' });
    }

    const result = await getStudentList({ code, status });

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  const { fullname, code } = req.body;
  const { role } = req.user;

  if (role < 2) {
    return res.status(403).json({ message: 'Bạn không có quyền thực hiện chức năng này.' });
  }

  try {
    const username = generateUsername({ name: fullname, code });
    const password = '123456';
    const hash = await bcrypt.hash(password, 12);
    const id = uuidv4();

    const user = await create(USER, {
      id,
      username,
      password: hash,
      role: 0,
    });

    await create(STUDENT, {
      code,
      fullname,
      userId: id,
    });

    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
