import React from 'react';
import { Link } from 'react-router-dom';

const FavoritesItem = props => {

    const movie = props.movie;

    const imgURL = `https://image.tmdb.org/t/p/w92${movie.poster}`;
    return (
        <div class="h-screen col-start-7 col-span-2 row-span-10 bg-blue-300 rounded-xl p-8 ">
            <p class="text-2xl text-center font-semibold pb-16">Favorites</p>


            <div class="grid grid-cols-2 items-center">
                <Link to='/list'>
                    <img class="col-start-1 col-span-1" width="92" height="92" src={imgURL} alt={movie.title}></img>
                    <p class="col-start-2 col-span-3 r">{movie.title}</p>
                </Link>
            </div>
        </div >
    );
}

export default FavoritesItem;