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
          resolve(results);
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
          resolve(results.length ? results[0] : undefined);
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
      [...values, ...Object.values(data)],
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
