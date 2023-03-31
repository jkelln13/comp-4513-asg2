import React from 'react';
import { Link } from 'react-router-dom';
import Favorites from './Favorites';

const ListMatches = props => {

    const movieItem = (movie) => {

        const imgURL = `https://image.tmdb.org/t/p/w92${movie.poster}`;

        const date = movie.release_date.split('-');
        const year = date[0];

        return (
            <div key={movie.id} class="grid grid-cols-10 pt-8 items-center">
                <Link to={'/moviedetails'} state={movie}>
                    <img class="col-start-1 col-span-1" width="92" height="92" src={imgURL} alt={movie.title}></img>
                </Link>
                <Link class="col-start-2 col-span-3" to={'/moviedetails'} state={movie}>
                    {movie.title}
                </Link>
                <p class="col-start-5 col-span-1">{year}</p>
                <p class="col-start-6 col-span-1">{movie.ratings.average}</p>
                <p class="col-start-7 col-span-1">{movie.ratings.average}</p>
                <Link state={movie}>
                    <button onClick={props.add(movie.id)} class="col-start-9 col-span-1">❤</button>
                </Link>
                <Link to={'/moviedetails'} state={movie}>
                    <button class="col-start-10 col-span-1">View</button>
                </Link>
            </div >
        );
    }

    const movies = [...props.movies];
    const sortedMovies = movies.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });

    if (props.wordFilter === null || typeof props.wordFilter === 'object') {
        return (
            <div class="h-screen col-start-3 col-span-4 row-span-10 bg-blue-300 rounded-xl p-8 text-center">
                <p class="text-2xl text-center font-semibold pb-16">List/Matches</p>

                <div class="grid grid-cols-10">
                    <p class="col-start-2 col-span-3">Title</p>
                    <p class="col-start-5 col-span-1 pr-5">Year</p>
                    <p class="col-start-6 col-span-1 pr-5">Rating</p>
                    <p class="col-start-7 col-span-1 pr-5">Popularity</p>
                </div>

                <div class="overflow-scroll h-5/6">
                    {sortedMovies.map((m) => movieItem(m))}
                </div>
            </div>
        )
    } else {
        const filteredMovies = [];
        movies.forEach(movie => {
            let title = movie.title.toLowerCase();
            let search = props.wordFilter.toLowerCase();
            if (title.match(search)) {
                filteredMovies.push(movie)
            }
        });
        return (
            <div class="h-screen col-start-3 col-span-4 row-span-10 bg-blue-300 rounded-xl p-8 text-center">
                <p class="text-2xl text-center font-semibold pb-16">List/Matches</p>

                <div class="grid grid-cols-10">
                    <p class="col-start-2 col-span-3">Title</p>
                    <p class="col-start-5 col-span-1">Year</p>
                    <p class="col-start-6 col-span-1">Rating</p>
                    <p class="col-start-7 col-span-1">Popularity</p>
                </div>

                {filteredMovies.map((m) => movieItem(m))}

            </div>
        )
    }
}

export default ListMatches;