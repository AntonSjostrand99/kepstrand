import React from 'react';

interface DividerWithTextProps {
  text: string;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => {
  return (
    <div className="relative flex items-center justify-center my-10 bg-white border-4 border-black font-Bungee">
      <hr className="w-full border-4 border-custom-yellow" />
      <span className="absolute sm:text-2xl md:text-3xl text-xl font-bold mb-4 flex justify-center text-black p-4 rounded-lg border-4 border-black shadow-md bg-custom-yellow">
        {text}
      </span>
    </div>


  );
};

export default DividerWithText;