import logo from "../styles/Soundcloud-For-Artists-2.jpg";
import logo1 from "../styles/images soundcloud.jpg";

export default function ForArtist() {
    return (
        <div>

            <div className="p-4">
                <img src={logo} height={100} width={200} />
            </div>
            <div className="flex ">
                <ul className="font-mono text-gray-600 p-12 flex flex-wrap flex-col gap-4">
                    <li className="font-bold text-black">OVERVIEW</li>
                    <li >TRACKS</li>
                    <li>RELEASES</li>
                    <li>COMMENTS</li>
                    <li>FANS</li>
                    <li>MONETIZATION</li>
                    <li>EARNING</li>
                    <li>PROMOTION</li>
                    <li>INSIGHT</li>
                    <li>PROFILE CONTROL</li>
                    <li>BENEFITS</li>
                </ul>
                <div className="h-screen">
                    <div className="pt-14 pl-11">
                        <h1 className="text-3xl font-semibold">Streams</h1>
                        <div className="bg-gray-100 p-4 m-4 flex">
                            <div className="p-4">
                                <img src={logo1} height={200} width={200} />
                            </div>
                            <div className="p-4">
                                <p className="pb-3 font-semibold"> Get daily stream counts from around the world.</p>
                                <p>With SoundCloud for Artist you get detailed reports and insights into your daily streams.</p>
                                <p className="pb-3">See what tracks are trending and learn more about who your fans are.</p >
                                <button className="bg-black text-white font-bold p-1"> Upload tracks to SoundCloud</button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-14 pl-11">
                        <h1 className="text-3xl font-semibold">Recent releases</h1>
                        <div className="bg-gray-100 p-4 m-4 flex">
                            <div className="p-4">
                                <img src={logo1} height={200} width={200} />
                            </div>
                            <div className="p-4">
                                <p className="pb-3 font-semibold">Distribute music to streaming services.</p>
                                <p>With a SoundCloud for Artists Next Pro membership, you can get your music onto</p>
                                <p >Spotify, Apple Music, TikTok, Mixcloud and more. Expand your reach and start earning</p >
                                <p className="pb-3">money from your streams.</p>
                                <button className="bg-black text-white font-bold p-1">Upgrade now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}