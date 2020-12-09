
exports.up = function(knex) {
  return knex.schema.table('posts', table => {
    table.string('imageUrl'); // the name of columns should be snake_case
    // camelCase
    // snake_case
  })
};

exports.down = function(knex) {
  return knex.schema.table('posts', table => {
    table.dropColumn('imageUrl');
  })
};
