//JSON for error messages
const jsonMessage = (msg) => {
    return { message: msg };
};

//Shows a limited list of movies from user input
const limitMovies = (movies, req, resp) => {
    const limitNumber = req.params.num;

    if (limitNumber < 1 || limitNumber > 200) {
        resp.json(jsonMessage(`Limit #${limitNumber} is not a valid number.`));
    } else {
        resp.json(movies.slice(0, limitNumber));
    }
};

//Finds movie with the matching ID user passes in
const findId = (movies, req, resp) => {

    const idToFind = Number(req.params.id);

    const matches = movies.filter(movie => movie.id === idToFind);

    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`ID ${idToFind} not found`));
    }
};


//Finds movie with the matching TMDB ID user passes in
const findTMDBId = (movies, req, resp) => {
    const tmdbToFind = Number(req.params.id);

    const matches = movies.filter(movie => movie.tmdb_id === tmdbToFind);

    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`TMDB_ID ${tmdbToFind} not found`));
    }
};

//Finds movies with a date between the years provided
const findYearRange = (movies, req, resp) => {
    const min = Number(req.params.min);
    const max = Number(req.params.max);

    const matches = [];
    if (min > max) {
        resp.json(jsonMessage(`Minimum value cannot be greater than maximum`));
    } else {
        movies.forEach(movie => {
            const date = movie.release_date.split('-');
            const year = date[0];

            if (Number(year) >= min && Number(year) <= max) {
                matches.push(movie);
            }
        });

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`No movies in that year range found`));
        }
    }
};

//Finds movies with an average rating between the values the user provides
const findRatingRange = (movies, req, resp) => {
    const min = Number(req.params.min);
    const max = Number(req.params.max);

    const matches = [];
    if (min > max) {
        resp.json(jsonMessage(`Minimum value cannot be greater than maximum`));
    } else {
        movies.forEach(movie => {
            const rating = movie.ratings.average;

            if (Number(rating) >= min && Number(rating) <= max) {
                matches.push(movie);
            }
        });

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`No movies in that rating range found`));
        }
    }
};

//
const findTitle = (movies, req, resp) => {
    const substring = req.params.substring.toLowerCase();

    const matches = movies.filter((movie) => movie.title.toLowerCase().includes(substring));

    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`No movie title matches found for ${substring}`));
    }
};

const findGenre = (movies, req, resp) => {
    const substring = req.params.substring.toLowerCase();

    const matches = movies.filter((movie) => movie.details.genres[0].name.toLowerCase().includes(substring));

    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`No movie genre matches found for ${substring}`));
    }
};

module.exports = {
    limitMovies,
    findId,
    findTMDBId,
    findYearRange,
    findRatingRange,
    findTitle,
    findGenre
}