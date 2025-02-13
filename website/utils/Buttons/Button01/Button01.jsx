import React from 'react'

function Button01({
    onClick,
    text = 'Button',
    customClass = '',
}) {
  return (
    <div className="relative inline-block">
      <button
      className={`
        bg-blue-500 hover:bg-blue-600 active:bg-blue-700
        text-white font-semibold py-2.5 px-6 rounded-2xl
        shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer
        transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300
        ${customClass}
      `}
      onClick={onClick}
    >
      {text}
    </button>
    </div>
  )
}

export default Button01
