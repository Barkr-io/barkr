module.exports = {
  checkUniqueEmail: (req, res, next) => {
    const { email } = req.body;
    // Do a check if email is already in use
    const dbQuery = `SELECT EXISTS(SELECT 1 FROM User_table WHERE email=${email}`;
  },
  registerUser: (req, res, next) => {
    const { email, password } = req.body;
    // TODO: Input a new User into database
  },
};
