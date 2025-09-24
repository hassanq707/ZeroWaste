// import React from 'react';
// import { FaUpload, FaBell, FaTruck, FaHandHoldingHeart } from 'react-icons/fa';

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: FaUpload,
//       title: "Post Your Food",
//       description: "Share details of surplus food you want to donate"
//     },
//     {
//       icon: FaBell,
//       title: "Volunteer Notified",
//       description: "Nearest volunteer gets instant notification"
//     },
//     {
//       icon: FaTruck,
//       title: "Food Collection",
//       description: "Volunteer collects and verifies the food"
//     },
//     {
//       icon: FaHandHoldingHeart,
//       title: "Serve to Needy",
//       description: "Food distributed to people in need"
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#222B3A] mb-4">
//             How <span className="text-[#F36B4A]">ZeroWaste</span> Works
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Transforming surplus food into hope through our seamless process
//           </p>
//         </div>

//         {/* Animated Steps */}
//         <div className="relative">
//           {/* Main Connecting Line - Orange Gradient */}
//           <div className="hidden lg:block absolute top-24 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#F36B4A] to-transparent"></div>

//           <div className="grid opacity-90 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
//             {steps.map((step, index) => (
//               <div key={index} className="relative group">

//                 {/* Animated Circle */}
//                 <div className="absolute -top-2 -lg:top-4 left-1/2 transform -translate-x-1/2 z-20">
//                   <div className="w-16 h-16 bg-[#F36B4A] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition duration-500">
//                     <step.icon className="text-2xl" />
//                   </div>

//                   {/* Pulse Animation */}
//                   <div className="absolute inset-0 bg-[#F36B4A] rounded-full animate-ping opacity-20"></div>
//                 </div>

//                 {/* Step Card */}
//                 <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 text-center mt-8 transform group-hover:-translate-y-2 transition duration-500 border-2 border-transparent group-hover:border-[#F36B4A]">

//                   {/* Step Number */}
//                   <div className="mb-4">
//                     <span className="inline-block w-8 h-8 bg-[#F36B4A] text-white rounded-full text-sm font-bold flex items-center justify-center mx-auto">
//                       {index + 1}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <h3 className="text-2xl font-bold text-[#222B3A] mb-4">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {step.description}
//                   </p>

//                   {/* Hover Effect Line */}
//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#F36B4A] group-hover:w-full transition-all duration-500 rounded-full"></div>
//                 </div>


//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Animated CTA Button */}
//         <div className="text-center mt-16">
//           <button className="relative bg-[#F36B4A] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#e55a3a] transition duration-300 transform hover:scale-105 shadow-2xl group overflow-hidden">
//             <span className="relative z-10">Start Your Food Journey</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;



import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { steps } from '../../../constant/howitworks.const';


const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222B3A] mb-4">
            Track Your <span className="text-[#F36B4A]">Food Journey</span>
          </h2>
          <p className="text-md lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Follow your donation every step of the way with real-time tracking
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="relative ">

          {/* Progress Line - Fixed to connect all steps */}
          <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#F36B4A] transition-all duration-500 ease-in-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Steps Container - Centered */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-2 relative z-10">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              const isPending = index > activeStep;

              return (
                <div
                  key={index}
                  className="relative group cursor-pointer flex justify-center"
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Indicator */}
                  <div className="flex flex-col items-center text-center w-full max-w-xs">

                    {/* Step Circle */}
                    <div className={`relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${isCompleted
                        ? 'bg-[#F36B4A] border-[#F36B4A] scale-110'
                        : isActive
                          ? 'bg-white border-[#F36B4A] scale-110 shadow-lg'
                          : 'bg-white border-gray-300 group-hover:border-[#F36B4A]'
                      }`}>

                      {isCompleted ? (
                        <FaCheck className="text-white text-xl" />
                      ) : (
                        <step.icon className={`text-xl ${isActive ? 'text-[#F36B4A]' : 'text-gray-400'
                          }`} />
                      )}

                      {/* Step Number */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${isCompleted ? 'bg-green-500' : 'bg-[#F36B4A]'
                        } text-white`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className={`mt-4 transition-all duration-300 ${isActive ? 'scale-105' : 'scale-100'
                      }`}>
                      <h3 className={`text-lg font-semibold mb-2 ${isActive || isCompleted ? 'text-[#222B3A]' : 'text-gray-500'
                        }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isActive ? 'text-gray-700' : 'text-gray-500'
                        }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Progress Line - Enhanced */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-4 left-1/2 transform translate-x-20 z-0">
                      {/* Animated Line with Gradient */}
                      <div className="relative h-14 w-2">
                        {/* Background Line */}
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full"></div>

                        {/* Progress Fill */}
                        <div
                          className={`absolute bottom-0 left-0 w-full rounded-full transition-all duration-1000 ease-out ${isCompleted ? 'bg-gradient-to-t from-[#F36B4A] to-[#e55a3a]' : 'bg-transparent'
                            }`}
                          style={{
                            height: isCompleted ? '100%' : '0%',
                            boxShadow: isCompleted ? '0 0 10px rgba(243, 107, 74, 0.5)' : 'none'
                          }}
                        ></div>

                        {/* Animated Nodes */}
                        <div className="absolute -left-1 top-0 w-4 h-4 flex items-center justify-center">
                          <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isCompleted
                              ? 'bg-[#F36B4A] scale-150 ring-4 ring-[#F36B4A] ring-opacity-30'
                              : 'bg-gray-400'
                            }`}></div>
                        </div>

                        <div className="absolute -left-1 top-1/3 w-4 h-4 flex items-center justify-center">
                          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 delay-200 ${isCompleted
                              ? 'bg-[#F36B4A] scale-125 ring-2 ring-[#F36B4A] ring-opacity-30'
                              : 'bg-gray-400'
                            }`}></div>
                        </div>

                        <div className="absolute -left-1 bottom-0 w-4 h-4 flex items-center justify-center">
                          <div className={`w-1 h-1 rounded-full transition-all duration-500 delay-300 ${isCompleted
                              ? 'bg-[#F36B4A] scale-110'
                              : 'bg-gray-400'
                            }`}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Navigation - Centered */}
        <div className="flex justify-center space-x-4 mt-12">
          <button
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${activeStep === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#222B3A] text-white hover:bg-[#1a2230]'
              }`}
          >
            Previous
          </button>

          <button
            onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStep === steps.length - 1}
            className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${activeStep === steps.length - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#F36B4A] text-white hover:bg-[#e55a3a]'
              }`}
          >
            Next
          </button>
        </div>


      </div>
    </section>
  );
};

export default HowItWorks;