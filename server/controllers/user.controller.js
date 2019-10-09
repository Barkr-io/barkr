const pool = require("../models/UserModel");

const userController = {};

userController.getUsers = (req, res, next) => {
  let dbQuery = "SELECT * FROM user_table";
  pool.query(dbQuery).then(response => {
    res.locals.users = response.rows;
    next();
  });
};

userController.postUser = (req, res, next) => {
  const { email, first_name, last_name, password } = req.body;
  const values = [email, first_name, last_name, password];
  let dbQuery = `INSERT INTO User_table (email, first_name, last_name, password) VALUES ($1, $2, $3, $4)`;
  pool.query(dbQuery, values).catch(err => res.status(500).send(err));
  next();
};

userController.deleteUser = (req, res, next) => {
  let dbQuery = "DELETE FROM user_table WHERE email=($1)";
  pool.query(dbQuery, [req.body.email]).catch(err => res.status(500).send(err));
  next();
};

module.exports = userController;
