"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Select from 'react-select';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="slick-slider ">
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
      {/* Lägg till fler bilder eller innehåll här */}
    </Slider>
  );
};

export default Carousel;


