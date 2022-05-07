// Update with your config settings.
require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password:'1234',
            database: 'musica',
        },
    },
};