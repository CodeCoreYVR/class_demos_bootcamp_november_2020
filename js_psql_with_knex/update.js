const knex = require('./client');

knex('posts')
  .where('id', 1050)
  .update({
    title: 'apples'
  })
  .then(n => {
    console.log('updated n rows', n);
    knex.destroy();
  })
  .catch((err) => {
    console.log(err);
  })