const knex = require('knex');
const knexConfig = require('../knexfile');

module.exports = knex(knexConfig.development);

// const db = knex(knexConfig.development);

// module.exports = db;
