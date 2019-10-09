const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const oAuthController = require("../controllers/oAuth.controller");

// User sign-up without oAuth
router.post("/", (req, res, next) => {
  authController.registerUser(req, res, next);
});

// User sign-up with Google oAuth
router.post("/googleOAuth", (req, res, next) => {
  oAuthController.registerUser(req, res, next);
});
