const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/:placeID/:comment", (req, res) => {
    const placeID = req.params.placeID;
    //code for non hard coded users const userId = req.session['user_id'];
    const userId = 1
    console.log(`placeID ${placeID} userId ${userId}`);
    const comment = req.params.comment;
    const sql = `
    INSERT INTO comments (user_id, place_id, content, comment_date)
    VALUES ($1, $2, $3, NOW());
    `;

    db.query(sql, [userId, placeID, comment])
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ error: err.message });
      });

  });
  return router;
};