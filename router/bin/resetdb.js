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
