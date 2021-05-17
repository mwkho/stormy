const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/comment", (req, res) => {
    const placeId = req.body.placeId;
    //code for non hard coded users const userId = req.session['user_id'];
    const userId = 1
    const comment = req.body.comment.trim();
    const sql = `
    INSERT INTO comments (user_id, place_id, content, comment_date)
    VALUES ($1, $2, $3, NOW());
    `;
    if (comment) {
    db.query(sql, [userId, placeId, comment])
    .then(res.status(200))
    .then(res.end())
    .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ error: err.message });
      });
    }
    res.send(200).end()
  });

    router.post("/favourites", (req, res) => {
    // Code for non hard coded user ID const userID = req.session['user_id'];
    const userId = 1
    const placeId = req.body.placeId
    
    db.query(`
    INSERT INTO favourites (place_id, user_id)
    SELECT $1, $2
    WHERE NOT EXISTS (
      SELECT 1 FROM favourites WHERE place_id = $3
    );
    `, [placeId, userId, placeId])
    .then(res.status(200))
    .then(res.end())
      .catch(err => {
        console.log("________", err.message);
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  router.post("/place", (req, res) => {
    // Code for non hard coded user ID const userID = req.session['user_id'];
    const lat = req.body.lat
    const lon = req.body.lon
    const type = req.body.type
    const name = req.body.name
    const region = req.body.region

    console.log("name ", name)
    console.log("name ", region)


    db.query(`
    INSERT INTO places (lat, lon, type, name, region)
    SELECT $1, $2, $3, $4, $5
    WHERE NOT EXISTS (
      SELECT 1 FROM places 
      WHERE lat = $1
      AND lon = $2
    );`, [lat, lon, type, name, region])
    .then(res.status(200))
    .then(res.end())
    .catch(err => {
        console.log("________", err.message);
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  return router;
};