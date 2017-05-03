
exports.seed = function(knex) {
  return knex('tasks').del()
    .then(() => {
      return knex('tasks').insert([
        {
          id: 1,
          list_id: 1,
          task: 'Do laundry'
        },
        {
          id: 2,
          list_id: 1,
          task: 'Do my homework'
        },
        {
          id: 3,
          list_id: 1,
          task: 'Think of 5 project ideas'
        },
        {
          id: 4,
          list_id: 1,
          task: 'Read tomorrow\'s lecture'
        },
        {
          id: 5,
          list_id: 1,
          task: 'Find time to shower'
        },
        {
          id: 6,
          list_id: 1,
          task: 'Do 30 minutes of Code Wars'
        },
        {
          id: 7,
          list_id: 2,
          task: 'Go to school'
        },
        {
          id: 8,
          list_id: 2,
          task: 'Make dinner'
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tasks_id_seq', (SELECT MAX(id) FROM tasks));");
    });
};
