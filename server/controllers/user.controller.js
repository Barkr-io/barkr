/* eslint-disable camelcase */
const pool = require('../models/UserModel');

const userController = {};

userController.getUsers = (req, res, next) => {
  const dbQuery = 'SELECT * FROM user_table';
  pool.query(dbQuery).then((response) => {
    res.locals.users = response.rows;
    next();
  });
};

userController.postUser = (req, res, next) => {
  const {
    email, first_name, last_name, password,
  } = req.body;
  const values = [email, first_name, last_name, password];
  const dbQuery = 'INSERT INTO user_table (email, first_name, last_name, password) VALUES ($1, $2, $3, $4)';
  pool.query(dbQuery, values).then(() => next()).catch((err) => res.status(500).send(err));
};

userController.deleteUser = (req, res, next) => {
  const dbQuery = 'DELETE FROM user_table WHERE email=($1)';
  pool.query(dbQuery, [req.body.email]).then(() => next()).catch((err) => res.status(500).send(err));
};

module.exports = userController;
