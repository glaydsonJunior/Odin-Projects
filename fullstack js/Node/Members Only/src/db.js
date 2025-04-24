

const data = require('pg')


const db = new data.Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'Inventory',
    password: 'admin',
    port: 5432
})


const tableUser = `
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ) not null unique,
    password VARCHAR ( 255 ) not null,
    member boolean default false
)
`

const tablePosts = `
CREATE TABLE IF NOT EXISTS posts(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	msg TEXT not null,
	author INTEGER,
	FOREIGN KEY (author) REFERENCES users(id)
)
`

function generateTables(){
    db.query(tableUser)
    db.query(tablePosts)
}
module.exports = {db, generateTables}