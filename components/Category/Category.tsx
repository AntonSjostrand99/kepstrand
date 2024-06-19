import React from 'react'

import Link from 'next/link';
import DividerWithText from '../DividerWithText/DividerWithText';

const categories = [
    { name: 'Snapbacks', image: '/Category-bild.png', link: '/shop' },
    { name: 'Beanies', image: '/Category-bild.png', link: '/shop' },
    { name: 'Trucker Hats', image: '/Category-bild.png', link: '/shop' },
];

function Category() {
  return (
    <div className="container mx-auto py-8 font-Bungee">
    <DividerWithText text="Kategorier"/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {categories.map((category) => (
          <Link key={category.name} href={category.link}>
          
              <div className="relative overflow-hidden bg-white  rounded-lg border-4 border-black shadow-md font-Bungee">
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105" />
                <div className="absolute inset-0  flex items-center justify-center transition-opacity duration-300 group-hover:opacity-75">
                  <span className="bg-custom-yellow hover:bg-white active:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg border-4 border-black shadow-md transform transition-transform duration-300 cursor-pointer">{category.name}</span>
                </div>
              </div>
         
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Category;






