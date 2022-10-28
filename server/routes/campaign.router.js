const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




//GET ALL CAMPAIGNS
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
                    JOIN "user"
                    ON "user"."id" = "campaign"."user_id"
                    WHERE "campaign"."id" = $1;`;
    pool.query(query, [req.params.id])
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get Details', err);
        res.sendStatus(500)
      })
  
  });

  // GET CAMPAIGN DETAILS 
router.get('/user/:id', (req, res) => {

  const query = `SELECT * FROM "campaign"
                  JOIN "user"
                  ON "user"."id" = "campaign"."user_id"
                  WHERE "user"."id" = $1;`;
  pool.query(query, [req.params.id])
    .then( result => {
      console.log('the user campaigns are: ', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get Details', err);
      res.sendStatus(500)
    })

});

//GET CAMPAIGN ITEM DETAILS
    router.get('/item/:id', (req,res) => {
        const query = `SELECT * FROM "item"
                        WHERE "campaign_id" = $1;`;
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
 * POST New Campaign
 */
 router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "campaign" ("title", "description", "campaign_image_url", "location", "user_id") VALUES ($1, $2, $3, $4, $5);'
    pool.query(queryText, [req.body.campaign_title, req.body.campaign_description, req.body.campaign_image_url, req.body.location, req.body.user_id, ])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});



module.exports = router;