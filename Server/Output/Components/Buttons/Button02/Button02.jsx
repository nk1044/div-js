import React from 'react';

function Button02({
    onClick,
    text = 'Button',
    customClass = '',
}) {
  return (
    <div className="relative inline-block">
      <button
        className={`
          relative bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
          hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600
          active:from-indigo-700 active:via-purple-800 active:to-pink-700
          text-white font-bold py-3 px-8 rounded-2xl cursor-pointer
          shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
          transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-400
          animate-bg-gradient
          ${customClass}
        `}
        onClick={onClick}
      >
        {text}
      </button>

      {/* Background Animation */}
      <style>
        {`
          @keyframes bgGradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-bg-gradient {
            background-size: 300% 300%;
            animation: bgGradientAnimation 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Button02;
