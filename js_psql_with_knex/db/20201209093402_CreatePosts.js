// Knex.js
// Will generate SQL code that inserts a table
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
    table.bigIncrements('id'); // create a column called id with the type of SERIAL
    table.string('title'); // create a column called title with the type of VARCHAR
    table.text('content'); // create a column called content with the type of TEXT
    table.timestamp('createdAt').defaultTo(knex.fn.now()); // create a column called createdAt with the type of timestamp which also defaults to the machine time (current time)
  });

  // knex will turn the above into something like:
  // "CREATE TABLE posts id SERIAL, title VARCHAR(50), content TEXT, createdAt TIMESTAMP;"
};

// used to undo the changes made in the up function
exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
