import React, { useCallback, useEffect, useState } from 'react'
import images from './BannerImage';
import "./Banner.css"
import SearchBar from '../SearchBar';


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
            <div className="overflow-hidden flex justify-center items-center !w-full ">
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
                       
                    </div>
                </div>
            </div>
        </>
    )
}
