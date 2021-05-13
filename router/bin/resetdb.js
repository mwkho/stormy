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
