import React from "react";

function Button06({ onClick, text = "Button", customClass = "" }) {
  return (
    <div className="relative inline-block">
      <button
        className={`
          relative px-8 py-3 text-white text-lg font-bold
          bg-[#007BFF] rounded-full overflow-hidden
          transition-all duration-500 ease-in-out cursor-pointer
          hover:shadow-lg hover:bg-[#0056b3]
          focus:outline-none focus:ring-4 focus:ring-blue-300
          ${customClass}
        `}
        onClick={onClick}
      >
        <span className="relative z-10">{text}</span>
        <div className="absolute inset-0 bg-white opacity-20 rounded-full scale-125 transform translate-y-12 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
      </button>
    </div>
  );
}

export default Button06;
