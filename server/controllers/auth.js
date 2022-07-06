import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { USER } from '../constants';
import { create, findOne, update } from '../utils/db_querry';

dotenv.config();

export const getMe = async (req, res) => {
  const { userId } = req;
  try {
    const user = await findOne(USER, { id: userId });
    delete user.password;
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const signin = async (req, res) => {
  const { username, role, password: pw } = req.body;

  try {
    const existingUser = await findOne(USER, { username });
    if (!existingUser || parseInt(role) !== existingUser.role) {
      return res.status(400).json({ message: 'Sai tên đăng nhập hoặc mật khẩu.' });
    }

    const isPasswordValid = await bcrypt.compare(pw, existingUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Sai tên đăng nhập hoặc mật khẩu.' });
    }

    const token = jwt.sign(
      {
        username: existingUser.username,
        id: existingUser.id,
        role: existingUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const { password, ...user } = existingUser;

    res.json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const signup = async (req, res) => {
  const { username, role, password: pw, comfirmPassword, ...rest } = req.body;

  try {
    const checkUsername = await findOne(USER, { username });
    if (checkUsername) {
      return res.status(400).json({ message: 'Tài khoản đã tồn tại.' });
    }
    if (pw !== comfirmPassword) {
      return res.status(400).json({ message: 'Mật khẩu không khớp.' });
    }

    const hasedPassword = await bcrypt.hash(pw, 12);
    const id = uuidv4();
    const result = await create(USER, {
      id,
      username,
      password: hasedPassword,
      role,
      ...rest,
    });

    const token = jwt.sign(
      {
        username,
        id,
        role,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    const { password, ...user } = result;
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const changePassword = async (req, res) => {
  const { oldPassword, password, confirmPassword } = req.body;
  const id = req.userId;

  try {
    const user = await findOne(USER, { id });
    if (!user) {
      return res.status(400).json({ message: 'Không tìm thấy tài khoản.' });
    }

    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Sai mật khẩu.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Mật khẩu không khớp.' });
    }

    const hasedPassword = await bcrypt.hash(password, 12);
    await update(USER, { id }, { password: hasedPassword });
    res.json({ message: 'Đổi mật khẩu thành công.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
