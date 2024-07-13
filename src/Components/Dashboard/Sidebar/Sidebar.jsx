import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { BsCartCheckFill, BsPerson } from "react-icons/bs";
import { FaProductHunt, FaUserTie } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { MdMenu, MdLogout, MdAddShoppingCart, MdReviews, MdAdminPanelSettings } from "react-icons/md";
import { IoIosSearch, IoMdSettings } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useCurrentUser from "../../Hooks/useCurrentUser";
import useAuth from "../../Hooks/useAuth";
import DashboardNav from "../DashboardNav/DashboardNav";

const Sidebar = () => {
    const { currentUser } = useCurrentUser();
    const { logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut();
        navigate('/login');
    };

    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    let isSmallDevice = useMediaQuery({ query: "(max-width: 640px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef();
    const { pathname } = useLocation();

    useEffect(() => {
        if (isTabletMid) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTabletMid]);

    useEffect(() => {
        isTabletMid && setOpen(false);
    }, [pathname]);

    const Nav_animation = isTabletMid
        ? {
            open: {
                x: 0,
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                x: -250,
                width: 0,
                transition: {
                    damping: 40,
                    delay: 0.15,
                },
            },
        }
        : {
            open: {
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                width: "4rem",
                transition: {
                    damping: 40,
                },
            },
        };

    const menuItems = [

        { to: "/dashboard", icon: <MdAdminPanelSettings size={23} className="min-w-max" />, label: "Dashboard" },
        { to: "/dashboard/profile", icon: <BsPerson size={23} className="min-w-max" />, label: "My Profile" },

        { to: "/dashboard/all-Users", icon: <HiUsers size={23} className="min-w-max" />, label: "All Users" },
        { to: "/dashboard/my_all_product", icon: <BsPerson size={23} className="min-w-max" />, label: "All Product" },
        { to: "/dashboard/add-product", icon: <MdAddShoppingCart size={23} className="min-w-max" />, label: "Add Products" },


    ];



    return (
        <div>

            <div
                onClick={() => setOpen(false)}
                className={`lg:hidden fixed inset-0 lg:max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"}`}
            ></div>

            <motion.div
                ref={sidebarRef}
                variants={Nav_animation}
                initial={{ x: isTabletMid ? -250 : 0 }}
                animate={open ? "open" : "closed"}
                className="bg-gray-300 text-gray-900 shadow-xl z-[999] max-w-[16rem] lg:w-[16rem] 
                w-[12rem]
            overflow-hidden lg:relative fixed h-screen"
            >
                <div className="flex items-center justify-between gap-2.5 font-medium py-3.5 border-b  border-gray-600 mx-3">
                    <Link to={'/'}> <span className="text-xl whitespace-pre "> E-Book For Polytechnic </span></Link>
                    {(isTabletMid || isSmallDevice) && (
                        <motion.div
                            onClick={() => setOpen(!open)}
                            animate={open ? { x: 0, y: 0, rotate: 0 } : { x: -10, y: -200, rotate: 180 }}
                            transition={{ duration: 0 }}
                            className="cursor-pointer"
                        >
                            <IoIosArrowBack size={25} />
                        </motion.div>
                    )}
                </div>

                <div className="flex flex-col h-full">
                    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]">
                        {menuItems?.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.to} className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                            ? "bg-[#62AB00] text-[#fff] p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium"
                                            : "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium"
                                }>
                                    {item.icon}
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {open && (
                        <div className="flex-1 text-sm z-50 max-h-60 my-auto whitespace-pre w-full font-medium">
                            <div className="flex border-t border-gray-400 p-4 items-center justify-between">
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink to={"/"} className={({ isActive, isPending }) =>
                                                isPending
                                                    ? "pending"
                                                    : isActive
                                                        ? "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium bg-gray-600 text-[#FFA500]"
                                                        : "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium"
                                            }>
                                                <IoHome size={23} className="min-w-max" />
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/"} className={({ isActive, isPending }) =>
                                                isPending
                                                    ? "pending"
                                                    : isActive
                                                        ? "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium bg-gray-600 text-[#FFA500]"
                                                        : "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium"
                                            }>
                                                <IoMdSettings size={23} className="min-w-max" />
                                                Settings
                                            </NavLink>
                                        </li>

                                        <li onClick={handleLogOut} className="p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium text-[#FFA500]">
                                            <MdLogout size={23} className="min-w-max" />
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>

            <div className="flex justify-between items-center py-2 gap-1 px-1 md:py-2 md:px-3">
                <div className="p-1 text-gray-800 lg:hidden" onClick={() => setOpen(true)}>
                    <MdMenu size={25} />
                </div>
                <div className='relative w-full lg:hidden lg:w-60 md:w-80'>
                    <input
                        type='text'
                        id='search'
                        className='bg-gray-100 border border-gray-800 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-2 lg:py-2 md:py-1.5 py-1.5 text-gray-900'
                        placeholder='Search...'
                    />
                    <p className='absolute inset-y-0 end-0 flex items-center pe-3 text-gray-700 '>
                        <IoIosSearch size={17} />
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    {
                        currentUser.profilePhoto ? (
                            <img
                                className="w-12 h-10 rounded-full cursor-pointer border-2 border-gray-500"
                                src={currentUser.profilePhoto}
                                alt="User Profile"
                            />
                        ) : (
                            <img
                                className="w-12 h-10 rounded-full border-2 cursor-pointer border-green-500"
                                src="https://img.freepik.com/premium-photo/blue-circle-with-man-s-head-circle-with-white-background_745528-3499.jpg"
                                alt="User Profile"
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
