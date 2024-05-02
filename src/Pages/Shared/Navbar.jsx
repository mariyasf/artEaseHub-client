import { Link, NavLink } from "react-router-dom";
import logo from "/images/logo.png";

const Navbar = () => {
    const navLink = <>
        <li> <NavLink to={'/'}> Home</NavLink> </li>
        <li> <NavLink to={'/login'}> Login</NavLink> </li>
        <li> <NavLink to={'/register'}> Register</NavLink> </li>
        <li> <NavLink to={'/'}> Home</NavLink> </li>
    </>
    return (
        <>
            <div className="navbar bg-purple-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img src={logo} className=" w-12 h-12 lg:w-20 lg:h-20" alt="logo" />
                    <Link to={'/'}
                        className="btn btn-ghost text-2xl lg:text-4xl text-white font-Rancho">
                        ArtEaseHub
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/login'}>
                        <a className="btn bg-[#83009f] text-white">Login</a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;