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
      rating FLOAT(10) NOT NULL,
      review VARCHAR(400) NOT NULL,  
      suggestion VARCHAR(400),
      created_date TIMESTAMP DEFAULT NOW()
    )`;

pool.query(queryText2, (err, res) => {
  console.log(err, res);
});


const queryText3=
  `CREATE TABLE IF NOT EXISTS
    owner(
      id SERIAL PRIMARY KEY ,
      email VARCHAR(128) NOT NULL UNIQUE,
      phone_number INTEGER NOT NULL,
      created_date TIMESTAMP DEFAULT NOW()
    )`;

pool.query(queryText3, (err, res) => {
  console.log(err, res);
});

const queryText4 =
  `CREATE TABLE IF NOT EXISTS
    property(
      id SERIAL PRIMARY KEY ,
      location VARCHAR(128) NOT NULL ,
      description VARCHAR(225) NOT NULL,
      status VARCHAR(128) NOT NULL,
      address VARCHAR(225) NOT NULL,
      price INTEGER NOT NULL,
      type VARCHAR(128) NOT NULL,
      owner_id INTEGER REFERENCES owner(id),     
      created_date TIMESTAMP DEFAULT NOW()
    )`;

pool.query(queryText4, (err, res) => {
  console.log(err, res);
});




module.exports = pool;

