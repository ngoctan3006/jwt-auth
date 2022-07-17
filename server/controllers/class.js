import { CLASS, CS, SUBJECT, TEACHER } from '../constants';
import { create, find, findNameSubject, findOne } from '../utils/db_querry';

export const getClass = async (req, res) => {
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
