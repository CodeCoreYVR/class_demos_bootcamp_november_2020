const knex = require('./client');

knex('comments')
  .join('posts', 'posts.id', 'comments.post_id')
  .where('comments.id', 1)
  .select('comments.id', 'posts.title', 'comments.content')
  .then(records => {
    console.log(records);
  })
  .catch(err => {
    console.log(err);
  })

  // select * from "comments" inner join "posts" on "posts"."id" 
  // = "comments"."post_id" where "id" = $