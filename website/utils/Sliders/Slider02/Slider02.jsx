import React, { useEffect, useState } from "react";

const CardSlider = ({ data }) => {
  const [position, setPosition] = useState(0);
  const cardWidth = 256; // w-64
  const cardSpacing = 32; // 2rem spacing
  const visibleCards = 3;
  const totalCards = data.length;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % totalCards);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalCards]);

  const calculateCardStyle = (index) => {
    const relativePosition = (index - position + totalCards) % totalCards;
    const centerOffset = Math.floor(visibleCards / 2);
    const xOffset = (relativePosition - centerOffset) * (cardWidth + cardSpacing);
    const distanceFromCenter = Math.abs(relativePosition - centerOffset);
    const opacity = Math.max(0, 1 - distanceFromCenter * 0.5);
    const scale = 1 - distanceFromCenter * 0.1;

    return {
      transform: `translateX(${xOffset}px) scale(${scale})`,
      opacity,
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'absolute',
      width: `${cardWidth}px`,
      height: '160px', // h-40
      left: '50%',
      marginLeft: -(cardWidth / 2),
      zIndex: 10 - distanceFromCenter,
    };
  };

  return (
    <div className="relative w-full h-64 bg-white">
      {/* Content container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Cards container */}
        <div className="relative h-full flex items-center justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="absolute rounded-lg flex items-center justify-center shadow-lg overflow-hidden border-2 border-white bg-white"
              style={calculateCardStyle(index)}
            >
              <img 
                src={item.img}
                alt={item.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setPosition(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === position ? 'bg-blue-600 w-4' : 'bg-gray-300'
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

const Slider02 = () => {
  return <CardSlider data={sampleData} />;
};

export default Slider02;