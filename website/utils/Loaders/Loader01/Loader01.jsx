import React from 'react';

function Loader01({ color = "border-blue-600" }) {
  return (
      <div className={`w-10 h-10 border-4 border-solid ${color} border-t-transparent rounded-full animate-spin shadow-lg`}></div>
  );
}

export default Loader01;