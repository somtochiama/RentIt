const { Pool, Client } = require('pg');
const dotenv = require('dotenv');
const {adminTable, suscriberTable, reviewsTable, propertyTable, ownerTable } = require('./schema')
const connectionString = process.env.DATABASE_URL;
// console.log(process.env.DATABASE_URL)

dotenv.config();

const client = new Client();

// const { Pool } = require('pg');

// const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool();

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

  await client.query('DROP TABLE IF EXISTS houses;');
  console.log('DROPPED TABLE houses');

  await client.query('DROP TABLE IF EXISTS owners;');
  console.log('DROPPED TABLE owners');

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

/* const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});


pool.query(adminTable, (err, res) => {
  console.log(err, res);
});

pool.query(suscriberTable, (err, res) => {
  console.log(err, res);

});


pool.query(reviewsTable, (err, res) => {
  console.log(err, res);
});


pool.query(ownerTable, (err, res) => {
  console.log(err, res);
});


pool.query(propertyTable, (err, res) => {
  console.log(err, res);
});




module.exports = pool;
 */
