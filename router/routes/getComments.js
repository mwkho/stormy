const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    // Code for non hard coded user ID const userID = req.session['user_id'];
    const userID = 1
    db.query(`
    SELECT * FROM comments
    JOIN places ON places.id = place_id
    WHERE user_id = $1;
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