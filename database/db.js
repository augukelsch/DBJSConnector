const pgp = require("pg-promise")()
const { join } = require("node:path")

const db = pgp('postgres://postgres:kikalinda@localhost:5432/postgres');

const filePath = join(__dirname, "create-tables.sql")
const query = new pgp.QueryFile(filePath)

try {
    db.query(query).then((response)=>console.log(response))
} catch (error) {
    console.error(error)
}
module.exports = db;