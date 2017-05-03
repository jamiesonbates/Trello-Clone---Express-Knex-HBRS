exports.up = function(knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments();
    table
      .integer('list_id')
      .references('id')
      .inTable('lists')
      .onDelete('CASCADE');
    table.string('task');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
