const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/comments/:id", (req, res) => {
    db.query(`
    SELECT * FROM comments
    JOIN places ON places.id = place_id
    WHERE place_id = $1
    ORDER BY comment_date DESC;
    `, [req.params.id]
    )
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        console.log("________", err.message);
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  router.get("/favourites", (req, res) => {
    // Code for non hard coded user ID const userID = req.session['user_id'];
    const userId = 1
    db.query(`
    SELECT * FROM favourites
    JOIN places ON places.id = place_id
    WHERE user_id = $1;
    `, [userId]
    )
      .then(data => {
        res.status(200).send(data);
        //console.log(data)
      })
      .catch(err => {
        console.log("________", err.message);
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  router.get("/favourite/:id", (req, res) => {
    // Code for non hard coded user ID const userID = req.session['user_id'];
    const userId = 1
    const placeId = req.params.id
    db.query(`
    SELECT * FROM favourites
    JOIN places ON places.id = place_id
    WHERE user_id = $1 
    AND place_id = ${placeId};
    `, [userId]
    )
      .then(data => {
        res.status(200).send(data);
        //console.log(data)
      })
      .catch(err => {
        console.log("________", err.message);
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  router.get("/place/:lat/:lon", (req, res) => {
    const lat = req.params.lat
    const lon = req.params.lon
    db.query(`
    SELECT * FROM places
    WHERE lat = $1
    AND lon = $2 ;`, [lat, lon])
      .then(data => {
        res.status(200).send(data);
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