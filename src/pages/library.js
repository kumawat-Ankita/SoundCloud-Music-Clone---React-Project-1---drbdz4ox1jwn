import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Library = () => {
    const [searchInput, setSearchInput] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem("token");
    const projectId = "drbdz4ox1jwn";
    const favoritesURL =
        "https://academics.newtonschool.co/api/v1/music/favorites/like";

    const getMyFavorites = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(favoritesURL, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    projectID: projectId,
                },
            });

            if (response.ok) {
                const favoriteSongs = await response.json();
                setFavorites(favoriteSongs.data.songs);
            } else {
                throw new Error("Failed to fetch favorites");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const removeSongFromFav = async (songId) => {
        try {
            setIsLoading(true);
            const response = await fetch(favoritesURL, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    projectID: projectId,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ songId: songId }),
            });

            if (response.ok) {
                console.log(`Song removed from favorites successfully`);
                getMyFavorites();
            } else {
                const errorResponse = await response.json();
                throw new Error(
                    `Failed to remove song from favorites: ${errorResponse.message}`
                );
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getMyFavorites();
    }, []);

    const filteredMusic = favorites.filter((song) =>
        song.title.toLowerCase().includes(searchInput?.toLowerCase())
    );
    return (
        <div className=" w-full h-screen overflow-hidden">
            <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
            <div>
                <h2 className="font-bold m-4 text-lg xlsm:text-center lg:text-start">My Favorite Songs</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ul className="flex flex-wrap xlsm:justify-center lg:justify-start xlsm:gap-7 lg:gap-0">
                        {filteredMusic.map((song) => (
                            <li key={song.id} className="lg:m-6 xlsm:m-0">
                                <div className="flex justify-center items-center flex-col">
                                    <img
                                        src={song.thumbnail}
                                        alt="image"
                                        height={200}
                                        width={200}
                                        className='cursor-pointer mx-auto xlsm:ml-0 xlsm: w-32 md:w-48 h-auto'
                                    />
                                </div>
                                <div className='mt-2 w-36 sm:w-48 break-words mx-auto '>{song.title} </div>
                                <button
                                    onClick={() => removeSongFromFav(song._id)}
                                    className="border border-solid border-black rounded-md p-1 m-1 bg-white text-black font-bold"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Library;