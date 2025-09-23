import {FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa';

export const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' },
        { path: '/donate', label: 'Donate Food' },
        { path: '/volunteer', label: 'Become Volunteer' },
        { path: '/partners', label: 'Our Partners' }
];

export const services = [
        { label: 'Food Donation', path: '/donate' },
        { label: 'Food Recovery', path: '/recovery' },
        { label: 'Community Kitchen', path: '/kitchen' },
        { label: 'Food Distribution', path: '/distribution' },
        { label: 'Awareness Programs', path: '/awareness' },
        { label: 'Corporate Partnerships', path: '/corporate' }
];

export const socialLinks = [
        { icon: FaFacebook, url: '#', color: 'hover:text-blue-600' },
        { icon: FaTwitter, url: '#', color: 'hover:text-blue-400' },
        { icon: FaInstagram, url: '#', color: 'hover:text-pink-600' },
        { icon: FaLinkedin, url: '#', color: 'hover:text-blue-700' }
];