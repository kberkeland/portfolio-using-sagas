const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// POST Route to add a project
router.post('/', (req,res) => {
    let queryText = `INSERT INTO "projects" 
                     ("name", "tag_id", "github", "website", "description", "date_completed")
                     VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [req.body.nameIn, req.body.tagIn, req.body.githubIn, req.body.websiteIn, req.body.descriptionIn, req.body.dateIn,])
    .then((result) => {
        // send a response of created back to the client
        res.sendStatus(201);
    }).catch((error) => {
        // console log and error message for POST error
        console.log(`Error in router projects POST: ${error}`);
        res.sendStatus(500);
    });
}); // end projects POST

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

// DELETE a project in the database
router.delete('/delete/:id', (req,res) => {
    let queryText = `DELETE FROM "projects" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id]).then((result) => {
        // send back okay that delete was accomplished
        res.sendStatus(200);
    }).catch((error) => {
        // console log and error message for DELETE error
        console.log(`Error in router DELETE: ${error}`);
        res.sendStatus(500);
    });
}); // end DELETE route

module.exports = router;