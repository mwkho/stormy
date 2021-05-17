const getBulletin = require("./helper/getAvalancheBulletin")
const getHourlyWeather = require("./helper/getHourlyWeather")

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8000;
const morgan = require('morgan')
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(morgan('dev'));
// Separated Routes for each Resource
const add = require("./routes/add");
const get = require("./routes/get");
const del = require("./routes/delete");

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('../db/db');
const db = new Pool(dbParams);
db.connect();

// Mount all resource routes
App.use("/add", add(db));
App.use("/get", get(db));
App.use("/delete", del(db));


// Sample GET route
App.get('/', (req, res) => res.json({
  message: "Seems to work!",
}));

App.get('/index', (req, res) => {
res.redirect('/app/src/index')
})

// post route to get weather and avalanche information
App.post("/information", (req, res) => {
  const {lat, lon}= req.body.poi
  let information = {"weather":{} , "bulletin":{}}
  Promise.all([getBulletin([lat, lon]), getHourlyWeather({lat,lon})])
  .then((results) => {
    information.bulletin = results[0]
    information.weather = results[1]
    res.send(information)
  })
  .catch((err) => err.data)
})


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
