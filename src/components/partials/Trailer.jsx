import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);
    ytvideo && ytvideo.name && (document.title = "SCSDB | " + ytvideo.name);
    return (
        <div className="bg-[rgba(0,0,0,.8)] absolute z-[100] top-0 left-[50%] -translate-x-[50%] w-screen h-screen flex items-center justify-center">
            <Link
                onClick={() => navigate(-1)}
                className="absolute hover:text-[#6556CD] ri-close-fill text-3xl text-white right-[5%] top-[5%]"
            ></Link>
            {ytvideo ? (
                <ReactPlayer
                    controls
                    height={650}
                    width={1300}
                    url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
                />
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default Trailer;