import React, { useCallback, useEffect, useState } from 'react'
import images from './BannerImage';
import  "./Banner.css"


export default function Banner() {


    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isFadingIn, setIsFadingIn] = useState(false);
    

    const getNextIndex = useCallback(
        (currentIndex) => (currentIndex + 1) % images.length,
        []
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFadingOut(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => getNextIndex(prevIndex));
                setIsFadingOut(false);
                setIsFadingIn(true);
            }, 500);
        }, 7000);

        return () => clearInterval(intervalId);
    }, [getNextIndex]);

    useEffect(() => {
        if (isFadingIn) {
            const fadeTimeout = setTimeout(() => {
                setIsFadingIn(false);
            }, 1000);

            return () => clearTimeout(fadeTimeout);
        }
    }, [isFadingIn]);

    

    return (
        <>
            <div className="overflow-hidden flex justify-center items-center">
                <div className="carousel w-full object-cover">
                    {images?.map((image, index) => (
                        <div key={index} className={`carousel-item relative w-full flex justify-center items-center flex-1 overflow-hidden ${index === currentImageIndex ? 'visible' : 'hidden'}`}>
                            <div className={`image-wrapper ${isFadingOut && index === currentImageIndex ? 'fade-out' : ''} ${isFadingIn && index === currentImageIndex ? 'fade-in' : ''}`}>
                                <img
                                    src={image}
                                    className={`w-full object-cover md:h-full md:w-full h-96 opacity-70 dark:opacity-40 duration-300 ${index === currentImageIndex ? 'zoom-in' : ''}`}
                                    alt={`Image ${index}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute flex justify-center">
                    <div className="flex flex-col items-center justify-center h-[88vh]">
                        <h2 className="xl:text-6xl md:text-4xl text-3xl font-primary font-bold text-white dark:text-[#dafcf0] text-center md:leading-[1.2] drop-shadow-lg shadow-black mb-3 lg:mb-7">
                            Discover Your <span className='text-[#19a463]'>Dream </span>Career with BD Jobs <br />
                        </h2>
                        <p className='text-gray-200 dark:text-[#dafcf0] text-center text-base lg:text-lg max-w-5xl mb-7 md:mb-10 px-10'>BDjobs: The prominent job portal in Bangladesh, renowned for its user-friendly platform, connecting job seekers with an extensive array of career opportunities and resources for professional growth.</p>
                        <div className='w-full flex items-center justify-center '>
                            <div className="relative flex" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    className="bg-slate-100 dark:bg-teal-950 text-black dark:text-[#dafcf0] dark:opacity-80 peer block min-h-[auto] w-[50vw]  md:px-12 px-7 md:py-4 py-2 rounded-l border dark:border-zinc-700 border-stone-200 bg-opacity-90 leading-[1.6] outline-none transition-all duration-300 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput1"
                                    placeholder="Search Here..."

                                />
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="text-lg md:text-xl pointer-events-none absolute left-3 bottom-[6px] md:bottom-4 mb-[2px] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-400 dark:text-[#abd8c8]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                                >
                                    Search for Your Next Big Opportunity Here...
                                </label>
                                <div className='bg-[#19a463bb] hover:bg-[#19a463] w-3 rounded-r'>
                                    <button
                                    className="bg-[#19a463bb] hover:bg-[#19a463] font-primary font-semibold text-xl text-white dark:text-[#dafcf0] md:px-12 px-7 md:py-4 py-2 rounded-r"
                                    // onClick={handleExploreClick}
                                >
                                    Search
                                </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
