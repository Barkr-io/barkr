/* eslint-disable camelcase */
const pool = require('../models/UserModel');

const dogController = {};

dogController.getDogs = (req, res, next) => {
  const dbQuery = 'SELECT * FROM dog_table';
  pool.query(dbQuery).then((response) => {
    res.locals.dogs = response.rows;
    next();
  });
};

dogController.postDog = (req, res, next) => {
  const {
    email, pet_name, age, image, breed, sex, size,
  } = req.body;
  const values = [email, pet_name, age, image, breed, sex, size];
  const dbQuery = 'INSERT INTO dog_table (name, age, breed, sex, size) VALUES ($1, $2, $3, $4, $5)';
  pool.query(dbQuery, values).catch((err) => res.status(500).send(err));
  next();
};

dogController.deleteDog = (req, res, next) => {
  const dbQuery = 'DELETE FROM dog_table WHERE id=($1)';
  pool.query(dbQuery, [req.body.id]).catch((err) => res.status(500).send(err));
  next();
};

module.exports = dogController;
