import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = () => {
  const [showInput, setShowInput] = useState(false);

  const handleIconClick = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="flex items-center">
      <SearchIcon className="text-white hover:text-gray-300 cursor-pointer" onClick={handleIconClick} />
      {showInput && (
        <input
          type="text"
          className="ml-2 p-2 border rounded text-black"
          placeholder="Sök..."
          
        />
      )}
    </div>
  );
};

export default SearchComponent;
