import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import MusicId from "../context/UserContext"; // Assuming MusicId is exported as a context provider
// Other necessary imports

const MusicCard = ({ song, setProductId, addRemoveSongFromFavorites, favorites }) => {
    const { setSongId } = useContext(MusicId);

    return (
        <div key={song._id}>
            <img
                onClick={() => setProductId(song.audio_url, song.thumbnail, song.title)}
                src={song.thumbnail}
                alt={song.title}
                height={200}
                width={200}
                className="cursor-pointer mx-auto w-32 md:w-48 h-auto"
            />
            <div className="mt-2 w-36 sm:w-48 break-words mx-auto ">
                <div className="flex justify-around xlsm:items-center xlsm:flex-col">
                    <h2>{song.title}</h2>
                    <p className="p-1">
                        <button onClick={() => addRemoveSongFromFavorites(song._id, true)}>
                            <AiOutlineHeart
                                style={{
                                    fill: favorites.includes(song._id) ? "red" : "white",
                                }}
                                className="text-black-500"
                            />
                        </button>
                    </p>
                </div>
                <p className="text-gray-500 pl-5">{song.artist[0].name}</p>
            </div>
        </div>
    );
};

export default MusicCard;
