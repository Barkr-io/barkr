const pool = require("../models/UserModel");

const userController = {};

userController.getUsers = (req, res, next) => {
  let dbQuery = "SELECT * FROM User_table";
  pool.query(dbQuery).then(response => {
    console.log("res in userController:", response.rows);
    res.status(200).json(response.rows);
  });
};

userController.postUsers = (req, res, next) => {
  let dbQuery = "INSERT INTO User_table (email) VALUES ($1)";
  pool.query(dbQuery, req.body.email).catch(err => res.status(500).send(err));
  res.status(200).json(req.body.email);
};

userController.deleteUsers = (req, res, next) => {
  let dbQuery = "DELETE FROM User_table WHERE email=($1)";
  pool.query(dbQuery, req.body.email).catch(err => res.status(500).send(err));
  res.status(200).json(req.body.email);
};

module.exports = userController;
