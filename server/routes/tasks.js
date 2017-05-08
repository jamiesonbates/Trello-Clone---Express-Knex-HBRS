'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.post('/task', (req, res, next) => {
  const list_id = req.body.listId;
  const task = req.body.task;

  knex('tasks')
    .insert({ list_id, task })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      next(err);
    });
});

router.put('/task/:id', (req, res, next) => {
  const id = req.params.id;
  const task = req.body.task;

  knex('tasks')
    .update('task', task)
    .where('id', id)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/task/:id', (req, res, next) => {
  const id = req.params.id;

  knex('tasks')
    .del()
    .where('id', id)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
