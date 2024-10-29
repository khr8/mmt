import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#041422] text-white py-3">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtlogo.png" 
               alt="MakeMyTrip" className="h-8" />
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/property.png" 
                 alt="Property" className="h-6" />
            <div className="text-xs">
              <div>List Your Property</div>
              <div className="text-gray-400">Start earning today!</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mybiz.png" 
                 alt="MyBiz" className="h-6" />
            <div className="text-xs">
              <div>Introducing myBiz</div>
              <div className="text-gray-400">Business Travel Solution</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mytrips.png" 
                 alt="MyTrips" className="h-6" />
            <div className="text-xs">
              <div>My Trips</div>
              <div className="text-gray-400">Manage your bookings</div>
            </div>
          </div>
          <button className="bg-white text-[#008cff] px-4 py-2 rounded-full text-sm font-medium">
            Login or Create Account
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;