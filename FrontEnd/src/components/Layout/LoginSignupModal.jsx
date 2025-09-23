import React, { useState } from "react";

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4 relative z-10">
        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <button
            onClick={() => setIsLoginForm(true)}
            className={`flex-1 py-3 font-medium relative ${
              isLoginForm ? "text-[#F36B4A]" : "text-gray-500"
            }`}
          >
            Login
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F36B4A] transition-transform duration-300 ${
                isLoginForm ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </button>
          <button
            onClick={() => setIsLoginForm(false)}
            className={`flex-1 py-3 font-medium relative ${
              !isLoginForm ? "text-[#F36B4A]" : "text-gray-500"
            }`}
          >
            Sign Up
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F36B4A] transition-transform duration-300 ${
                !isLoginForm ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </button>
        </div>

        {/* Login Form */}
        {isLoginForm ? (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F36B4A] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F36B4A] focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#F36B4A] text-white py-3 rounded-lg font-medium hover:bg-[#e55a3a] transition duration-300"
            >
              Login
            </button>
          </form>
        ) : (
          /* Signup Form */
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F36B4A] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F36B4A] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F36B4A] focus:border-transparent"
                placeholder="Create a password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#222B3A] text-white py-3 rounded-lg font-medium hover:bg-[#1a2230] transition duration-300"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default LoginSignupModal;
