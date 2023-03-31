import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const MovieDetails = props => {

    const { state } = useLocation();

    const imgURL = `https://image.tmdb.org/t/p/w92${state.poster}`;

    const tmdbURL = `https://www.themoviedb.org/movie/${state.tmdb_id}`;
    const imdbURL = `https://www.imdb.com/title/${state.imdb_id}`;

    const revenue = state.revenue;

    //Retrieved from Stackoverflow at: https://stackoverflow.com/questions/6137986/javascript-roundoff-number-to-nearest-0-5
    const round = number => {
        var rating = (number * 2).toFixed() / 2;
        return rating;
    }

    const changeEdit = () => {

    }

    return (
        <div class="grid gap-10">
            <Header />

            <div class="h-screen bg-blue-300 p-8 rounded-b-xl grid grid-cols-4 ">

                {/*LEFT-HAND SIDE*/}
                <div class="col-span-1">
                    <h2 class="text-3xl font-semibold pb-16">{state.title}</h2>
                    <img class="" src={imgURL} alt={state.title}></img>
                </div>

                {/*MIDDLE*/}
                <div class="col-start-2 col-span-2 border-solid border-black border-2 p-16">
                    <div class="pt-20 pb-20 font-semibold text-2xl">

                        <p>{state.release_date}, {state.runtime}, {state.tagline}, ${revenue.toLocaleString()}</p>
                        <p>{tmdbURL}, {imdbURL}</p>
                        <p>{state.details.overview}</p>
                        <p>{state.details.genres.name}</p>
                    </div>

                    <div class="col-start-4 border-solid border-black border-2 p-16">
                        <h2 class="font-semibold text-3xl text-center">Ratings</h2>
                        <p>{state.ratings.popularity}, {state.ratings.average}, {state.ratings.count}</p>

                        {/*Retrieved from Star Rating Component for your project: React Stars. At: https://morioh.com/p/98335027daaa */}
                        <ReactStars
                            className={"fixedRating"}
                            count={10}
                            value={round(state.ratings.average)}
                            size={24}
                            edit={false}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <h2 className='userRating'>Leave a rating</h2>
                        <ReactStars
                            className={"userRating"}
                            count={10}
                            size={24}
                            onChange={changeEdit}
                            edit={true}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>

                {/*RIGHT-HAND SIDE*/}
                <div class="flex flex-col">
                    <Link to="/list">
                        <button class="mx-5 my-5 bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded">Close</button>
                    </Link>
                    <Link to='/list' state={state}>
                        <button class="mx-5 my-5 bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded">Add to Favs</button>
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default MovieDetails;