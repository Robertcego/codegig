const express = require('express');
const router = express.Router();

const db = require('../config/database');
const Gig = require('../models/Gig');

router.get('/', (req, res, next) => {
  Gig.findAll()
    .then((gigs) => {
      res.render('gigs', {
        gigs,
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/add', (req, res, next) => {
  res.render('add');
});

router.post('/add', (req, res, next) => {
  const data = {
    title: 'React Developer Example',
    technologies: 'React, JavaScript, HTML, CSS',
    budget: '$3000',
    description:
      'Looking for someone to help you build a full stack web app with React.js, javascript, and Node.js.',
    contact_email: 'user@mail.com',
  };

  let { title, technologies, budget, description, contact_email } = data;

  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
  })
    .then((gig) => {
      res.redirect('/gigs');
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
