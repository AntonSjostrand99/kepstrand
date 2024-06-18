"use client"

import React, { useState } from 'react';
import Select from 'react-select';
import Card from '@/components/Card/Card';


const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: '#ffffff', // Vit bakgrund
    borderColor: '#000000', // Svart kant
    color: '#000000', // Svart text
    padding: '0.5rem',
    width: '100%', // Full width for mobile
    '@media(min-width: 640px)': {
      width: '200px', // Fixed width for larger screens
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#000000', // Svart text
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: '#ffffff', // Vit bakgrund
  }),
  option: (provided: any, state: { isFocused: any; }) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#fca311' : '#ffffff', // Gul vid hovring
    color: state.isFocused ? '#000000' : '#000000', // Svart text
    ':hover': {
      backgroundColor: '#fca311',
      color: '#000000',
    },
  }),
};

const optionsSort = [
  { value: 'default', label: 'Pris' },
  { value: 'price-asc', label: 'Pris: Lågt till Högt' },
  { value: 'price-desc', label: 'Pris: Högt till Lågt' },
];

const optionsColor = [
  { value: 'all', label: 'Alla färger' },
  { value: 'red', label: 'Röd' },
  { value: 'blue', label: 'Blå' },
  { value: 'green', label: 'Grön' },
];

const Shop = () => {
  const [sortOption, setSortOption] = useState(optionsSort[0]);
  const [selectedColor, setSelectedColor] = useState(optionsColor[0]);

  const handleSortChange = (selectedOption: React.SetStateAction<{ value: string; label: string; }>) => {
    setSortOption(selectedOption);
  };

  const handleColorChange = (selectedOption: React.SetStateAction<{ value: string; label: string; }>) => {
    setSelectedColor(selectedOption);
  };

  // Dummy data for demonstration purposes
  const products = [
    { id: 1, name: 'Produkt 1', color: 'red', price: 100, description: 'Description 1', image: '/bestseller.jpg' },
    { id: 2, name: 'Produkt 2', color: 'blue', price: 200, description: 'Description 2', image: '/bestseller.jpg' },
    { id: 3, name: 'Produkt 3', color: 'green', price: 150, description: 'Description 3', image: '/bestseller.jpg' },
    { id: 4, name: 'Produkt 4', color: 'red', price: 300, description: 'Description 4', image: '/bestseller.jpg' },
    { id: 5, name: 'Produkt 5', color: 'red', price: 100, description: 'Description 1', image: '/bestseller.jpg' },
    { id: 6, name: 'Produkt 6', color: 'blue', price: 200, description: 'Description 2', image: '/bestseller.jpg' },
    { id: 7, name: 'Produkt 7', color: 'green', price: 150, description: 'Description 3', image: '/bestseller.jpg' },
    { id: 8, name: 'Produkt 8', color: 'red', price: 300, description: 'Description 4', image: '/bestseller.jpg' },
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => selectedColor.value === 'all' || product.color === selectedColor.value)
    .sort((a, b) => {
      if (sortOption.value === 'price-asc') {
        return a.price - b.price;
      } else if (sortOption.value === 'price-desc') {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className='flex-col justify-center items-center'>

      <div className="container mx-auto px-4 py-12">
        <div className='flex flex-col justify-center items-center text-white mb-10 gap-4' >
          <h1 className='text-4xl font-bold '>Keps</h1>
          <p className='w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam obcaecati maiores similique, dolores quisquam labore cum sed fugiat ipsum consequuntur quasi </p>
        </div>

        <div className="mb-4 flex flex-col sm:flex-row justify-start items-center gap-3 rounded p-1 bg-custom-yellow border-4 border-custom-black">
          {/* Sort Options */}
          <div className="w-full sm:w-auto mb-3 sm:mb-0 cursor-pointer rounded border-2 border-black ">
            <Select
              styles={customStyles}
              value={sortOption}
              onChange={handleSortChange}
              options={optionsSort}
            />
          </div>
          {/* Filter Options */}
          <div className="w-full sm:w-auto mb-3 sm:mb-0 cursor-pointer rounded border-2 border-black">
            <Select
              styles={customStyles}
              value={selectedColor}
              onChange={handleColorChange}
              options={optionsColor}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default Shop;