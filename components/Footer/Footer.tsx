import React from 'react';
import Image from "next/image";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t-2 text-white py-8 ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Sektion 1: Kontakt */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Kontakta oss</h3>
          <p className="text-sm">Telefon: 123-456-7890</p>
          <p className="text-sm">E-post: info@example.com</p>
        </div>

        {/* Sektion 2: Länkar */}
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-xl font-bold mb-2">Länkar</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Om oss</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Våra tjänster</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
          </ul>
        </div>

        {/* Sektion 3: Nyhetsbrev */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-bold mb-2">Nyhetsbrev</h4>
          <p className="text-sm mb-2">Anmäl dig till vårt nyhetsbrev för att få de senaste nyheterna och erbjudandena direkt i din inkorg.</p>
          <form className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-2">
            <input type="email" placeholder="Din e-postadress" className="w-full md:w-auto px-4 py-2 text-gray-800 rounded" />
            <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Prenumerera</button>
          </form>
        </div>
      </div>
      <div className='flex justify-center items-center mt-10'>
      <div className="socials__section__inner flex justify-center items-center gap-2">
              <div className="socials__box rounded-lg border-2 border-gray-700  shadow-md flex justify-center items-center p-1">
                <a href="" className='text-white hover:text-yellow-600'>
             <InstagramIcon/>
             </a>
              </div>
              <div className="socials__box rounded-lg border-2 border-gray-700 shadow-md  flex justify-center items-center p-1">
                <a href="" className='text-white hover:text-yellow-600'>
              <FacebookIcon/>
              </a>
              </div>
              <div className="socials__box rounded-lg border-2 border-gray-700 shadow-md  flex justify-center items-center p-1">
                <a href="" className='text-white hover:text-yellow-600'>
                <YouTubeIcon/>
                </a>
              </div>
              <div className="socials__box rounded-lg border-2 border-gray-700 shadow-md flex justify-center items-center p-1">
                <a href="#" className=" text-white hover:text-yellow-600 ">
                 <GitHubIcon/>
                </a>
              </div>
            </div>

      </div>
      <div className="border-t border-gray-700 mt-1 pt-6 text-center">
        <p className="text-sm">&copy; 2024 Kepstrand. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default Footer;