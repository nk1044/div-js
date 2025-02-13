import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardSlider = ({ data }) => {
  const [position, setPosition] = useState(0);
  const cardWidth = 260;
  const cardSpacing = 30;
  const visibleCards = 3;
  const totalCards = data.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % totalCards);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalCards]);

  const calculateCardStyle = (index) => {
    const relativePosition = (index - position + totalCards) % totalCards;
    const centerOffset = Math.floor(visibleCards / 2);
    const xOffset = (relativePosition - centerOffset) * (cardWidth + cardSpacing);
    const distanceFromCenter = Math.abs(relativePosition - centerOffset);
    const opacity = 1 - distanceFromCenter * 0.3;
    const scale = 1 - distanceFromCenter * 0.1;

    return {
      transform: `translateX(${xOffset}px) scale(${scale})`,
      opacity,
      transition: "all 0.8s ease-in-out",
      position: "absolute",
      width: `${cardWidth}px`,
      height: "180px",
      left: "50%",
      marginLeft: -(cardWidth / 2),
      zIndex: 10 - distanceFromCenter,
      backdropFilter: "blur(10px)",
    };
  };

  return (
    <div className="relative w-full h-72 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-lg shadow-lg">
      {/* Navigation Buttons */}
      <button
        className="absolute left-4 z-30 p-2"
        onClick={() => setPosition((prev) => (prev - 1 + totalCards) % totalCards)}
      >
        <img 
        src="https://img.icons8.com/?size=100&id=39977&format=png&color=000000" 
        alt="left button" 
        className="w-7 cursor-pointer"/>
      </button>
      
      {/* Cards Container */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="absolute rounded-xl flex items-center justify-center shadow-xl border border-white overflow-hidden bg-white bg-opacity-30 backdrop-blur-lg"
            style={calculateCardStyle(index)}
          >
            <img src={item.img} alt={item.text} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-3 text-center rounded-b-xl">
              {item.text}
            </div>
          </div>
        ))}
      </div>
      
      {/* Right Navigation */}
      <button
        className="absolute right-4 z-30 p-2 "
        onClick={() => setPosition((prev) => (prev + 1) % totalCards)}
      >
        <img 
        src="https://img.icons8.com/?size=100&id=26196&format=png&color=000000" 
        alt="left button" 
        className="w-7 cursor-pointer"/>
      </button>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex space-x-2 z-30">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setPosition(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === position ? "bg-blue-600 w-4 h-4 shadow-md" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const sampleData = [
    { text: "Card 1", img: "https://images.pexels.com/photos/14482208/pexels-photo-14482208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { text: "Card 2", img: "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { text: "Card 3", img: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { text: "Card 4", img: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { text: "Card 5", img: "https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { text: "Card 6", img: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { text: "Card 7", img: "https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
  ];

const Slider03 = () => {
  return <CardSlider data={sampleData} />;
};

export default Slider03;
