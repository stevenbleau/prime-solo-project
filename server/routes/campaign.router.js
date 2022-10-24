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


// GET CAMPAIGN DETAILS 
router.get('/:id', (req, res) => {

    const query = `SELECT * FROM "campaign"
                    INNER JOIN "item"
                    ON "item"."campaign_id" = "campaign"."id"
                    INNER JOIN "user"
                    ON "user"."id" = "campaign"."user_id"
                    WHERE "campaign"."id" = $1;`;
    pool.query(query, [req.params.id])
      .then( result => {
        //returns the first item in the array (which is an object)
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get Details', err);
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