const pool = require("../models/UserModel");

let userList;

if (process.env.NODE_ENV === 'test') {
  writeLocation = `${__dirname}/markets.test.json`;
  userList = JSON.parse(fs.readFileSync(writeLocation));
}

const userController = {};

userController.getUsers = (req, res, next) => {
  let dbQuery = "SELECT * FROM user_table";
  pool.query(dbQuery)
  .then(result => {
    res.locals.users = result.rows;
    next();
  })
  .catch(err => console.error(err));
};

userController.postUsers = (req, res, next) => {
  const { email, first_name, last_name, password } = req.body;

  const values = [email, first_name, last_name, password];
  let dbQuery = `INSERT INTO user_table (email, first_name, last_name, password) VALUES ($1, $2, $3, $4)`;

  pool.query(dbQuery, values)
  .then(() => next())
  .catch(err => console.error(err));
};

userController.deleteUsers = (req, res, next) => {
  const { email } = req.body;
  let dbQuery = "DELETE FROM user_table WHERE email=($1)";

  pool.query(dbQuery, [email])
  .then(() => next())
  .catch(err => console.error(err));
};

module.exports = userController;
