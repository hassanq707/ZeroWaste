import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import LoginSignupModal from './LoginSignupModal';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="w-11 h-11 rounded-full flex items-center justify-center">
                <img src='/images/logo.png' alt="ZeroWaste Logo" className="w-full mr-2" />
              </div>
              <span className="text-xl md:text-2xl mb-.5 font-bold text-[#2a3548]">
                Zero<span className='text-[#f0613d]'>Waste</span>
              </span>
            </div>

            {/* Middle Links - Desktop */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 group"
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

            {/* Login/Signup Button - Desktop */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="bg-[#F36B4A] text-white px-4 lg:px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#e55a3a] transition duration-300 text-sm lg:text-base"
              >
                <FaUser className="text-sm" />
                <span>Login/Signup</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Mobile Login Button */}
              <button
                onClick={() => setIsLoginOpen(true)}
                className="bg-[#F36B4A] text-white p-2 rounded-lg hover:bg-[#e55a3a] transition duration-300"
              >
                <FaUser className="text-sm" />
              </button>
              
              {/* Hamburger Button */}
              <button
                onClick={toggleMobileMenu}
                className="text-[#222B3A] hover:text-[#F36B4A] transition duration-300 p-2 rounded-lg"
              >
                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="bg-white py-4 space-y-3 border-t">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#F36B4A] text-white' 
                        : 'text-[#222B3A] hover:bg-gray-100 hover:text-[#F36B4A]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              {/* Mobile Login/Signup Full Button */}
              <button
                onClick={() => {
                  setIsLoginOpen(true);
                  closeMobileMenu();
                }}
                className="w-full text-left px-4 py-3 bg-[#F36B4A] text-white rounded-lg font-medium hover:bg-[#e55a3a] transition duration-300 flex items-center space-x-2"
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