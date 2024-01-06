import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";

export default function Feed() {
    return (
        <div>
            <Navbar />
            <div>
                <p className="text-lg p-4 text-center sm:text-left text-gray-400">Hear the latest posts from the people you’re following:</p>
            </div>
            <div className="text-lg text-gray-500 flex items-center flex-col">
                <p className="text-center sm:text-left">Your feed is currently empty.</p>
                <p className="text-center sm:text-left">Go to search or home to find creators to follow.</p>
                <p className="text-center sm:text-left">Come back to the feed to see tracks they are posting.</p>
            </div>
            <MusicPlayer />
        </div>
    )
}
