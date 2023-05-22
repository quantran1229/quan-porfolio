const { resp } = require('./utils')
require('dotenv').config()
const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
})

module.exports.handler = async (event) => {
  const list = await pool.query('SELECT * FROM pages')
  return resp(200, "Success", list.rows)
};
