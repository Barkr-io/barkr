const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = process.env.PORT;
const router = require('./routes/local.router');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/', router);

app.use('*', (req, res) => {
  res.status(404).send("404 Page Not Found")
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}!`));
