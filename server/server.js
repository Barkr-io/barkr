const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const port = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Temp
const userController = require("./controllers/user.controller");
app.get("/getUsers", userController.getUsers, (req, res) => {
  res.send("Test Response");
});

// End of Temp

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.use('/build', express.static(path.join(__dirname, '../build')));

// const registerRouter = require("./routes/register.route");
// app.use("/register", registerRouter);

app.use((req, res) => res.status(404).send("404 Page Not Found"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
