'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.post('/list', (req, res, next) => {
  const title = req.body.title;

  knex('lists')
    .insert({ title })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/list/:id', (req, res, next) => {
  const listId = req.params.id;

  knex('lists')
    .del()
    .where('id', listId)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
