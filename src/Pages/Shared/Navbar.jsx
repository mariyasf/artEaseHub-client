import { Link, NavLink } from "react-router-dom";
import logo from "/images/logo.png";
import { FaCartPlus, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import profile from '/images/user.png'
import { MdNightlightRound, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../Provider/ThemeProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const { theme, toggleTheme } = useTheme();

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    function isValidURL(url) {
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlPattern.test(url);
    }



    const navLink = <>
        <li> <NavLink to={'/'}> Home</NavLink> </li>
        <li> <NavLink to={'/add'}> Add</NavLink> </li>
        <li> <NavLink to={'/allProduct'}> All Product</NavLink> </li>
        <li> <NavLink to={'/feedback'}>Feedback</NavLink> </li>
        <li> <NavLink to={'/myCart'}> My Cart </NavLink> </li>

    </>
    return (
        <>
            <div className="hidden lg:block">
                <div className=" font-Poppins flex  bg-base-100">
                    <div className="flex gap-5 p-5 items-center bg-slate-500">

                        <div className="bg-black p-2 rounded-full">
                            <FaPhoneAlt className=" text-white text-2xl" />

                        </div>

                        <span className="text-white">Quick Support for call
                            +88 0123456789</span>

                    </div>
                    <div className="flex-1 flex justify-end gap-5 items-center bg-stone-300">

                        <div className="flex gap-5 items-center  border-r-2 border-r-orange-300 pr-4">
                            <div className="bg-black p-2 rounded-full">
                                <FaLocationDot className=" text-white text-2xl" />

                            </div>
                            <span>123 Art Avenue
                                Sector 5, San Francisco
                                California, USA</span>

                        </div>
                        <div className="flex gap-5 items-center  pr-10">
                            <div className="bg-black p-2 rounded-full">
                                <BiSolidMessageAltDetail className=" text-white text-2xl" />

                            </div>
                            <span>arteasehub@gmial.com</span>

                        </div>

                    </div>


                </div>
            </div>

            <div className="flex justify-between font-Poppins  bg-base-100">
                <div className="flex py-5 bg-black">
                    <div className="dropdown">
                        <div tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden text-white">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu  menu-sm text-white dropdown-content mt-3 z-[1] p-2 
                            shadow bg-black rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>

                    <div className="">
                        <Link to={'/'}
                            className="btn btn-ghost text-xl 
                         lg:text-4xl  font-Rancho">
                            <img src={logo}
                                className=" w-12 h-12 lg:w-20 lg:h-20" alt="logo" />
                            <span className="text-white">ArtEaseHub</span>
                        </Link>
                    </div>

                </div>

                <div className="flex justify-end text-white flex-1 gap-10 bg-slate-950">
                    <div className="py-5 hidden items-center lg:flex gap-4">

                        <ul className="menu menu-horizontal px-1 text-xl">
                            {navLink}
                        </ul>

                    </div>


                    <div className="py-5 mx-5 flex items-center ">

                        {
                            user ?
                                <>
                                    <div className="dropdown dropdown-end">
                                        {/* Profile image */}
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn btn-ghost btn-circle avatar"
                                        >

                                            <div className="w-10 rounded-full">
                                                <img alt="Profile"
                                                    src={user && isValidURL(user.photoURL) ? user.photoURL : profile} />
                                            </div>

                                        </div>

                                        <ul tabIndex={0}
                                            className="dropdown-content z-[1] text-white
                                             menu p-2 shadow bg-black rounded-box w-52">
                                            <li>
                                                <NavLink to={'/profile'}>
                                                    {user?.displayName || 'Profile'}
                                                </NavLink>
                                            </li>

                                            <li>
                                                <a onClick={handleSignOut}>Logout</a>
                                            </li>
                                        </ul>

                                    </div>
                                </>
                                :
                                <div >
                                    <Link to={'/login'} className="mr-4">
                                        <button className="btn bg-[#0EA5E9] text-white">Login</button>
                                    </Link>
                                </div >
                        }



                        <button onClick={toggleTheme} className="Toggle ml-5 text-3xl">
                            {theme === 'light' ? <MdOutlineLightMode /> : <MdNightlightRound />}
                        </button>



                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;