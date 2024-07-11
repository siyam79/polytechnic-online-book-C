import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/ui/Header'
import Navbar from '../Components/ui/Navbar'
import Footer from '../Components/ui/Footer'

export default function MainLayout() {
    return (
        <div>

            <div className="max-w-7xl mx-auto px-1 py-2 ">
                <Header />
            </div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-1 py-2 ">
                <Outlet />
            </div>
            <Footer />
            {/* <Toaster /> */}

        </div >
    )
}
