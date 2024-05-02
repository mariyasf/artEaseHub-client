import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../ErrorPage/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/home",
                element: <Root />,
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