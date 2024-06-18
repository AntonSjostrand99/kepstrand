import React, { useState } from 'react';


const SearchComponent = () => {
  const [showInput, setShowInput] = useState(false);

  const handleIconClick = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="flex items-center">
    
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
