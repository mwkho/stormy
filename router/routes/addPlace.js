const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("api/addPlace/addPlace", (req, res) => {
    // Code for non hard coded user ID const userID = req.session['user_id'];
    const lat = req.body.lat
    const lon = req.body.lon
    const type = req.body.type
    const name = req.body.name
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
      .then(data => console.log(type))
      .catch(err => {
        console.log("________", err.message);
        res
          .status(500)
          .json({ error: err.message });
      });

  });
  return router;
};

