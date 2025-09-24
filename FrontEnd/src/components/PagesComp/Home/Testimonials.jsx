import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../../../constant/testimonials.const';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Elements */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#222B3A] mb-4">Voices of Change</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#F36B4A] to-[#e55a3a] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our <span className="text-[#F36B4A] font-semibold">donors and receivers</span> making a difference
          </p>
        </div>

        {/* Testimonial Slider */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    
                    {/* Top Section: Badge + Content */}
                    <div className="flex flex-col items-center text-center mb-6">
                      {/* Type Badge */}
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                        testimonial.type === 'donor' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {testimonial.type === 'donor' ? 'Food Donor' : 'Food Receiver'}
                      </div>
                      
                      {/* Testimonial Content */}
                      <p className="text-lg text-gray-700 leading-relaxed italic max-w-2xl">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Bottom Section: Profile + Rating */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
                      
                      {/* Left: Profile Info */}
                      <div className="flex items-center gap-4">
                        {/* Image */}
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#F36B4A] shadow-md">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Name & Role */}
                        <div className="text-left">
                          <h4 className="text-lg font-bold text-[#222B3A]">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Right: Rating Stars */}
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">({testimonial.rating}.0)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:bg-[#F36B4A] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="text-lg" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:bg-[#F36B4A] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? 'bg-[#F36B4A] w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;