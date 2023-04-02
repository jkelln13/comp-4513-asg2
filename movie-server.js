const movieRoute = require('./scripts/movieRoute');

const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));

const port = 8080;

const movies = require('./data/movies10.json');

movieRoute.handleAllMovies(movies, app);
movieRoute.handleLimit(movies, app);
movieRoute.handleSingleId(movies, app);
movieRoute.handleTMDBId(movies, app);
movieRoute.handleYearRange(movies, app);
movieRoute.handleRatingRange(movies, app);
movieRoute.handleTitleSearch(movies, app);
movieRoute.handleGenreSearch(movies, app);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});