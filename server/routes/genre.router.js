const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  // Add query to get all genres
  const idToView = req.params.id;
  console.log("idToView is:", idToView);
  // This query will be executed everytime the user clicks on the movie they want
  // Then it will select the genre/genres for the selected movie
  const queryText = `SELECT "genres"."name"
                     FROM "genres"
                     JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id"
                     JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
                     WHERE "movies"."id" = $1;`;
 
    pool.query(queryText, [idToView])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log("Error in GET /genre.router", err);
    });
});

module.exports = router;
