
exports.up = function(knex) {
  return knex.schema.createTable('comments', table => {
    table.bigIncrements('id');
    table.text('content');
    table.integer('post_id').references('posts.id');
    // comments table will now have a post_id column that references the posts table id column
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
