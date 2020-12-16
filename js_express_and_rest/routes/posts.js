const express = require('express');
const knex = require('../db/client');

const router = express.Router();

router.get('/new', (req, res) => {
  res.render('posts/new');
});

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