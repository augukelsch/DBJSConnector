const express = require('express')
const app = express()
const port = 3000
const db = require("./database/db.js")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})