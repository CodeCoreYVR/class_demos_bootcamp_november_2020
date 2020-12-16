const express = require('express');
const knex = require('../db/client');

const router = express.Router();

// Index
router.get('/', (req, res) => {
  knex('posts')
    .orderBy('created_at', 'desc')
    .then(posts => {
      res.render('posts/index', { posts: posts });
    });
});

// New
router.get('/new', (req, res) => {
  res.render('posts/new', { post: false });
});

// In this url, all the words prefixed with : are called URL params.
// You can have any value as the url params and it can be accessed via the name provided
router.get('/:id', (req, res) => {
// we can grab the id using req.params.id
// Example:
// If we have a url like '/:id/:blue/:red and someone visits this url http://localhost:3000/posts/hello/20/5
// our req.params will look like { id: 'hello', blue: 20, red: 5}
  knex('posts')
    .where('id', req.params.id)
    .first()
    // .first() is a method built into knex it will return only the first record of the array of records from a query
    .then(post => {
      if (!post) {
        res.send('No Post Found');
      } else {
        res.render('posts/show', { post:post });
      }
    });
});

// Create
router.post('/', (req, res) => {
  knex('posts')
    .insert({
      title: req.body.title,
      image_url: req.body.image_url,
      content: req.body.content
    })
    .returning('*')
    .then(posts => {
      // knex usually returns an array of objects.
      // so we use posts[0] to make sure we grab the object we want
      const post = posts[0];
      res.redirect(`/posts/${post.id}`);
    });
});

// EDIT
router.get('/:id/edit', (req, res) => {
  knex('posts')
    .where('id', req.params.id)
    .first()
    .then(post => {
      res.render('posts/edit', { post: post });
    });
});

// UPDATE
router.patch('/:id', (req, res) => {
  knex('posts')
    .where('id', req.params.id)
    .update({
      title: req.body.title,
      image_url: req.body.image_url,
      content: req.body.content
    })
    .then(() => {
      res.redirect(`/posts/${req.params.id}`);
    });
})

// Destroy
// DELETE /posts/:id
router.delete('/:id', (req, res) => {
  knex('posts')
    .where('id', req.params.id)
    .del()
    .then(() => {
      res.redirect('/posts');
    });
});

module.exports = router;