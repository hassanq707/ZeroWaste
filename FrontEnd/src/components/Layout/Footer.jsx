import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaHeart
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' },
        { path: '/donate', label: 'Donate Food' },
        { path: '/volunteer', label: 'Become Volunteer' },
        { path: '/partners', label: 'Our Partners' }
    ];

    const services = [
        { label: 'Food Donation', path: '/donate' },
        { label: 'Food Recovery', path: '/recovery' },
        { label: 'Community Kitchen', path: '/kitchen' },
        { label: 'Food Distribution', path: '/distribution' },
        { label: 'Awareness Programs', path: '/awareness' },
        { label: 'Corporate Partnerships', path: '/corporate' }
    ];

    const socialLinks = [
        { icon: FaFacebook, url: '#', color: 'hover:text-blue-600' },
        { icon: FaTwitter, url: '#', color: 'hover:text-blue-400' },
        { icon: FaInstagram, url: '#', color: 'hover:text-pink-600' },
        { icon: FaLinkedin, url: '#', color: 'hover:text-blue-700' }
    ];

    return (
        <footer className="bg-[#222B3A] text-white mt-auto">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

                    {/* Company Info */}
                    <div>
                        <div className="flex items-center mb-4 ">
                            <div className="w-11 h-11 rounded-full -ml-1 flex items-center justify-center mr-1">
                                <img src="./images/logo2.png" alt="logo" />
                            </div>
                            <span className="text-xl font-bold">ZeroWaste</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            Transforming surplus food into hope. Bridging the gap between waste and hunger with sustainable solutions.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className={`w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center transition duration-300 ${social.color} hover:bg-gray-600`}
                                >
                                    <social.icon className="text-sm" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-semibold mb-4 text-[#F36B4A]">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-[#F36B4A] transition duration-300 flex items-center text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#F36B4A] rounded-full mr-2"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-base font-semibold mb-4 text-[#F36B4A]">Our Services</h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        to={service.path}
                                        className="text-gray-300 hover:text-white transition duration-300 text-sm"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="p-4 rounded-lg">
                        <h3 className="text-base font-semibold mb-4 text-[#F36B4A]">Contact Us</h3>

                        <div className="space-y-3">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-[#F36B4A] mt-0.5 mr-2 flex-shrink-0 text-sm" />
                                <span className="text-gray-300 text-sm">
                                    C-265, Rafa-e-amm, Malir Halt, Karachi, 75050
                                   
                                </span>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-[#F36B4A] mr-2 text-sm" />
                                <span className="text-gray-300 text-sm">+92 315 2514464</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-[#F36B4A] mr-2 text-sm" />
                                <span className="text-gray-300 text-sm">info@zerowaste.com</span>
                            </div>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="mt-6">
                            <h4 className="font-semibold mb-2 text-sm">Stay Updated</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full flex-1 px-3 py-1.5 bg-gray-700 border border-gray-600 rounded-l-lg focus:outline-none focus:border-[#F36B4A] text-sm"
                                />
                                <button className="bg-[#F36B4A] px-3 py-1.5 rounded-r-lg hover:bg-[#e55a3a] transition duration-300 text-sm">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="text-center">
                        <div className="text-gray-400 text-xs md:text-sm mb-2 ">
                            © {currentYear} ZeroWaste. All rights reserved.
                        </div>
                        <p className="text-xs">
                            Made with ❤️ for a better world
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
