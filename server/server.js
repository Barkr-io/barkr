const express = require('express');

const app = express();
// const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = '3000'
// const localRouter = require('./routes/local.route');

// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const userController = require('./controllers/user.controller');
const dogController = require('./controllers/dogs.controller');

//USER REQUESTS / RESPONSES
app.get('/user', userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.users);
});

//DOG REQUESTS / RESPONSES
app.get('/dog', dogController.getDogs, (req, res) => {
  res.status(200).json(res.locals.dogs);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.use('/build', express.static(path.join(__dirname, '../build')));

// app.use('/', localRouter);

app.use('*', (req, res) => {
  res.status(404).send("404 Page Not Found")
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}!`));
