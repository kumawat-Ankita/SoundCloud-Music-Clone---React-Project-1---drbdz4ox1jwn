import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MusicId from "../context/UserContext";
import Footer from "./Footer";
import MusicCard from "./MusicCard";

const MusicList = ({ searchInput }) => {
  const [musicData, setMusicData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const { setSongId } = useContext(MusicId);
  const token = localStorage.getItem('token');
  const projectId = "drbdz4ox1jwn";
  const favoritesURL = "https://academics.newtonschool.co/api/v1/music/favorites/like";

  const addRemoveSongFromFavorites = async (songId, isAdd) => {
    if (token) {
      try {
        setIsLoading(true);
        const method = isAdd ? "PATCH" : "DELETE";
        const body = JSON.stringify({ songId: songId });
        const response = await fetch(favoritesURL, {
          method: method,
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: projectId,
            "Content-Type": "application/json",
          },
          body: body,
        });

        if (response.ok) {
          console.log(
            `Song ${isAdd ? "added to" : "removed from"} favorites successfully`
          );
          getMyFavorites();
        } else {
          throw new Error("Failed to add/remove song from favorites");
        }
      }
      catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('Please login');
    }
  };

  useEffect(() => {
    fetchMusic();
    getMyFavorites();
  }, []);

  const setProductId = (id, image, title) => {
    setSongId({ prodId: id, image, title });
  }

  const fetchMusic = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/music/song",
        {
          headers: {
            projectId: "drbdz4ox1jwn",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch music data");
      }
      const result = await response.json();
      setMusicData(result.data);
    } catch (error) {
      console.error("Error fetching music:", error.message);
    } finally {
      setLoading(false);
    }
  };

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
        const favoriteIds = favoriteSongs.data.songs.map((song) => song._id);
        setFavorites(favoriteIds);
      } else {
        throw new Error("Failed to fetch favorites");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };


  const filteredMusic = musicData.filter((song) =>
    song.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  return (
    <div className="pb-40">
      <div className="text-3xl font-bold m-6">
        {filteredMusic.length > 0 && !loading && (
          <h1 className="pl-24 pr-32">Trending Music on SoundCloud</h1>
        )}
        {filteredMusic.length === 0 && !loading && (
          <p className="pl-24 pr-32">No data found.....</p>
        )}
      </div>
      <div className="pl-2 pr-2 md:pl-28 md:pr-28 pb-16  ">
        {musicData.length > 0 && (
          <Slider {...settings}>
            {filteredMusic.map((song) => (
              <MusicCard
                key={song._id}
                song={song}
                setProductId={setProductId}
                addRemoveSongFromFavorites={addRemoveSongFromFavorites}
                favorites={favorites}
              />
            ))}
          </Slider>
        )}
        {loading && <p>Loading.....</p>}

        <div className="p-6">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MusicList;