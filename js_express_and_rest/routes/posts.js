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
  res.render('posts/new');
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
    .then(post => {
      res.send(post);
    });
});

module.exports = router;