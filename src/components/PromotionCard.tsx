import React from 'react';

interface PromotionCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PromotionCard;