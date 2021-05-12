const getBulletin = require("./helper/getAvalancheBulletin")
const getHourlyWeather = require("./helper/getHourlyWeather")

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8000;


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

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
