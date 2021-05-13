const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/:id", (req, res) => {
    // Code for non hard coded user ID const userID = req.session['user_id'];
    const userID = 1

    
    db.query(`
    INSERT INTO favourites (place_id, user_id)
    VALUES (${req.params.id}, $1)
    `, [userID]
    )
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