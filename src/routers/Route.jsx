import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/ui/Home/Home";
import MainLayout from "../Layout/MainLayout";
import AllBook from "../Components/ui/AllBook/AllBook";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/all-book",
                element: <AllBook />
            },

        ]


    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
]);

export default Router;