import Error from "../pages/error"
export default function Footer() {
    return (
        <div>
            <footer className="bg-gray-200 py-4 text-center">
                <div className="flex justify-center ">
                    <ul className="flex space-x-6 lg:flex-row xlsm:flex-col xlsm:justify-center">
                        <li><a href="/error" className="text-gray-700 hover:text-gray-900">About Us</a></li>
                        <li><a href="/error" className="text-gray-700 hover:text-gray-900">Privacy Policy</a></li>
                        <li><a href="/error" className="text-gray-700 hover:text-gray-900 xlsm:pl-0">Terms of Service</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
