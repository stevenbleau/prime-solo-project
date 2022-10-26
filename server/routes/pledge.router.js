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

  router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "pledge" ("pledge_description", "pledge_quantity", "pledge_message", "pledge_image_url", "donor_id", "item_id", "campaign_id") VALUES ($1, $2, $3, $4, $5, $6, $7);'
    pool.query(queryText, [req.body.pledge_description, req.body.pledge_quantity, req.body.pledge_message, req.body.pledge_image_url, req.body.donor_id, req.body.item_id, req.body.campaign_id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;
