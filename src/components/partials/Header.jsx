import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
    // console.log(data);
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
                    data.backdrop_path || data.profile_path
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[65vh] mx-auto flex flex-col justify-end items-start p-[5%]"
        >
            <h1 className="w-[70%] text-5xl font-black text-white">
                {data.name ||
                    data.title ||
                    data.original_name ||
                    data.original_title}
            </h1>
            <p className="w-[40%] mt-3 mb-3 text-white">
                {data.overview.slice(0, 100)}...
                <Link
                    to={`/${data.media_type}/details/${data.id}`}
                    className="text-blue-400"
                >
                    more
                </Link>
            </p>
            <p className="text-white  ">
                <i className=" text-yellow-500 ri-star-fill bold"></i>{" "}
                <span className="font-bold">{data.vote_average}</span>
                <i className="ml-5 text-yellow-500 ri-megaphone-fill"></i>{" "}
                {data.release_date || "NA"}
                <i className="ml-5 text-yellow-500 ri-album-fill"></i>{" "}
                {data.media_type.toUpperCase()}
            </p>
            <Link
                to={`/${data.media_type}/details/${data.id}/trailer`}
                className="mt-5 bg-[#6556CD] px-4 py-2 hover:bg-[#7a67f4] duration-300 rounded text-white "
            >
                Watch Trailer
            </Link>
        </div>
    );
};

export default Header;