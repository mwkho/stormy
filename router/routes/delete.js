const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/favourite", (req, res) => {
    const placeId = req.body.id
    //code for non hard coded users const userId = req.session['user_id'];
    const userId = 1
    console.log(`placeID ${placeId} userId ${userId}`);
    const sql = `
    DELETE FROM favourites
    WHERE user_id = $1
    AND place_id = $2
    ;`

    db.query(sql, [userId, placeId])
      .then(res.status(200))
      .then(res.end())
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ error: err.message });
      });

  });
  return router;
};