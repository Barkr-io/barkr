const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');
const dogController = require('../controllers/dogs.controller');

//USER REQUESTS / RESPONSES
router.get('/user', userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.users);
});

router.post('/user', userController.postUser, (req, res) => {
  res.status(200).send('Saved to DB!');
});

router.delete('/user', userController.deleteUser, (req, res) => {
  res.status(200).send('User Deleted');
});

//DOG REQUESTS / RESPONSES
router.get('/dog', dogController.getDogs, (req, res) => {
  res.status(200).json(res.locals.dogs);
});

router.post('/dog', dogController.postDog, (req, res) => {
  res.status(200).send('Saved to DB!');
});

router.delete('/dog', dogController.deleteDog, (req, res) => {
  res.status(200).send('Doggo Deleted');
});

module.exports = router;
