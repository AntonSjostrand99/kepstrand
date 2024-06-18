import React, { useState } from 'react';
import Link from 'next/link';


const Cart = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const openSideNav = () => {
    setIsSideNavOpen(true);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <div className="relative">
      {/* Kundvagnsikonen med länk */}
      <div  className="text-white hover:text-gray-300 cursor-pointer" title="Kundvagn">
    
      </div>

      {/* Sidenav */}
      {isSideNavOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center ">
          <div className="bg-white w-11/12 max-w-md mx-auto rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Kundvagn</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={closeSideNav}
                aria-label="Close"
              >
               X
              </button>
            </div>
            <div className="mt-4">
              {/* Placera innehållet för kundvagnen här */}
              <p className="text-gray-700 mb-2">Din varukorg är tom</p>
              <button className='bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg border-4  border-black shadow-md transform transition-transform duration-300 cursor-pointer w-full'>Kassan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;