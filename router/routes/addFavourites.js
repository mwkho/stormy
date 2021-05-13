const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/:id", (req, res) => {
    // Code for non hard coded user ID const userID = req.session['user_id'];
    const userID = 1
    const place_id = req.params.id

    
    db.query(`
    INSERT INTO favourites (place_id, user_id)
    SELECT ${place_id}, $1
    WHERE NOT EXISTS (
      SELECT 1 FROM favourites WHERE place_id = ${place_id}
    );
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
