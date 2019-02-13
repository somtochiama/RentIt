const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});


const queryText =
  `CREATE TABLE IF NOT EXISTS
    admins(
      id SERIAL PRIMARY KEY ,
      email VARCHAR(128) NOT NULL,
      password VARCHAR(128) NOT NULL,
      salt VARCHAR(128) NOT NULL,
      created_date TIMESTAMP DEFAULT NOW()
    )`;
  

pool.query(queryText, (err, res) => {
  // console.log(err, res);
});

const queryText1 =
  `CREATE TABLE IF NOT EXISTS
    subscribers(
      id SERIAL PRIMARY KEY ,
      email VARCHAR(128) NOT NULL UNIQUE,
      created_date TIMESTAMP DEFAULT NOW()
    )`;

pool.query(queryText1, (err, res) => {
// console.log(err, res);

});

const queryText2=
  `CREATE TABLE IF NOT EXISTS
    reviews(
      id SERIAL PRIMARY KEY ,
      email VARCHAR(128) NOT NULL UNIQUE,
      created_date TIMESTAMP DEFAULT NOW()
    )`;

pool.query(queryText2, (err, res) => {
  console.log(err, res);
});



module.exports = pool;

