import React, { useState } from "react";
import MusicList from "./MusicList";
import Album from "./Album";
import MusicPlayer from "./MusicPlayer";
import Navbar from "./Navbar";

const Home = () => {

    const [searchInput, setSearchInput] = useState('');

    return (
        <div className="bg-gray-800 text-white" style={{ overflow: "hidden" }}>
            <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
            <Album searchInput={searchInput} />
            <MusicList searchInput={searchInput} />
            <MusicPlayer />
        </div>
    );
};

export default Home;