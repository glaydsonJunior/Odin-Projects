

const data = require('pg')


const db = new data.Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'Inventory',
    password: 'admin',
    port: 5432
})

module.exports = {db}