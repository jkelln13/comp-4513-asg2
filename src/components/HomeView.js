import React, { useEffect, useState } from 'react';
import DefaultView from './DefaultView';
import bg_image from "../bg_image.jpg";
import { Link } from 'react-router-dom';

const HomeView = props => {

    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <div class="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat px-10" style={{ backgroundImage: `url(${bg_image})` }}>
            <div class="container font-sans text-white rounded-xl bg-gray-900 bg-opacity-75 px-16 py-10">
                <p class="text-2xl text-center font-semibold pb-16">Movie Browser</p>
                <form class="grid grid-cols-10 pb-16">
                    <p class="text-2xl font-semibold">Title</p>
                    <input class="col-start-3 col-end-9 text-black searchBar-area" onChange={handleChange}></input>
                </form>
                <div class="grid grid-cols-10">
                    <Link class="col-start-3 col-span-3 mx-auto bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded" to='/list' state={message}>
                        <button >Show Matching Movies</button>
                    </Link>
                    <Link class="col-start-6 col-span-3 mx-auto bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded" to='/list'>
                        <button >Show All Movies</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default HomeView