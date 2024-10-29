import React from 'react';
import { FaPlane, FaHotel, FaUmbrella, FaGift, FaTrain, FaBus, FaCar, FaDollarSign, FaWallet } from 'react-icons/fa';

const NavBar = () => {
  const navItems = [
    { icon: <FaPlane />, label: 'Flights' },
    { icon: <FaHotel />, label: 'Hotels' },
    { icon: <FaUmbrella />, label: 'Homestays & Villas' },
    { icon: <FaGift />, label: 'Holiday Packages' },
    { icon: <FaTrain />, label: 'Trains' },
    { icon: <FaBus />, label: 'Buses' },
    { icon: <FaCar />, label: 'Cabs' },
    { icon: <FaDollarSign />, label: 'Forex Card' },
    { icon: <FaWallet />, label: 'Travel Insurance' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center text-gray-600 hover:text-blue-500 text-sm"
              >
                <span className="text-xl mb-1">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;