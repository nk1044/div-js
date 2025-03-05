import React from 'react';

function Button03({
    onClick,
    text = 'Button',
    customClass = '',
}) {
  return (
    <div className="relative inline-block">
      <button
        className={`
          relative bg-[#0f172a] text-white font-semibold py-3 px-8 rounded-full
          shadow-[0_0_15px_rgba(0,255,170,0.7)] hover:shadow-[0_0_25px_rgba(0,255,170,1)]
          transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer
          focus:outline-none focus:ring-4 focus:ring-green-400
          neon-glow
          ${customClass}
        `}
        onClick={onClick}
      >
        {text}
      </button>

      {/* Neon Glow Animation */}
      <style>
        {`
          @keyframes neonPulse {
            0% { box-shadow: 0 0 10px rgba(0, 255, 170, 0.5); }
            50% { box-shadow: 0 0 20px rgba(0, 255, 170, 1); }
            100% { box-shadow: 0 0 10px rgba(0, 255, 170, 0.5); }
          }
          .neon-glow {
            animation: neonPulse 1.5s infinite alternate;
          }
        `}
      </style>
    </div>
  );
}

export default Button03;
