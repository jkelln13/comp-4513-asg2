import React from 'react'
import Header from './Header'
import MovieFilters from './MovieFilters'
import ListMatches from './ListMatches'
import Favorites from './Favorites'
import { useLocation } from 'react-router-dom';

const DefaultView = props => {
    const { state } = useLocation();

    return (
        <div class="grid gap-10">
            <Header />

            <div class="grid grid-cols-8 grid-rows-10 gap-10 font-sans text-black">
                <MovieFilters movies={props.movies} updateList={props.updateList} />
                <ListMatches movies={props.movies} key={props.movies.id} add={props.add} wordFilter={state} />
                <Favorites add={props.add} favs={props.favs} />
            </div>

        </div>
    )
}

export default DefaultView