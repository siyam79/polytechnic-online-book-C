import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/ui/Header'
import Navbar from '../Components/ui/Navbar'
import Footer from '../Components/ui/Footer'


export default function MainLayout() {
    return (
        <div className='font-Josefin text-gray-600'>

            <div className=" lg:block hidden max-w-7xl mx-auto px-1 py-2 ">
                <Header />
            </div>
            <Navbar />
            <div className='my-2'>
                {/* <Banner /> */}
            </div>
            <div className="w-7xl mx-auto px-1 py-2 bg-gray-100 font-Josefin">
                <Outlet />
            </div>
            <Footer />
            {/* <Toaster /> */}

        </div >
    )
}
