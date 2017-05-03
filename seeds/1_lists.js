exports.seed = function(knex) {
  return knex('lists').del()
    .then(() => {
      return knex('lists').insert([
        {
          id: 1,
          title: 'My List'
        },
        {
          id: 2,
          title: 'Your List'
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('lists_id_seq', (SELECT MAX(id) FROM lists));");
    });
};
