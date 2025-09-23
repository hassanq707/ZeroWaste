import {FaBell, FaTruck, FaHandHoldingHeart } from 'react-icons/fa';
import { BiDonateHeart } from "react-icons/bi";

export const steps = [
    {
      icon: BiDonateHeart,
      title: "Post Your Food",
      description: "Share details of surplus food",
      status: "active"
    },
    {
      icon: FaBell,
      title: "Volunteer Notified",
      description: "Nearest volunteer gets notification",
      status: "pending"
    },
    {
      icon: FaTruck,
      title: "Food Collection",
      description: "Volunteer collects and verifies the food",
      status: "pending"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Serve to Needy",
      description: "Food distributed to people in need",
      status: "pending"
    }
  ];