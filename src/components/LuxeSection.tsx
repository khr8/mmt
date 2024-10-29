import React from 'react';

const LuxeSection = () => {
  const luxeOptions = [
    {
      title: "Luxe properties in India",
      description: "Explore by Luxury brands, themes & top picks",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Luxe Villas",
      description: "Premium Villas with Superlative Experience",
      image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Luxe International",
      description: "Dubai, Maldives, Thailand & More",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <div className="mb-8">
        <h2 className="luxe-card text-3xl font-bold">INTRODUCING</h2>
        <h3 className="luxe-card text-4xl font-bold">MMT Luxe Selections</h3>
        <p className="text-gray-600 mt-2">
          Escape to the epitome of luxury, packed with signature amenities and services
        </p>
        <button className="mt-4 px-8 py-2 bg-[#c59434] text-white rounded-full hover:bg-[#b38429]">
          Learn More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {luxeOptions.map((option, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={option.image} alt={option.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">{option.title}</h4>
              <p className="text-gray-600 text-sm">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxeSection;