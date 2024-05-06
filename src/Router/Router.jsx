import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../ErrorPage/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import UserProfile from "../Pages/USerProfile/UserProfile";
import PrivateRouter from "./PrivateRouter";
import AddCard from "../Pages/AddCard/AddCard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/painting'),
            },
            {
                path: "/add",
                element: <PrivateRouter><AddCard /></PrivateRouter>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/profile",
                element: <PrivateRouter> <UserProfile /></PrivateRouter>
            },
        ]
    },
]);
export default router;