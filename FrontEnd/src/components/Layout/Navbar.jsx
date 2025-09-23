import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import LoginSignupModal from './LoginSignupModal';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="w-11 h-11 bg-[#F36B4A] rounded-full flex items-center justify-center mr-2">
                <img src='/images/logo.png' alt="ZeroWaste Logo" />
              </div>
              <span className="text-2xl font-bold text-[#2a3548]">
                Zero<span className='text-[#F36B4A]'>Waste</span>
              </span>
            </div>

            {/* Middle Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 group"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-[#222B3A] group-hover:text-white'
                      }`}
                    >
                      {link.label}
                    </span>
                    <span
                      className={`absolute inset-0 bg-[#F36B4A] rounded-md transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </div>

            {/* Login/Signup Button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="bg-[#F36B4A] text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#e55a3a] transition duration-300"
              >
                <FaUser className="text-sm" />
                <span>Login/Signup</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal Call */}
      <LoginSignupModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </>
  );
};

export default Navbar;
