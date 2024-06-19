import React from 'react';
import Image from 'next/image';




const Card = ({ product }) => {
  return (
    <div className="bg-gray-200 border-4 border-black shadow-md rounded-lg p-4 flex flex-col justify-start gap-4">
      <div className="flex justify-center">
        <Image
          className="object-cover rounded-t-lg border border-black"
          layout="responsive"
          width={100}
          height={150}
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="text-xl font-semibold text-gray-800">{product.name}</div>
      <div className="text-sm font-light text-gray-600">{product.description}</div>
      <hr className="border-t border-gray-800 my-2" />
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold text-gray-800">
          <span className="text-gray-600">SEK</span> {product.price}
        </div>
        <button className="flex items-center justify-center h-9 w-9 bg-white text-black border-4 border-black rounded hover:border-custom-yellow hover:text-custom-yellow transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current">
            <path d="M397.78 316h-205.13a15 15 0 0 1-14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1-14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" />
            <path d="M222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1-57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0-27.48-27.47z" />
            <path d="M368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1-57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0-27.48-27.47z" />
            <path d="M158.08 165.49a15 15 0 0 1-14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1-14.23 19.74z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
