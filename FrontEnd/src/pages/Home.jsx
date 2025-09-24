import React from 'react';
import { Link } from 'react-router-dom';
import HowItWorks from '../components/PagesComp/Home/HowItWorks';
import OurPartners from '../components/PagesComp/Home/OurPartners';
import Testimonials from '../components/PagesComp/Home/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/bg-image.jpg")' }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            End Hunger, <span className="text-[#F36B4A]">Save Food</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
            Millions go hungry every day while surplus food goes to waste. <br className="hidden sm:inline" />
            With <span className="font-semibold text-[#F36B4A]">ZeroWaste</span>, you can make a real impact — donate your extra food and help feed someone in need today.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/donate"
              className="bg-[#F36B4A] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#e55a3a] transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Donate Food
            </Link>
            <Link
              to="/receive"
              className="bg-white text-[#F36B4A] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Receive Food
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


      </section>
      <HowItWorks />
      <OurPartners />
      <Testimonials />
    </div>
  );
};

export default Home;