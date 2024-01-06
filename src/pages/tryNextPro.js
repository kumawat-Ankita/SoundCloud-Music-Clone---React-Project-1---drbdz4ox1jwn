import Navbar from "../components/Navbar";
import logo from "../styles/Stand-out-with-Next-Pro.jpg";


export default function TryNextPro() {
    return (
        <div>
            <Navbar />
            <div className="w-screen">
                <img src={logo} alt="Image" class="w-full h-auto" />
            </div>
        </div>
    )
}