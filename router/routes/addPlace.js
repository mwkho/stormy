const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/:lat/:lon/:type/:name", (req, res) => {
    // Code for non hard coded user ID const userID = req.session['user_id'];
    const lat = req.params.lat
    const lon = req.params.lon
    const type = req.params.type
    const name = req.params.name
    console.log("name", name)
    console.log("type", type)
    console.log("lat", lat)
    console.log("lon", lon)

    db.query(`
    INSERT INTO places (lat, lon, type, name)
    SELECT ${lat}, ${lon}, '${type}', '${name}' 
    WHERE NOT EXISTS (
      SELECT 1 FROM places WHERE lat= ${lat}
    );`)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log("________", err.message);
        res
          .status(500)
          .json({ error: err.message });
      });

  });
  return router;
};

