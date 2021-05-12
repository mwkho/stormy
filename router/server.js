const getBulletin = require("./helper/getAvalancheBulletin")
const getHourlyWeather = require("./helper/getHourlyWeather")

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8000;
const morgan = require('morgan')

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('../db/db');
const db = new Pool(dbParams);
db.connect();

// Separated Routes for each Resource
const addCommentsRoutes = require("./routes/addComments");
const addFavouritesRoutes = require("./routes/addFavourites");
const getCommentsRoutes = require("./routes/getComments");
const getFavouritesRoutes = require("./routes/getFavourites");

// Mount all resource routes
App.use("/api/addComments", addCommentsRoutes(db));
App.use("/api/addFavourites", addFavouritesRoutes(db));
App.use("/api/getComments", getCommentsRoutes(db));
App.use("/api/getFavourites", getFavouritesRoutes(db));

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(morgan('dev'));

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
