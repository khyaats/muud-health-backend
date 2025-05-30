// Development (local) configuration - keep this for local use
// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });
// console.log("🔐 DB Password Type:", typeof process.env.DB_PASSWORD);
// module.exports = pool;

// Production/Test configuration using DATABASE_URL or TEST_DATABASE_URL
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const { Pool } = require('pg');

let connectionString;

// Use test DB in test mode, production DB otherwise
if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.TEST_DATABASE_URL;
} else {
  connectionString = process.env.DATABASE_URL;
}

const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === 'test' ? false : {
    rejectUnauthorized: false // Needed for Render's Postgres
  }
});

module.exports = pool;