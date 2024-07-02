"use client"

import React, { useState, useEffect, useRef } from 'react';
import AliceCarousel, { Link } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const items = [
    <div key="1" className="w-full h-full pr-2 font-Bungee">
        <div className="rounded-lg border-4 border-black shadow-md bg-white">
            <img
                className="w-full h-auto border-b-4 border-black"
                src="/bestseller.jpg"
                alt="Slide 1"
            />
            <div className=''>
                <Link href="/shop">
                    <h2 className='p-2 text-center text-xl hover:bg-yellow-500'>Köp</h2>
                </Link>
            </div>
        </div>
    </div>,
    <div key="2" className=" w-full h-full pr-2 font-Bungee">
        <div className="rounded-lg border-4 border-black shadow-md bg-white">
            <img
                className="w-full h-auto border-b-4 border-black"
                src="/bestseller.jpg"
                alt="Slide 1"
            />
            <div className=''>
                <Link href="/shop">
                    <h2 className='p-2 text-center text-xl hover:bg-yellow-500'>Köp</h2>
                </Link>
            </div>
        </div>
    </div>,
    <div key="3" className=" w-full h-full pr-2 font-Bungee">
        <div className="rounded-lg border-4 border-black shadow-md bg-white">
            <img
                className="w-full h-auto border-b-4 border-black"
                src="/bestseller.jpg"
                alt="Slide 1"
            />
            <div className=''>
                <Link href="/shop">
                    <h2 className='p-2 text-center text-xl hover:bg-yellow-500'>Köp</h2>
                </Link>
            </div>
        </div>
    </div>,
    <div key="4" className=" w-full h-full pr-2 font-Bungee">
        <div className="rounded-lg border-4 border-black shadow-md bg-white">
            <img
                className="w-full h-auto border-b-4 border-black"
                src="/bestseller.jpg"
                alt="Slide 1"
            />
            <div className=''>
                <Link href="/shop">
                    <h2 className='p-2 text-center text-xl hover:bg-yellow-500'>Köp</h2>
                </Link>
            </div>
        </div>
    </div>,
    <div key="5" className=" w-full h-full pr-2 font-Bungee">
        <div className="rounded-lg border-4 border-black shadow-md bg-white">
            <img
                className="w-full h-auto border-b-4 border-black"
                src="/bestseller.jpg"
                alt="Slide 1"
            />
            <div className=''>
                <Link href="/shop">
                    <h2 className='p-2 text-center text-xl hover:bg-yellow-500'>Köp</h2>
                </Link>
            </div>
        </div>
    </div>,
    <div key="6" className=" w-full h-full pr-2 font-Bungee">
        <div className="rounded-lg border-4 border-black shadow-md bg-white">

            <img
                className="w-full h-auto border-b-4 border-black"
                src="/bestseller.jpg"
                alt="Slide 1"
            />
            <div className=''>
                <Link href="/shop">
                    <h2 className='p-2 text-center text-xl hover:bg-yellow-500'>Köp</h2>
                </Link>
            </div>
        </div>
    </div>,

];

const Carousel: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const carouselRef = useRef<AliceCarousel>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
        1224: { items: 5 },
    };

    if (!isMounted) {
        return null;
    }

    return (
        <div className="relative">
            <AliceCarousel
                items={items}
                autoPlay={true}
                autoPlayInterval={6000}
                infinite={true}
                responsive={responsive}
                disableButtonsControls={true}
                disableDotsControls={true}
                ref={carouselRef}
                mouseTracking={true}
            />
            <div className=" bottom-4 left-0 w-full flex items-center gap-2 mt-2">
                <button
                    className=" p-2 text-black px-4 rounded-md shadow-md focus:outline-none  border-black border-2 bg-custom-yellow hover:bg-white"
                    onClick={() => carouselRef.current?.slidePrev()}
                >
                    <ArrowBackIosIcon />
                </button>
                <button
                    className=" p-2 text-black px-4 rounded-md shadow-md focus:outline-none  border-black border-2 bg-custom-yellow hover:bg-white"
                    onClick={() => carouselRef.current?.slideNext()}
                >
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
