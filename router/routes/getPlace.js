const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/:lat/:lon", (req, res) => {
    const lat = req.params.lat
    const lon = req.params.lon
    db.query(`
    SELECT * FROM places
    WHERE lat = ${lat} 
    ;
    `,
    )
      .then(data => {
        res.send(data);
        //console.log(data)
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

