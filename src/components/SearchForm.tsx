import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('upto4');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex gap-4 mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="roomType"
            value="upto4"
            checked={roomType === 'upto4'}
            onChange={(e) => setRoomType(e.target.value)}
            className="mr-2"
          />
          <span className="text-sm">Upto 4 Rooms</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="roomType"
            value="group"
            checked={roomType === 'group'}
            onChange={(e) => setRoomType(e.target.value)}
            className="mr-2"
          />
          <span className="text-sm">Group Deals</span>
          <span className="ml-1 text-xs px-2 py-0.5 bg-pink-500 text-white rounded">NEW</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city or location"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Check In</label>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholderText="Select date"
            minDate={new Date()}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Check Out</label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholderText="Select date"
            minDate={checkIn || new Date()}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Guests</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            min="1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="text-xs text-gray-500 mt-2">Last Search:</div>

      <button
        className="mt-4 w-full bg-blue-500 text-white py-3 px-4 rounded-full hover:bg-blue-600 transition-colors text-lg font-semibold"
      >
        SEARCH
      </button>
    </div>
  );
};

export default SearchForm;