import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '../utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';


const Home = () => {
    document.title= "MM | Homepage"
    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);
    const [category, setcategory] = useState("all");

    const GetHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            // console.log(data);
            let randomdata =
                data.results[(Math.random() * data.results.length).toFixed()];
            setwallpaper(randomdata);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            settrending(data.results);
        } catch (error) {
            // console.log(data);
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetTrending();
        !wallpaper && GetHeaderWallpaper();
    }, [category]);

    return wallpaper && trending ? (
        <>
            <Sidenav />
            <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
                <Topnav />
                <Header data={wallpaper} />
                <div className="flex justify-between mt-6 py-4 px-8">
                    <h1 className="text-3xl font-bold text-[#7f6cff]">
                        Trending
                    </h1>

                    <Dropdown
                        title="Filter"
                        options={["tv", "movie", "all"]}
                        func={(e) => setcategory(e.target.value)}
                    />
                </div>
                <HorizontalCards data={trending} />
            </div>
        </>
    ) : (
        <Loading/>
    );
};

export default Home;