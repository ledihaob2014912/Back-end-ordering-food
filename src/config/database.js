require("dotenv").config();

//const knex = require("../../knexfile.js");
const knex = require("knex");

//const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

module.exports = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "db_restaurant",
  },
  pool: { min: 0, max: 10 },
});
// check that connection work
