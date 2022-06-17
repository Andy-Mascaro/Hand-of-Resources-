const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/planes', require('./controllers/planes'));
app.use('/foods', require('./controllers/foods'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
