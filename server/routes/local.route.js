const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/user", userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.users);
});

router.post("/user", userController.postUser, (req, res) => {
  res.status(200).send("Saved to DB!", req.body.email);
});

router.delete("/user", userController.deleteUser, (req, res) => {
  res.status(200).send("User Deleted", req.body.email);
});

module.exports = router;
