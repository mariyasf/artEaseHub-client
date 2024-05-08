import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../ErrorPage/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import UserProfile from "../Pages/USerProfile/UserProfile";
import PrivateRouter from "./PrivateRouter";
import AddCard from "../Pages/AddCard/AddCard";
import ALLProduct from "../Components/ALLProduct";
import UpdateCard from "../Pages/UpdateCard/UpdateCard";
import SeeDetails from "../Components/SeeDetails";
import MyCart from "../Components/MyCart";
import Feedback from "../Pages/Feedback/Feedback";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://art-ease-hub-server.vercel.app/painting'),
            },
            {
                path: "/add",
                element: <PrivateRouter><AddCard /></PrivateRouter>,
            },
            {
                path: "/seeDetails/:id",
                element: <SeeDetails />
            },
            {
                path: "/update/:id",
                element: <UpdateCard />,
                loader: ({ params }) => fetch(`https://art-ease-hub-server.vercel.app/painting/${params.id}`),
            },
            {
                path: "/allProduct",
                element: <ALLProduct />,
                loader: () => fetch('https://art-ease-hub-server.vercel.app/painting'),
            },
            {
                path: "/myCart",
                element: <PrivateRouter><MyCart /></PrivateRouter>,

            },
            {
                path: "/feedback",
                element: <PrivateRouter><Feedback /></PrivateRouter>,

            },
            {
                path: "/profile",
                element: <PrivateRouter> <UserProfile /></PrivateRouter>
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    },

]);
export default router;