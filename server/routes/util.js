'use strict';

const knex = require('../../knex');

function getTasks(list) {
  const promise = new Promise((resolve, reject) => {
    knex('tasks')
    .where('list_id', list.id)
    .orderBy('id')
    .returning('*')
    .then((tasks) => {
      const listObj = {
        id: list.id,
        title: list.title,
        tasks
      }

      resolve(listObj);
    });
  });

  return promise;
}

function getLists() {
  return knex('lists')
    .returning('*')
    .then((lists) => {
      const promises = [];

      for (const list of lists) {
        promises.push(getTasks(list));
      }

      return Promise.all(promises);
    })
    .then((lists) => {
      return lists;
    })
}

module.exports = {
  getTasks,
  getLists
}
