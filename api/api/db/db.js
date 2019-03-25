const { Pool, Client } = require('pg');
const dotenv = require('dotenv').config();
const {adminTable, suscriberTable, reviewsTable, propertyTable, ownerTable, listingTable } = require('./schema')
const connectionString = process.env.DATABASE_URL;
// console.log(process.env.DATABASE_URL)

// dotenv.config();

const client = new Client(connectionString);

// const { Pool } = require('pg');

// const dotenv = require('dotenv');

// dotenv.config();

const pool = new Pool({
  connectionString
});

const query = function (text, params){
  return new Promise((resolve, reject) => {
    pool.query(text, params)
    .then((res) => {
      resolve(res);
    })
    .catch((err) => {
      reject(err);
    })
  })
}


const createTables = async () => {
  try{
      await client.connect();
      await client.query(adminTable);
      await client.query(reviewsTable);
      await client.query(ownerTable);
      await client.query(propertyTable);
      await client.query(suscriberTable);
      await client.query(listingTable);
      await client.end()
      console.log('Tables created successfully');
      process.exit(0)
  }catch(e){
      console.log('Something bad happened', e)
  }
  
}

const dropTables = async () => {
  await client.connect();
  await client.query('DROP TABLE IF EXISTS admins;');
  console.log('DROPPED TABLE admins')

  await client.query('DROP TABLE IF EXISTS property;');
  console.log('DROPPED TABLE property')

  await client.query('DROP TABLE IF EXISTS houses;');
  console.log('DROPPED TABLE houses');

  await client.query('DROP TABLE IF EXISTS owner;');
  console.log('DROPPED TABLE owner');

  await client.query('DROP TABLE IF EXISTS reviews;');
  console.log('DROPPED TABLE reviews');

  await client.query('DROP TABLE IF EXISTS subscribers;');
  console.log('DROPPED TABLE subscribers')
  process.exit(0);
}

module.exports = {
  createTables,
  dropTables,
  pool,
  query
}

require('make-runnable')


