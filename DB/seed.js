require('dotenv').config();
const createFlavor = require(`./flavors`)
const client = require(`./client`);

const dropTables = async () => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS flavors;
      `)
      console.log(`TABLES DROPPED`)
  } catch(error) {
    console.log(`Error while creating Table:`, error);
  }
}

const createTables = async () => {
  try {
    await client.query(
      `
      CREATE TABLE flavors (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) NOT NULL
        );
        `
      )
      console.log(`TABLE flavors CREATED!`)
  } catch(error) {
    console.log(`Error while creating Table:`, error);
  }
}


const syncAndSeed = async () =>{
  try{
    await client.connect();
    console.log(`Connected to DB!`)
    await dropTables();
    await createTables();
    client.end();
  } catch(error) {
    console.log(error)
  }
}

syncAndSeed();
