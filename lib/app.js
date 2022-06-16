const app = express();
const express = require('express');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/planes', require('./controllers/planes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
