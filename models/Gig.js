const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  technologies: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  budget: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  contact_email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Gig;
