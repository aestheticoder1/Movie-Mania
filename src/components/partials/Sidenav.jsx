import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
    return (
        <div className="w-[20%] h-full overflow-y-auto border-r-2 border-zinc-400 p-10">
            <h1 className="text-2xl text-white font-bold flex">
                <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
                <span className="text-2xl">Movie Mania</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-2">
                <h1 className="text-[#7f6cff] font-bold text-xl mt-10 mb-5">
                    New Feeds
                </h1>
                <Link
                    to="/trending"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="ri-fire-fill"></i> Trending
                </Link>
                <Link
                    to="/popular"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="mr-2 ri-bard-fill"></i>
                    Popular
                </Link>
                <Link
                    to="/movie"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="mr-2 ri-movie-2-fill"></i>
                    Movies
                </Link>
                <Link
                    to="/tv"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="mr-2 ri-tv-2-fill"></i>
                    Tv Shows
                </Link>
                <Link
                    to="/person"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="mr-2 ri-team-fill mt-2"></i>
                    People
                </Link>
            </nav>
            <hr className="border-none h-[1px] bg-zinc-400 mt-4" />
            <nav className="flex flex-col text-zinc-400 text-xl gap-2">
                <h1 className="text-[#7f6cff] font-bold text-xl mt-8 mb-4">
                    Website Info
                </h1>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i className="mr-2 ri-information-fill"></i> About Us
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i className="mr-2 ri-phone-fill"></i>
                    Contact Us
                </Link>
            </nav>
        </div>
    )
}

export default Sidenav