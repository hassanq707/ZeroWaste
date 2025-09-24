import React from 'react';
import { FaLightbulb, FaHandHoldingHeart } from 'react-icons/fa';
import { missionPoints } from '../constant/About.const';
import OurTeam from '../components/PagesComp/About/OurTeam'

const About = () => {


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/About/About-bg.jpeg"
            alt="Helping hands serving food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">About Zero<span className='text-[#F36B4A]'>Waste</span></h1>
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            Transforming <span className="text-[#F36B4A] font-semibold">Food Waste</span> into<br />
            <span className="text-[#F36B4A] font-semibold">Hope for Communities</span>
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-200">
              Bridging the gap between surplus food and hunger across Pakistan
            </p>
          </div>
        </div>
      </section>



      {/* Our Mission Section with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222B3A] mb-4">
              Our <span className="text-[#F36B4A]">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to creating a sustainable future where food waste is eliminated
              and every person has access to nutritious meals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="text-center group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-6 h-48">
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[#F36B4A] w-12 h-12 rounded-full flex items-center justify-center">
                      <point.icon className="text-white text-xl" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#222B3A] mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurTeam />


      {/* Why We Started Section - Updated with Pakistan context */}
      <section className="py-2 lg:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#222B3A] mb-6">
                Why We <span className="text-[#F36B4A]">Started</span>
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every year in Pakistan, around <strong>40 million tons</strong> of food is wasted,
                  while more than 40 million people face food insecurity. We noticed that in
                  restaurants, hotels, and events, tons of perfectly good food goes to waste.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  During COVID-19, the situation became even worse. On one side, restaurants
                  were throwing away food, and on the other side, thousands of families were
                  struggling to get even one proper meal. That was the moment we decided to
                  find a solution to this problem.
                </p>


                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#F36B4A]">
                  <FaLightbulb className="text-3xl text-[#F36B4A] mb-3" />
                  <h4 className="font-bold text-[#222B3A] mb-2">Our Vision</h4>
                  <p className="text-gray-600">
                    A Pakistan where extra food becomes a resource for communities,
                    not waste for landfills.
                  </p>
                </div>


                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-red-600 mb-1">20M</div>
                    <div className="text-sm text-red-600">Tons Food Wasted Annually</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">37-43%</div>
                    <div className="text-sm text-orange-600">People Facing Hunger Annually</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/images/About/food_crisis.webp"
                    alt="Food waste in Pakistan"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">Food Waste Crisis</h4>
                    <p className="text-sm opacity-90">Tons of food wasted daily</p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/images/About/Hungry.jpg"
                    alt="Hungry children in Pakistan"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">Hunger Reality</h4>
                    <p className="text-sm opacity-90">Millions without proper meals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#222B3A] to-[#1a2230] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaHandHoldingHeart className="text-5xl text-[#F36B4A] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Movement</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a food donor, volunteer, or supporter, together we can create
            a hunger-free Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F36B4A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e55a3a] transition duration-300">
              Donate/Receive Now
            </button>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;