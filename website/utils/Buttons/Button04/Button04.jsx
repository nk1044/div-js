import React from 'react';

function Button04({
    onClick,
    text = 'Button',
    customClass = '',
}) {
  return (
    <div className="relative inline-block">
      <button
        className={`
          relative bg-gradient-to-r from-[#00ffcc] via-[#00aaff] to-[#ff00ff]
          hover:from-[#00ddaa] hover:via-[#0088dd] hover:to-[#dd00dd]
          text-white font-bold py-3 px-10 rounded-full cursor-pointer
          shadow-[0_0_15px_rgba(0,255,204,0.7)] hover:shadow-[0_0_25px_rgba(0,255,204,1)]
          transition-all duration-300 ease-in-out transform hover:scale-110
          focus:outline-none focus:ring-4 focus:ring-[#00ffcc]
          animate-glow
          ${customClass}
        `}
        onClick={onClick}
      >
        {text}
      </button>

      {/* Cyber Glow Animation */}
      <style>
        {`
          @keyframes neonPulse {
            0% { box-shadow: 0 0 10px rgba(0, 255, 204, 0.5); }
            50% { box-shadow: 0 0 20px rgba(0, 255, 204, 1); }
            100% { box-shadow: 0 0 10px rgba(0, 255, 204, 0.5); }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-glow {
            animation: neonPulse 1.5s infinite alternate, gradientShift 4s infinite linear;
            background-size: 200% 200%;
          }
        `}
      </style>
    </div>
  );
}

export default Button04;
