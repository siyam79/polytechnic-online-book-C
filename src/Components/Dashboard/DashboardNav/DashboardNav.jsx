import React from 'react'
import useCurrentUser from '../../Hooks/useCurrentUser'
import { IoIosSearch } from 'react-icons/io'
import SearchBar from '../../ui/SearchBar';

export default function DashboardNav() {


    const { currentUser } = useCurrentUser()
    console.log(currentUser);
    return (
        <div>
            <div className=' fixed top-0 -right-0 w-full  bg-gray-300  border-b  border-gray-800   rounded-md hidden z-[998] lg:block '>
                <div className='flex items-center justify-between py-2 shadow-sm  '>
                    <h1 className=' hidden lg:block '> polytechnic  </h1>
                    <div className='flex items-center md:gap-4 lg:gap-5 gap-3 '>
                        <div className='relative w-full text-gray-700 '>
                        <SearchBar />
                            
                        </div >
                        {
                            currentUser.profilePhoto ? (
                                <img
                                    className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-500"
                                    src={currentUser.profilePhoto}
                                    alt="User Profile"
                                />
                            ) : (
                                <img
                                    className="w-10 h-10 rounded-full border-2 cursor-pointer border-green-500"
                                    src="https://img.freepik.com/premium-photo/blue-circle-with-man-s-head-circle-with-white-background_745528-3499.jpg"
                                    alt="User Profile"
                                />
                            )
                        }

                    </div >
                </div>

            </div>
        </div>
    )
}
