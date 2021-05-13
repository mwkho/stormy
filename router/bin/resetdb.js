const fs = require('fs');
// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('../db');
const db = new Pool(dbParams);
db.connect();

const runSchemaFiles = function (fn) {
  console.log(`-------------> Loading Schema Files ...`);
  const sql = fs.readFileSync(`../db/schema/${fn}.sql`, 'utf8');
  return db.query(sql)

};

const runSeedFile = (fn) => {
  console.log(`-------------> Loading Seed File ...${fn}`);
  const sql = fs.readFileSync(`../db/seeds/${fn}.sql`, 'utf8');
  return db.query(sql)
}

runSchemaFiles("01_users")
.then(() => runSchemaFiles("04_places"))
.then(() => runSchemaFiles("02_favourites"))
.then(() => runSchemaFiles("03_comments"))
.then(() => runSeedFile("01_users"))
.then(() => runSeedFile("04_places"))
.then(() => runSeedFile("02_favourites"))
.then(() => runSeedFile("03_comments"))
.catch(err => console.log(err.message))
