import React, { useState, useEffect, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MusicId from '../context/UserContext';



const Album = ({ searchInput }) => {
    const [musicData, setMusicData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setSongId } = useContext(MusicId);

    useEffect(() => {
        fetchMusic();
    }, []);

    const setProductId = async (id) => {

    }

    const fetchMusic = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100 ', {
                headers: {
                    projectId: 'drbdz4ox1jwn'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch music data');
            }
            const result = await response.json();
            setMusicData(result.data);
        } catch (error) {
            console.error('Error fetching music:', error.message);
        } finally {
            setLoading();
        }
    };

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

    const filteredMusicData = musicData.filter((song) =>
        song.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div>
            <div className='text-3xl font-bold m-6'>
                {filteredMusicData.length > 0 && !loading && (
                    <h1 className='pl-24 pr-32'>List of Albums</h1>
                )}
                {filteredMusicData.length === 0 && !loading && (
                    <p className="pl-24 pr-32">No data found.....</p>
                )}
            </div>
            <div className='pl-2 pr-2 md:pl-28 md:pr-28 pb-16'>
                {musicData.length > 0 && (
                    <Slider {...settings}>
                        {filteredMusicData.map((song) => (
                            <div key={song._id}>
                                <div className="flex justify-center items-center flex-col">
                                    <img
                                        src={song.image}
                                        alt={song.title}
                                        className='cursor-pointer mx-auto w-32 md:w-48 h-auto'
                                        onClick={() => setProductId(song.audio_url)}
                                    />
                                    <div className='mt-2 w-36 sm:w-48 break-words mx-auto '>
                                        <h2>{song.title}</h2>
                                        <p className='text-gray-500'>{song.artists[0].name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
                {loading && <p>Loading.....</p>}
            </div>
        </div>
    );
};


export default Album;