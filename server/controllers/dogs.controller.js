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
    name, age, breed, sex, size, owner_id,
  } = req.body;
  const values = [name, age, breed, sex, size, owner_id];
  const dbQuery = 'INSERT INTO dog_table (name, age, breed, sex, size, owner_id) VALUES ($1, $2, $3, $4, $5, $6)';
  pool.query(dbQuery, values).then(() => next()).catch((err) => res.status(500).send(err));
};

dogController.deleteDog = (req, res, next) => {
  const dbQuery = 'DELETE FROM dog_table WHERE id=($1)';
  pool.query(dbQuery, [req.body.id]).then(() => next()).catch((err) => res.status(500).send(err));
};

module.exports = dogController;
