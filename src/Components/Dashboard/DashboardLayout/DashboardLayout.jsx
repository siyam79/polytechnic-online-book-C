
// import "./Styles/scroll.css"

import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import DashboardNav from "../DashboardNav/DashboardNav";

const DashboardLayout = () => {
    return (

        <div className="lg:flex font-Josefin bg-gray-100  text-white h-screen lg:overflow-hidden">
            {/* Fixed Dashboard for large devices */}
            <div className="">
                {/* <Dashboard /> */}
                <Sidebar />
            </div>
            <main className="flex-1 px-2 lg:overflow-y-auto font-Josefin">
                {/* Dashboard Navbar */}

                <DashboardNav />

                <div className=' font-Josefin lg:px-4 px-1 py-2 bg-gray-200 text-gray-600  lg:rounded-2xl rounded-md shadow-xl lg:mt-[68px] mt-1 min-h-screen '>
                    {/* Outlet for rendering nested routes */}
                    <Outlet />
                </div>
            </main>
        </div>


    );
};

export default DashboardLayout;
