
exports.up = function(knex) {
  return knex.schema.createTable('comments', table => {
    table.bigIncrements('id');
    table.text('content');
    table.integer('post_id').references('posts.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
