import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/ui/Home/Home";
import MainLayout from "../Layout/MainLayout";
import AllBook from "../Components/ui/AllBook/AllBook";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import DashboardLayout from "../Components/Dashboard/DashboardLayout/DashboardLayout";
import DashboardHome from "../Components/Dashboard/DashboardHome/DashboardHome";
import Profile from "../Components/Dashboard/Profile/Profile";
import AddProduct from "../Components/Dashboard/AddProduct/AddProduct";

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
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
            },
            {
                path: '/dashboard/profile',
                element: <Profile />
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct />
            },
        ]
    }
]);

export default Router;