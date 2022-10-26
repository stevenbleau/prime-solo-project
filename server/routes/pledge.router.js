const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// GET CAMPAIGN DETAILS 
router.get('/user/:id', (req, res) => {

    const query = `SELECT * FROM "pledge"
                    WHERE "pledge"."donor_id" = $1;`;
    pool.query(query, [req.params.id])
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get Details', err);
        res.sendStatus(500)
      })
  
  });



  router.get('/details/:id', (req, res) => {

    const query = `
                    SELECT * FROM "pledge"
                    INNER JOIN "item"
                    ON "item"."item_id" = "pledge"."item_id"
                    INNER JOIN "campaign"
                    ON "campaign"."id" = "pledge"."campaign_id"
                    INNER JOIN "user"
                    ON "user"."id" = "campaign"."user_id"
                    INNER JOIN "user" AS "donor"
                    ON "donor"."id" = "campaign"."user_id"
                    WHERE "pledge"."pledge_id" =$1;
                `;
    pool.query(query, [req.params.id])
      .then( result => {
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
