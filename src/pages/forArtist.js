import logo from "../styles/Soundcloud-For-Artists-2.jpg";
import logo1 from "../styles/images soundcloud.jpg";
import { Link } from "react-router-dom";

export default function ForArtist() {
    return (
        <div>
            <Link to="/">
                <div className="p-4">
                    <img src={logo} height={100} width={200} />
                </div>
            </Link>
            <div className="flex lg:flex-row xlsm:flex-col">
                <ul className="font-mono text-gray-600 p-12 flex flex-wrap flex-col gap-4 xlsm:text-sm xlsm:content-center ">
                    <Link to="/error">
                        <li className="font-bold text-black">OVERVIEW</li>
                    </Link>
                    <Link to="/error"><li >TRACKS</li></Link>
                    <Link to="/error"><li>RELEASES</li></Link>
                    <Link to="/error"><li>COMMENTS</li></Link>
                    <Link to="/error"><li>FANS</li></Link>
                    <Link to="/error"><li>MONETIZATION</li></Link>
                    <Link to="/error"><li>EARNING</li></Link>
                    <Link to="/error"> <li>PROMOTION</li></Link>
                    <Link to="/error"> <li>INSIGHT</li></Link>
                    <Link to="/error"><li>PROFILE CONTROL</li></Link>
                    <Link to="/error"><li>BENEFITS</li></Link>

                </ul>
                <div className=" overflow-hidden">
                    <div className="pt-14 pl-11 flex xlsm:flex-col xlsm:pl-0 xlsm:pt-0 xlsm:m-5">
                        <h1 className="text-3xl font-semibold xlsm:text-center lg:text-start">Streams</h1>
                        <div className="bg-gray-100 p-4 m-4 flex xlsm:flex-col lg:flex-row">
                            <div className="p-4 rounded-full">
                                <img src={logo1} height={200} width={200} />
                            </div>
                            <div className="p-4">
                                <p className="pb-3 font-semibold"> Get daily stream counts from around the world.</p>
                                <p>With SoundCloud for Artist you get detailed reports and insights into your daily streams.</p>
                                <p className="pb-3">See what tracks are trending and learn more about who your fans are.</p >
                                <Link to="/error"><button className="bg-black text-white font-bold p-1"> Upload tracks to SoundCloud</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="pt-14 pl-11 xlsm:pl-0 xlsm:pt-0 xlsm:m-4">
                        <h1 className="text-3xl font-semibold xlsm:text-center lg:text-start">Recent releases</h1>
                        <div className="bg-gray-100 p-4 m-4 flex xlsm:flex-col lg:flex-row">
                            <div className="p-4">
                                <img src={logo1} height={200} width={200} />
                            </div>
                            <div className="p-4">
                                <p className="pb-3 font-semibold">Distribute music to streaming services.</p>
                                <p>With a SoundCloud for Artists Next Pro membership, you can get your music onto</p>
                                <p >Spotify, Apple Music, TikTok, Mixcloud and more. Expand your reach and start earning</p >
                                <p className="pb-3">money from your streams.</p>
                                <Link to="/error">
                                    <button className="bg-black text-white font-bold p-1">Upgrade now</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}