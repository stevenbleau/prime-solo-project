const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('in campaign.router GET');
    const query = `SELECT * FROM campaign`;
    pool.query(query)
      .then( result => {
        //returns the first item in the array (which is an object)
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR in campaign.router GET', err);
        res.sendStatus(500)
      })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;