import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../../../public/img.png";

const Topnav = () => {
    const [query, setquery] = useState("");
    const [searches, setsearches] = useState([]);
    const GetSearches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setsearches(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetSearches();
    }, [query]);

    return (
        <div className="w-[80%] h-[10vh] relative flex gap-4 mx-auto items-center">
            <input
                onChange={(e) => setquery(e.target.value)}
                value={query}
                className="w-[50%] text-zinc-800 ml-20 mr-10 px-6 py-3 text-xl font-semibold outline-none border-none bg-[#FFFFFF] rounded-2xl"
                type="text"
                placeholder="Search Content"
            />
            <i className="text-white text-3xl ri-search-line bg-[#5d4bd1] py-2 px-2.5 rounded-2xl"></i>
            {query.length > 0 && (
                <i
                    onClick={() => setquery("")}
                    className=" text-black text-3xl ri-close-fill bg-white py-[7px] px-2 rounded-2xl"
                ></i>
            )}

            <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[8%] overflow-auto rounded-lg">
                {searches.map((s, i) => (
                    <Link
                        to={`/${s.media_type}/details/${s.id}`}
                        key={i}
                        className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-zinc-600 w-[100%] px-10 py-6 flex justify-start items-center border-b-2 border-zinc-100"
                    >
                        <img
                            className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg "
                            src={
                                s.backdrop_path || s.profile_path
                                    ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path
                                    }`
                                    : noimage
                            }
                            alt=""
                        />
                        <span>
                            {s.name ||
                                s.title ||
                                s.original_name ||
                                s.original_title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Topnav;