import React from 'react';
import MovieDetails from './MovieDetails';
import ListMatches from './ListMatches';

const MovieList = props => {

    const handleViewClick = (movie) => {
        <MovieDetails movie={movie} key={movie.id} addToFavorite={addToFavorite} />
    }

    const addToFavorite = (id) => {
        const data = this.state.movies.find(item => item.id === id);
        this.setState({
            moviesfav: [...this.state.moviesfav, data]
        });
    };

    const movieItem = (movie) => {

        const imgURL = `https://image.tmdb.org/t/p/w92${movie.poster}`;

        return (
            <div>
                <img src={imgURL} alt={movie.title}></img>
                <h3>{movie.title}</h3>
                <h3>{Date.parse(movie.release_date)[0]}</h3>
                <h3>{movie.ratings.average}</h3>
                <h3>{movie.ratings.average}</h3>
                <button onClick={addToFavorite(movie.id)}>❤</button>
                <button onClick={handleViewClick(movie)}>View</button>
            </div>
        );
    }

    if (props.movies.length > 1) {
        return (
            <article className="movieList">
                {/*{props.movies.map((m) => movieItem(m))}*/}
                <ListMatches movies={props.movies} movieItem={movieItem} addToFavorite={addToFavorite} handleViewClick={handleViewClick} />
            </article>
        );
    } else {
        return null;
    }
}

export default MovieList;