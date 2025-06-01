import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#7C3AED] text-white py-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">© 2025 All Rights Reserved</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:opacity-80 transition">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;