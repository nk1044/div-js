import React, { useState } from 'react';

function Button05({ 
    onClick, 
    text = 'Book Now', 
    imageSrc = 'https://img.icons8.com/?size=100&id=HrxNQff0Qrmc&format=png&color=000000', 
    customClass = '' 
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className={`
          relative bg-[#FF6B00] hover:bg-[#D62828]
          text-white font-bold py-3 px-12 rounded-lg cursor-pointer
          shadow-md hover:shadow-lg transition-all duration-500 ease-in-out
          transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300
          flex items-center justify-center w-[160px] h-[50px] overflow-hidden
          ${customClass}
        `}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Text Slide Out */}
        <span 
          className={`absolute transition-all duration-500 ${
            hovered ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
        >
          {text}
        </span>

        {/* Image Slide In */}
        <img 
          src={imageSrc} 
          alt="Hover Logo" 
          className={`w-6 h-6 object-contain absolute transition-all duration-500 ${
            hovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        />
      </button>
    </div>
  );
}

export default Button05;
