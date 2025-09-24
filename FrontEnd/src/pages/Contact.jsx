import React, { useState } from 'react';
import {FaEnvelope , FaPaperPlane, FaUser, FaBuilding } from 'react-icons/fa';
import { contactInfo, departments } from '../constant/contact.const';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  

  
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-[#222B3A] mb-6">Contact Information</h2>

              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start mb-6 last:mb-0">
                  <div className="bg-[#F36B4A] p-3 rounded-full mr-4 flex-shrink-0">
                    <item.icon className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222B3A]">{item.title}</h3>
                    <p className="text-gray-800 font-medium">{item.details}</p>
                    {item.subDetails && <p className="text-gray-600 text-sm">{item.subDetails}</p>}
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}

              {/* Departments */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-[#222B3A] mb-4">Specific Departments</h3>
                {departments.map((dept, index) => (
                  <div key={index} className="mb-4 last:mb-0 p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-[#F36B4A]">{dept.name}</h4>
                    <p className="text-sm text-gray-600">{dept.email}</p>
                    <p className="text-sm text-gray-600">{dept.phone}</p>
                    <p className="text-xs text-gray-500 mt-1">{dept.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#222B3A] mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaUser className="inline mr-2 text-[#F36B4A]" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F36B4A] focus:border-transparent transition duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaEnvelope className="inline mr-2 text-[#F36B4A]" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F36B4A] focus:border-transparent transition duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaBuilding className="inline mr-2 text-[#F36B4A]" />
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F36B4A] focus:border-transparent transition duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F36B4A] focus:border-transparent transition duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="donation">Food Donation</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F36B4A] focus:border-transparent transition duration-300"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F36B4A] text-white py-4 rounded-lg font-semibold hover:bg-[#e55a3a] transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#222B3A] mb-4">Find Us Here</h3>
              <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.626460340734!2d67.1033432150023!3d24.86268328405395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b9e50d3e6c7%3A0x9a8c4d8c2c89f3b!2sBusiness%20Avenue%2C%20Shahrah-e-Faisal%2C%20Karachi!5e0!3m2!1sen!2s!4v1695658933764!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;