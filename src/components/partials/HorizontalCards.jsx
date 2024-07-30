import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../../public/img.png";

const HorizontalCards = ({ data, title }) => {
    return (
        <div className="w-[100%] flex overflow-y-hidden mb-5 px-5 py-1 ">
            {data.length > 0 ? (
                data.map((d, i) => (
                    <Link
                        to={`/${d.media_type || title}/details/${d.id}`}
                        key={i}
                        className="min-w-[15%] h-[35vh]  bg-zinc-900 mr-5 mb-5"
                    >
                        <img
                            className="w-full h-[55%] object-cover bg-center"
                            src={
                                d.backdrop_path || d.poster_path
                                    ? `https://image.tmdb.org/t/p/original${
                                          d.backdrop_path || d.poster_path
                                      }`
                                    : noimage
                            }
                            alt=""
                        />
                        <div className="text-white py-1 px-4 h-[45%] overflow-y-auto">
                            <h1 className=" text-lg font-semibold ">
                                {d.name ||
                                    d.title ||
                                    d.original_name ||
                                    d.original_title}
                            </h1>
                            <p className="mt-1 text-sm">
                                <i className=" text-yellow-500 ri-star-fill bold"></i>{" "}
                                <span className="font-semibold text-white">{d.vote_average}</span>
    
                                <i className="ml-8 text-white ri-file-list-fill"></i>{" "}
                                <span className="font-semibold text-white">{d.vote_count}</span>
                            </p>
                        </div>
                    </Link>
                ))
            ) : (
                <h1 className="text-3xl mt-5 text-white font-black text-center">
                    Nothing to show
                </h1>
            )}
        </div>
    );
};

export default HorizontalCards;