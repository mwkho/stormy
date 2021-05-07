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

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
