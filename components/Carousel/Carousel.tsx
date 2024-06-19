"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import styles from './Carousel.module.css' // Importera CSS-modulen

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
    <Slider {...settings} className="slick-slider font-Bungee">
      <div className={`${styles['rounded-lg']} ${styles['border-4']} ${styles['border-black']} ${styles['shadow-md']} ${styles['bg-white']}`}>
        <img
          className={`${styles['w-full']} ${styles['h-auto']} ${styles['border-b-4']} ${styles['border-black']}`}
          src="/bestseller.jpg"
          alt="Slide 1"
        />
        <div>
          <Link href="/shop">
            <h2 className={`${styles['p-2']} ${styles['text-center']} ${styles['text-xl']} ${styles['hover:bg-yellow-500']}`}>Köp</h2>
          </Link>
        </div>
      </div>
      <div className={`${styles['rounded-lg']} ${styles['border-4']} ${styles['border-black']} ${styles['shadow-md']} ${styles['bg-white']}`}>
        <img
          className={`${styles['w-full']} ${styles['h-auto']} ${styles['border-b-4']} ${styles['border-black']}`}
          src="/bestseller.jpg"
          alt="Slide 2"
        />
        <div>
          <Link href="/shop">
            <h2 className={`${styles['p-2']} ${styles['text-center']} ${styles['text-xl']} ${styles['hover:bg-yellow-500']}`}>Köp</h2>
          </Link>
        </div>
      </div>
      <div className={`${styles['rounded-lg']} ${styles['border-4']} ${styles['border-black']} ${styles['shadow-md']} ${styles['bg-white']}`}>
        <img
          className={`${styles['w-full']} ${styles['h-auto']} ${styles['border-b-4']} ${styles['border-black']}`}
          src="/bestseller.jpg"
          alt="Slide 3"
        />
        <div>
          <Link href="/shop">
            <h2 className={`${styles['p-2']} ${styles['text-center']} ${styles['text-xl']} ${styles['hover:bg-yellow-500']}`}>Köp</h2>
          </Link>
        </div>
      </div>
      <div className={`${styles['rounded-lg']} ${styles['border-4']} ${styles['border-black']} ${styles['shadow-md']} ${styles['bg-white']}`}>
        <img
          className={`${styles['w-full']} ${styles['h-auto']} ${styles['border-b-4']} ${styles['border-black']}`}
          src="/bestseller.jpg"
          alt="Slide 4"
        />
        <div>
          <Link href="/shop">
            <h2 className={`${styles['p-2']} ${styles['text-center']} ${styles['text-xl']} ${styles['hover:bg-yellow-500']}`}>Köp</h2>
          </Link>
        </div>
      </div>
      <div className={`${styles['rounded-lg']} ${styles['border-4']} ${styles['border-black']} ${styles['shadow-md']} ${styles['bg-white']}`}>
        <img
          className={`${styles['w-full']} ${styles['h-auto']} ${styles['border-b-4']} ${styles['border-black']}`}
          src="/bestseller.jpg"
          alt="Slide 5"
        />
        <div>
          <Link href="/shop">
            <h2 className={`${styles['p-2']} ${styles['text-center']} ${styles['text-xl']} ${styles['hover:bg-yellow-500']}`}>Köp</h2>
          </Link>
        </div>
      </div>
      {/* Lägg till fler bilder eller innehåll här */}
    </Slider>
  );
};

export default Carousel;