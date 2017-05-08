'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');
const knex = require('../knex');
const util = require('./routes/util');

const app = express();
const port = process.env.PORT || 8000;

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.disable('x-powered-by');

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(express.static(path.join('public')));

app.use('/api', require('./routes/lists'));
app.use('/api', require('./routes/tasks'));

app.get('/', (req, res, next) => {
  util.getLists()
    .then((lists) => {
      res.render('home', { lists });
    })
    .catch((err) => {
      next(err);
    });
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
