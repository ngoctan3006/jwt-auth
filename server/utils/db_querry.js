import dotenv from 'dotenv';
import connection from '../database';
import { makeQueryCondition } from './make_querry';
dotenv.config();

const DB_NAME = process.env.DB_NAME;

export const find = (name, condition) => {
  const { queryCondition, values } = makeQueryCondition(condition);

  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM  ${DB_NAME}.${name} WHERE ${queryCondition}`,
      [...values],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.length ? results : null);
        }
      }
    );
  });
};

export const findOne = (name, condition) => {
  const { queryCondition, values } = makeQueryCondition(condition);

  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM  ${DB_NAME}.${name} WHERE ` + queryCondition,
      [...values],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.length ? results[0] : null);
        }
      }
    );
  });
};

export const findInfo = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${DB_NAME}.user, ${DB_NAME}.${table} WHERE ${table}.userId = ? AND ${table}.userId = user.id`,
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.length ? results[0] : null);
        }
      }
    );
  });
};

export const create = (name, data) => {
  const keys = Object.keys(data);
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO ${DB_NAME}.${name} (${keys.join(', ')}) VALUES (${keys
        .map(() => '?')
        .join(', ')})`,
      Object.values(data),
      (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      }
    );
  });
};

export const update = (name, condition, data) => {
  const { queryCondition, values } = makeQueryCondition(condition);
  const keys = Object.keys(data);

  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${DB_NAME}.${name} SET ${keys
        .map((key) => `${key} = ?`)
        .join(', ')} WHERE ${queryCondition}`,
      [...Object.values(data), ...values],
      (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      }
    );
  });
};

export const findNameSubject = (classCode) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT subject.name FROM ${DB_NAME}.class_subject, ${DB_NAME}.subject WHERE class_subject.classCode = ? AND class_subject.subjectCode = subject.code`,
      [classCode],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

export const deleteRow = (name, condition) => {
  const { queryCondition, values } = makeQueryCondition(condition);

  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM ${DB_NAME}.${name} WHERE ${queryCondition}`,
      [...values],
      (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
};

export const getStudentList = ({ code, status }) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${DB_NAME}.class_student, ${DB_NAME}.student WHERE class_student.classCode = ? AND class_student.studentCode = student.code AND class_student.status = ?`,
      [code, status],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.length ? results : null);
        }
      }
    );
  });
};

export const getStudentClass = (studentCode) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${DB_NAME}.class_student, ${DB_NAME}.class WHERE class_student.studentCode = ? AND class_student.classCode = class.code`,
      [studentCode],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.length ? results : null);
        }
      }
    );
  });
};
