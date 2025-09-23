import React from 'react';
import { Link } from 'react-router-dom';
import HowItWorks from '../components/PagesComp/HowItWorks';
import Testimonials from '../components/PagesComp/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/bg-image.png")' }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            End Hunger, <span className="text-[#F36B4A]">Save Food</span>
          </h1>

          <p className="text-base md:text-lg mb-6 leading-relaxed">
            Your surplus food can feed someone in need. Join ZeroWaste to donate
            excess food and fight hunger in your community.
          </p>

          <div className="flex justify-center">
            <Link
              to="/donate"
              className="bg-[#F36B4A] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#e55a3a] transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Donate/Receive Now
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto px-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#F36B4A]">10,000+</div>
            <div className="text-white text-sm">Meals Served</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#F36B4A]">500+</div>
            <div className="text-white text-sm">Active Donors</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#F36B4A]">50+</div>
            <div className="text-white text-sm">Communities Served</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
      <Testimonials/>
    </div>
  );
};

export default Home;