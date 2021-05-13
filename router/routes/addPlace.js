const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/:coordinates/:type/:name", (req, res) => {
    // Code for non hard coded user ID const userID = req.session['user_id'];
    const coordinates = req.params.coordinates
    const type = req.params.type
    const name = req.params.name

    db.query(`
    INSERT INTO places (coordinates, type, name)
    VALUES ('${coordinates}', '${type}', '${name}' ))
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