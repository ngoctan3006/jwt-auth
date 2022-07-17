import { CLASS, CS, SUBJECT, TEACHER } from '../constants';
import { create, find, findNameSubject, findOne } from '../utils/db_querry';
import { v4 as uuidv4 } from 'uuid';

export const getClasses = async (req, res) => {
  const { id, role } = req.user;
  try {
    const user = await findOne(TEACHER, { userId: id });
    if (!user || role !== 1) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const result = await find(CLASS, { teacherCode: user.code });
    const data = [];
    for (let i = 0; i < result.length; i++) {
      const subjectName = (await findNameSubject(result[i].code))[0].name;
      data.push({
        ...result[i],
        subjectName,
      });
    }

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getClass = async (req, res) => {
  const { id, role } = req.user;
  const { code } = req.params;
  try {
    const user = await findOne(TEACHER, { userId: id });
    if (!user || role !== 1) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const result = await findOne(CLASS, { teacherCode: user.code, code });
    const subjectName = (await findNameSubject(result.code))[0].name;

    res.json({ ...result, subjectName });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const createClass = async (req, res) => {
  const { classCode, subjectCode, subjectName, semester, room } = req.body;
  const { id, role } = req.user;

  if (!classCode || !subjectCode || !subjectName || !semester || !room) {
    return res.status(400).json({ message: 'Không được bỏ trống các trường.' });
  }

  try {
    const user = await findOne(TEACHER, { userId: id });

    if (!user || role !== 1) {
      return res.status(403).json({ message: 'Không có quyền.' });
    }

    const classExist = await findOne(CLASS, { code: classCode });
    if (classExist) {
      return res.status(400).json({ message: 'Lớp đã tồn tại.' });
    }

    await create(CLASS, {
      code: classCode,
      room,
      semester,
      teacherCode: user.code,
      id: uuidv4(),
    });

    const subject = await findOne(SUBJECT, { code: subjectCode });
    if (!subject) {
      await create(SUBJECT, {
        code: subjectCode,
        name: subjectName,
      });
    }
    await create(CS, {
      classCode,
      subjectCode,
    });

    await res.json({ message: 'Tạo lớp thành công.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateClass = async (req, res) => {
  const { classCode, subjectName, semester, room } = req.body;
  const { id, role } = req.user;

  if (!classCode || !subjectName || !semester || !room) {
    return res.status(400).json({ message: 'Không được bỏ trống các trường.' });
  }

  try {
    const user = await findOne(TEACHER, { userId: id });

    if (!user || role !== 1) {
      return res.status(403).json({ message: 'Không có quyền.' });
    }

    const classExist = await findOne(CLASS, { code: classCode });
    if (!classExist) {
      return res.status(400).json({ message: 'Lớp không tồn tại.' });
    }

    await create(CLASS, {
      code: classCode,
      room,
      semester,
      teacherCode: user.code,
    });

    const subject = await findOne(SUBJECT, { code: subjectCode });
    if (!subject) {
      await create(SUBJECT, {
        code: subjectCode,
        name: subjectName,
      });
    }
    await create(CS, {
      classCode,
      subjectCode,
    });

    await res.json({ message: 'Cập nhật lớp thành công.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
