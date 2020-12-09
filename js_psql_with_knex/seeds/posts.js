const { fake } = require('faker');
const faker = require('faker');

// knex seed:run
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // insert into posts
      const posts = Array.from({length: 1000}).map(() => {
        return {
          title: faker.company.catchPhrase(),
          content: faker.lorem.paragraph(),
          imageUrl: faker.image.imageUrl(),
          createdAt: faker.date.past()
        }
      });
      return knex('posts').insert(posts);
    })
    .then(n => {
      return knex('posts').select('id')
    })
    .then(records => {
      return Promise.all(records.map(record => {
        return knex('comments').insert({
          post_id:  parseInt(record.id),
          content: faker.lorem.paragraph()
        })
      }))
    })
    .then(n => {
      console.log(n);
    })
    .catch((err) => {
      console.log(err);
    })
};
