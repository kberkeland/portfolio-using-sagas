const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// GET route for the projects in the database, path = "/projects"
router.get('/', (req, res) => {
    // let queryText = `SELECT * FROM "projects" ORDER BY "name" ASC;`;
    let queryText = `SELECT "projects"."id",
                            "projects"."name",
                            "projects"."description",
                            "projects"."thumbnail",
                            "projects"."website",
                            "projects"."github",
                            "projects"."date_completed",
                            "tags"."name" as "tag_name" 
                     FROM "projects"
                     JOIN "tags" ON "tags"."id"="projects"."tag_id";`;
    pool.query(queryText).then((result) => {
        // send all the projects to redux store
        res.send(result.rows);
    }).catch((error) => {
        // console log and client error message for GET problem
        console.log(`Error in router projects GET: ${error}`);
        res.sendStatus(500);
    });
}); // end projects GET

module.exports = router;