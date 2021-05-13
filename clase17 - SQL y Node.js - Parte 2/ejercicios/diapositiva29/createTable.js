const options = require('./db/mariaDB');
const knex = require(knex)(options);

knex.schema.createTable('articles', table => {
    table.string('name', [15])
    table.string('sku', [10])
    table.float('price')
    table.integer('stock')
    table.increments('id')
})
    .then(() => console.log(`table Created`))
    .catch((err) => {console.log(err); throw err})
    .finally(() => {
        knex.destroy();
    });