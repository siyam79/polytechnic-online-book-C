import React, { useEffect, useState, useRef } from 'react';
import { MdHeadsetMic, MdMenu, MdClose } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import ProfileDropdown from '../Profile/ProfileDeopdown';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const sidebarRef = useRef(null);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'All Books', path: '/all-book' },
        { name: 'Pages', path: '/pages' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className={`bg-[#62AB00] ${isScrolled ? 'fixed top-0 left-0 w-full shadow-lg z-50' : ''}`}>
                <div className='max-w-7xl mx-auto px-1 py-2 flex items-center justify-between'>
                    <div className='flex items-center gap-20'>
                        {/* Browse Categories */}
                        {/* <CategoryDropDown /> */}

                        <div className='hidden md:flex items-center gap-4 text-white font-normal'>
                            <button> <MdHeadsetMic size={35} /> </button>
                            <p>Free Support 24/7 <br /> +01-202-555-0181 </p>
                        </div>
                        <div className='lg:hidden w-10 h-10'>
                            {/* <img src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Student-3-512.png" alt="" /> */}
                            <ProfileDropdown />
                        </div>
                    </div>

                    {/* Navbar for larger screens */}
                    <div className='hidden md:flex items-center cursor-pointer space-x-4'>
                        {navItems.map((item) => (
                            <Link key={item.path} to={item.path}>
                                <p className={`px-3 py-2 rounded-md text-sm font-medium 
                                ${pathname === item.path ? 'bg-blue-500 text-white' : 'text-gray-300'}`}>
                                    {item.name}
                                </p>
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger menu for small screens */}
                    <div className='flex md:hidden items-center justify-between text-white'>
                        <button onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <MdClose size={35} /> : <MdMenu size={35} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu sidebar */}
                {isMobileMenuOpen && (
                    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 z-40'>
                        <div ref={sidebarRef} className='fixed top-0 right-0 w-2/4 max-w-xs h-full bg-white p-4 z-50'>
                            <button onClick={toggleMobileMenu} className='text-gray-800'>
                                <MdClose size={35} />
                            </button>
                            <div className='mt-8'>
                                {navItems.map((item) => (
                                    <Link key={item.path} to={item.path} onClick={toggleMobileMenu}>
                                        <p className={`px-3 py-2 rounded-md text-sm font-medium mb-2 
                                        ${pathname === item.path ? 'bg-blue-500 text-white' : 'text-gray-800'}`}>
                                            {item.name}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
