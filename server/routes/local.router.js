const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/user", userController.getUsers, (req, res, err) => {
    if(err) console.error(err);
    res.status(200).json(res.locals.users);
});

router.post("/user", userController.postUsers, (req, res, err) => {
    if(err) console.error(err);
    res.status(200).send('User has successfully signed up');
});

router.delete("/user", userController.deleteUsers, (req, res, err) => {
    res.status(200).send('User has been successfully been deleted');
});

module.exports = router;