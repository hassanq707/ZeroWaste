// import React from 'react';
// import { Link } from 'react-router-dom';
// import HowItWorks from '../components/PagesComp/Home/HowItWorks';
// import OurPartners from '../components/PagesComp/Home/OurPartners';
// import Testimonials from '../components/PagesComp/Home/Testimonials';

// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex flex-col items-center justify-center py-8">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: 'url("/images/bg-image.jpg")' }}
//         ></div>

//         {/* Black Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>

//         {/* Hero Content */}
//         <div className="relative z-10 text-center text-white w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight px-2">
//             End Hunger, <span className="text-[#F36B4A]">Save Food</span>
//           </h1>

//           <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed text-gray-100 px-1">
//             Millions go hungry every day while surplus food goes to waste.{' '}
//             <br className="hidden xs:inline" />
//             With <span className="font-semibold text-[#F36B4A]">ZeroWaste</span>, you can make a real impact — donate your extra food and help feed someone in need today.
//           </p>

//           <div className="flex justify-center gap-4 flex-wrap">
            
//             <Link
//               to="/donate"
//               className="bg-[#F36B4A] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#e55a3a] transition duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Donate/Receive Food
//             </Link>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-8 sm:mt-12 max-w-3xl mx-auto px-4 w-full">
//           <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 sm:p-4 text-center">
//             <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F36B4A]">10K+</div>
//             <div className="text-white text-xs sm:text-sm">Meals Served</div>
//           </div>
//           <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 sm:p-4 text-center">
//             <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F36B4A]">500+</div>
//             <div className="text-white text-xs sm:text-sm">Active Donors</div>
//           </div>
//           <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 sm:p-4 text-center">
//             <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F36B4A]">50+</div>
//             <div className="text-white text-xs sm:text-sm">Communities</div>
//           </div>
//         </div>

        
//       </section>

//       {/* Components */}
//       <HowItWorks />
//       <OurPartners />
//       <Testimonials />
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { Link } from 'react-router-dom';
import HowItWorks from '../components/PagesComp/Home/HowItWorks';
import OurPartners from '../components/PagesComp/Home/OurPartners';
import Testimonials from '../components/PagesComp/Home/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative lg:min-h-screen md:h-[80vh] h-[70vh] flex flex-col items-center justify-center py-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/bg-image.jpg")' }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 lg:mt-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 leading-tight">
            End Hunger, <span className="text-[#F36B4A]">Save Food</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-gray-100 px-2">
            Millions go hungry every day while surplus food goes to waste.{' '}
            <br className="hidden sm:inline" />
            With <span className="font-semibold text-[#F36B4A]">ZeroWaste</span>, you can make a real impact.
          </p>

          <div className="flex justify-center gap-3 sm:gap-4">
            <Link
              to="/donate"
              className="bg-[#F36B4A] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold hover:bg-[#e55a3a] transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Donate/Receive Food
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-6 sm:mt-8 lg:mt-12 max-w-3xl mx-auto px-4 w-full">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 sm:p-3 lg:p-4 text-center">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#F36B4A]">10K+</div>
            <div className="text-white text-xs sm:text-sm">Meals Served</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 sm:p-3 lg:p-4 text-center">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#F36B4A]">500+</div>
            <div className="text-white text-xs sm:text-sm">Active Donors</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 sm:p-3 lg:p-4 text-center">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#F36B4A]">50+</div>
            <div className="text-white text-xs sm:text-sm">Communities</div>
          </div>
        </div>
      </section>

      {/* Components */}
      <HowItWorks />
      <OurPartners />
      <Testimonials />
    </div>
  );
};

export default Home;