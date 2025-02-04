import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;