exports.up = function(knex) {
  return knex.schema.createTable('lists', (table) => {
    table.increments();
    table.string('title');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lists');
};
