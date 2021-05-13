const options = require('./db/mariaDB');
const knex = require(knex)(options);

const articles = [
    {name: "Mouse Logitech Gaming G703 Lightspeed Wireless", sku: "LGMMGLW", price: 10400, stock: 10},
    {name: "Mousepad de Tela Rigida G440", sku: "LGMTRG", price: 2239, stock: 10},
    {name: "Auriculares Logitech G Pro X Gaming", sku: "LGALGPXG", price: 19999, stock: 10},
    {name: "Kolink Void X Dual", sku: "kvxd", price: 10800, stock: 10},
    {name: "Teclado Logitech Mecanico Pro X Clicky", sku: "LGMPXC", price: 15999, stock: 10}
];

knex('articles').insert(articles)
    .then(() => console.log('data inserted'))
    .catch((err) => {console.log(err); throw err})
    .finally(() => {
        knex.destroy();
    });