import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { USER } from '../constants';
import { v4 as uuidv4 } from 'uuid';
import { create, findOne } from '../utils/db_querry';

dotenv.config();

export const signin = async (req, res) => {
  const { email, password: pw } = req.body;

  try {
    const existingUser = await findOne(USER, { email });
    if (!existingUser) {
      return res.status(400).json({ message: 'Sai tên đăng nhập hoặc mật khẩu.' });
    }

    const isPasswordValid = await bcrypt.compare(pw, existingUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Sai tên đăng nhập hoặc mật khẩu.' });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const { password, ...user } = existingUser;

    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signup = async (req, res) => {
  const { email, password: pw, comfirmPassword, ...rest } = req.body;

  try {
    const existingUser = await findOne(USER, { email });
    if (existingUser) {
      return res.status(400).json({ message: 'Tài khoản đã tồn tại.' });
    }

    if (pw !== comfirmPassword) {
      return res.status(400).json({ message: 'Mật khẩu không khớp.' });
    }

    const hasedPassword = await bcrypt.hash(pw, 12);
    const id = uuidv4();
    const result = await create(USER, {
      id,
      email,
      password: hasedPassword,
      ...rest,
    });

    const token = jwt.sign(
      {
        email,
        id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    const { password, ...user } = result;
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
