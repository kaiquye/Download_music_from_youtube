const configKnex = require('../../knexfile');
const connection = require('knex')(configKnex.development);

module.exports = connection;