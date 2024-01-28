import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";
import { FORM_TYPE } from "../constants";
import { FaUser, FaHome, FaHeadphones } from "react-icons/fa";
import { TbMessageHeart } from "react-icons/tb";
import logo from "../styles/soundCloud-logo.png";

const Navbar = ({ searchInput, setSearchInput = () => { } }) => {
    const [currentForm, setCurrentForm] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [logoutSuccess, setLogoutSuccess] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };

    const handleCloseButtonClick = () => {
        setCurrentForm("");
        setLogoutSuccess(false);
    };

    const handleLogoutButton = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setLogoutSuccess(true);
        setTimeout(() => {
            setLogoutSuccess(false);
        }, 3000);
    };

    return (
        <>
            <div className="sticky top-0 z-50 bg-black text-white p-4">
                <nav className="flex flex-col lg:flex-row   md:justify-between md:items-center px-4 sm:px-8 md:px-20">
                    <div className="flex lg:flex-row items-center mb-4 md:mb-0 gap-4 sm:gap-10  xsm:flex-col xlsm:flex-col">
                        <Link to="/">
                            <span className="flex items-center">
                                {" "}
                                <img src={logo} alt="Logo" height={40} width={40} />
                                <b className="text-xl ">SOUNDCLOUD</b>
                            </span>
                        </Link>
                        <div className="flex flex-row xsm:gap-6 xlsm:gap-4">
                            <Link to="/">
                                <span className="flex hover:text-blue-400">
                                    <FaHome className="m-1" />
                                    Home
                                </span>
                            </Link>
                            <Link to="/feed">
                                <span className="flex hover:text-blue-400">
                                    <TbMessageHeart className="m-1 " />
                                    Feed
                                </span>
                            </Link>
                            <Link to="/library">
                                <span className="flex hover:text-blue-400">
                                    <FaHeadphones className="m-1" />
                                    Library
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <input
                            className="border rounded w-96 text-black p-1 "
                            type="text"
                            value={searchInput}
                            onChange={(e) => {
                                setSearchInput(e.target.value);
                            }}
                            placeholder="Search"
                        />
                        {/* <button
                            className="md:hidden ml-4 text-white font-bold"
                            onClick={() => toggleForm("login")}
                        >
                            <FaUser />
                        </button> */}
                    </div>
                    <div className=" flex xsm:flex-row items-center md:flex gap-4 xsm:gap-8 xlsm:gap-3">
                        <div>
                            <Link to="/tryNextPro">
                                <span className="flex text-orange-600">
                                    Try Next Pro
                                </span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/forArtist">
                                <span className="flex  text-white hover:text-blue-400">
                                    For Artist
                                </span>
                            </Link>
                        </div>

                        {!localStorage.getItem("token") && (
                            <button
                                className="ml-4 text-white hover:text-blue-400"
                                onClick={() => toggleForm("login")}
                            >
                                <span className="flex hover:text-blue-400">
                                    <FaUser size={20} className="m-1" />
                                    Login
                                </span>
                            </button>
                        )}
                        {localStorage.getItem("token") && (
                            <button>
                                <span
                                    className="text-white flex cursor-pointer hover:text-blue-400"
                                    onClick={() => handleLogoutButton()}
                                >
                                    <FaUser size={20} className="m-1" />
                                    Logout
                                </span>
                            </button>
                        )}
                        <Link to="/upload">
                            <span className="hover:text-blue-400">Upload</span>
                        </Link>
                        {logoutSuccess && (
                            <div className="fixed bottom-4  right-4 bg-green-500 text-white p-2 rounded-md shadow-md">
                                Logout successfully
                            </div>
                        )}
                    </div>

                </nav>
            </div>
            <Outlet />

            {currentForm === FORM_TYPE.LOGIN && (
                <div className="fixed inset-0 flex items-center z-50 justify-center bg-gray-300 bg-opacity-80">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <Login onFormSwitch={toggleForm} onClose={handleCloseButtonClick} />
                    </div>
                </div>
            )}

            {currentForm === FORM_TYPE.SIGNUP && (
                <div className="fixed inset-0 flex items-center z-50 justify-center bg-gray-300 bg-opacity-80">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="relative">
                            <button
                                onClick={handleCloseButtonClick}
                                className="text-gray-500 hover:text-gray-700 absolute top-0 right-0 focus:outline-none"
                            >
                                &#10006;
                            </button>

                            <SignUp
                                onFormSwitch={toggleForm}
                                onClose={handleCloseButtonClick}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;