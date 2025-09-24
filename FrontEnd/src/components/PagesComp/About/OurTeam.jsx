import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { teamMembers } from '../../../constant/About.const';

const Team = () => {
    const [currentSlide, setCurrentSlide] = useState(0);



    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center mb-2 lg:mb-16">
                    <h2 className="text-4xl font-bold text-[#222B3A] mb-4">
                        Meet Our <span className="text-[#F36B4A]">Team</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#F36B4A] to-[#e55a3a] mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Dedicated professionals working together to fight hunger and reduce food waste
                    </p>
                </div>

                {/* Desktop - Grid */}
                <div className="hidden  lg:flex flex-wrap justify-center gap-6">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="relative group w-40 h-40 bg-white shadow-md rounded-full flex items-center justify-center cursor-pointer transition-transform duration-400 hover:scale-115 hover:rounded-2xl">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="z-40 w-32 h-32 rounded-full object-cover absolute transition-all duration-400 group-hover:rounded-2xl group-hover:-translate-y-12"
                            />
                            <div className="absolute bottom-1/4 text-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-10 transition-all duration-500 w-full">
                                <h2 className="text-[#2d1945] font-bold text-base mb-1">{member.name}</h2>
                                <p className="text-[#2d1945] text-sm mb-2">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Mobile Slider */}
                <div className="lg:hidden relative">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-3 rounded-full shadow-lg hover:bg-[#F36B4A] hover:text-white transition duration-300 z-10"
                    >
                        <FaChevronLeft className="text-lg" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-3 rounded-full shadow-lg hover:bg-[#F36B4A] hover:text-white transition duration-300 z-10"
                    >
                        <FaChevronRight className="text-lg" />
                    </button>

                    <div className="overflow-hidden h-[320px]">
                        <div
                            className="flex transition-transform duration-500 ease-in-out h-full"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="w-full flex-shrink-0 px-4 h-full flex justify-center items-center"
                                >
                                    <div className="relative group w-44 h-44 bg-white shadow-md rounded-full flex items-center justify-center cursor-pointer transition-transform duration-400 hover:scale-[1.15] hover:rounded-2xl">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="z-40 w-36 h-36 rounded-full object-cover absolute transition-all duration-400 group-hover:rounded-2xl group-hover:-translate-y-12"
                                        />
                                        <div className="absolute bottom-1/4 text-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-10 transition-all duration-500 w-full">
                                            <h2 className="text-[#2d1945] font-bold text-base mb-1">{member.name}</h2>
                                            <p className="text-[#2d1945] text-sm mb-2">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center space-x-2">
                        {teamMembers.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#F36B4A] w-6 h-3' : 'bg-gray-300 w-3 h-3'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Team;
