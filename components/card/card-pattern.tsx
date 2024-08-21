import React from 'react';

interface PatternCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

const PatternCard: React.FC<PatternCardProps> = ({ title, description, link, imageSrc }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-72 h-96 flex flex-col justify-between">
      <div>
        <img src={imageSrc} alt={`${title} icon`} className="h-32 w-full object-cover mb-4 rounded" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <a href={link} className="text-blue-500 hover:underline mt-auto">
        Learn more
      </a>
    </div>
  );
};

export default PatternCard;