const pgp = require("pg-promise")()

const db = pgp('postgres://postgres:kikalinda@localhost:5432/postgres');

try {
    db.query("SELECT name FROM employees").then((result) => console.log(result))
} catch (error) {
    console.error(error)
}

module.exports = db;