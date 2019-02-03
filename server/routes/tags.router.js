const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// route to GET tags from the database, path = "/tags"
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "tags" ORDER BY "name" ASC;`;
    pool.query(queryText).then((result) => {
        // send all the tags to redux
        res.send(result.rows);
    }).catch((error) => {
        // console log client error message for problem w/GET
        console.log(`Error in router tags GET: ${error}`);
        res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;