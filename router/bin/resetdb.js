const fs = require('fs');
const { Client } = require('pg');
const dbParams = require('../db');
const db = new Client(dbParams);
db.connect

const runSchemaFiles = function () {
  console.log(`-------------> Loading Schema Files ...`);
  const schemaFilenames = fs.readdirSync('../db/schema');
  console.log('*********Schema files loaded')
  
  const schemas = []
  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`../db/schema/${fn}`, 'utf8');
    console.log(`\t-----------> Running: ${fn}`);
    schemas.push(db.query(sql))
  }
  
  return Promise.all(schemas)
};

<<<<<<< HEAD
const runSeedFile = (fn) => {
  console.log(`-------------> Loading Seed File ...`);
  const sql = fs.readFileSync(`../db/seeds/${fn}.sql`, 'utf8');
  return db.query(sql)
}

runSchemaFiles()
.then(runSeedFile("01_users"))
.then(runSeedFile("02_favourites"))
.then(runSeedFile("03_comments"))
.then(runSeedFile("04_places"))
.then(db.end())
=======
const runSeedFiles = () => {
  console.log(`-------------> Loading Seed Files ...`);
  const seedFilenames = fs.readdirSync('../db/seeds');
  console.log('*********Seed files loaded')

  const seeds = []
  for (const fn of seedFilenames) {
    const sql = fs.readFileSync(`../db/seeds/${fn}`, 'utf8');
    console.log(`\t-----------> Running: ${fn}`);
    seeds.push(db.query(sql))
  }
  return Promise.all(seeds)
}

runSchemaFiles()
.then(runSeedFiles())
>>>>>>> 5511c406c54cc0fba5b95d4fccbceb0fa9ebb7a8
