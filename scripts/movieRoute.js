const movieController = require('./movieController');

const handleAllMovies = (movies, app) => {
    app.get('/api/movies', (req, resp) => { resp.json(movies) });
};

const handleLimit = (movies, app) => {
    app.route('/api/movies/limit/:num')
        .get((req, resp) => {
            movieController.limitMovies(movies, req, resp);
        });
};

const handleSingleId = (movies, app) => {
    app.route('/api/movies/:id')
        .get((req, resp) => {
            movieController.findId(movies, req, resp);
        });
};

const handleTMDBId = (movies, app) => {
    app.route('/api/movies/tmdb/:id')
        .get((req, resp) => {
            movieController.findTMDBId(movies, req, resp);
        });
};

const handleYearRange = (movies, app) => {
    app.route('/api/movies/year/:min/:max')
        .get((req, resp) => {
            movieController.findYearRange(movies, req, resp);
        });
};

const handleRatingRange = (movies, app) => {
    app.route('/api/movies/ratings/:min/:max')
        .get((req, resp) => {
            movieController.findRatingRange(movies, req, resp);
        });
};

const handleTitleSearch = (movies, app) => {
    app.route('/api/movies/title/:substring')
        .get((req, resp) => {
            movieController.findTitle(movies, req, resp);
        });
};

const handleGenreSearch = (movies, app) => {
    app.route('/api/movies/genre/:substring')
        .get((req, resp) => {
            movieController.findGenre(movies, req, resp);
        });
};

module.exports = {
    handleAllMovies,
    handleLimit,
    handleSingleId,
    handleTMDBId,
    handleYearRange,
    handleRatingRange,
    handleTitleSearch,
    handleGenreSearch
};