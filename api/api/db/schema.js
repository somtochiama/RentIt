const adminTable =
  `CREATE TABLE IF NOT EXISTS
    admins(
      id SERIAL PRIMARY KEY ,
      email VARCHAR(128) NOT NULL,
      password VARCHAR(128) NOT NULL,
      salt VARCHAR(128) NOT NULL,
      created_date TIMESTAMP DEFAULT NOW()
    )`;

const suscriberTable =
`CREATE TABLE IF NOT EXISTS
    subscribers(
    id SERIAL PRIMARY KEY ,
    email VARCHAR(128) NOT NULL UNIQUE,
    created_date TIMESTAMP DEFAULT NOW()
    )`;
  
const reviewsTable =
`CREATE TABLE IF NOT EXISTS
    reviews(
    id SERIAL PRIMARY KEY ,
    rating FLOAT(10) NOT NULL,
    review VARCHAR(400) NOT NULL,  
    suggestion VARCHAR(400),
    created_date TIMESTAMP DEFAULT NOW()
    )`;

const ownerTable=
    `CREATE TABLE IF NOT EXISTS
        owner(
        id SERIAL PRIMARY KEY ,
        name VARCHAR(128) NOT NULL UNIQUE,
        email VARCHAR(128) NOT NULL UNIQUE,
        phone_number INTEGER NOT NULL,
        created_date TIMESTAMP DEFAULT NOW()
        )`;

const propertyTable =
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

const listingTable =
`CREATE TABLE IF NOT EXISTS
    listing(
    id SERIAL PRIMARY KEY ,
    location VARCHAR(128) NOT NULL ,
    description VARCHAR(225) NOT NULL,
    status VARCHAR(128) NOT NULL,
    address VARCHAR(225) NOT NULL,
    price INTEGER NOT NULL,
    type VARCHAR(128) NOT NULL,
    owner_name VARCHAR(128) NOT NULL,     
    owner_email VARCHAR(128) NOT NULL,     
    owner_phone_number INTEGER NOT NULL,     
    created_date TIMESTAMP DEFAULT NOW()
    )`;

module.exports = {
    adminTable,
    suscriberTable,
    reviewsTable,
    propertyTable,
    listingTable,
    ownerTable
}