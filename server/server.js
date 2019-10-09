const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.use('/build', express.static(path.join(__dirname, '../build')));
app.listen(3000, () => {
    console.log('Listening on port 3000')
})