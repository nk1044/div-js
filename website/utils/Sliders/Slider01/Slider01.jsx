import React, { useEffect, useState } from "react";

const CardSlider = ({ data }) => {
  const [position, setPosition] = useState(0);
  const cardWidth = 256; // w-64 = 16rem = 256px
  const cardSpacing = 32; // space-x-8 = 2rem = 32px
  const totalWidth = cardWidth + cardSpacing;
  
  // Calculate visible cards based on container width
  const visibleCards = 3; // Show 3 cards in view
  const containerWidth = (visibleCards * cardWidth) + ((visibleCards - 1) * cardSpacing);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);

  const calculateCardStyle = (index) => {
    // Calculate the relative position of each card
    const totalCards = data.length;
    const relativePosition = (index - position + totalCards) % totalCards;
    
    // Calculate x position
    const baseX = (relativePosition - Math.floor(visibleCards / 2)) * totalWidth;
    
    // Calculate opacity based on distance from center
    const distanceFromCenter = Math.abs(relativePosition - Math.floor(visibleCards / 2));
    const opacity = Math.max(0, 1 - (distanceFromCenter * 0.5));
    
    // Calculate scale based on distance from center
    const scale = 1 - (distanceFromCenter * 0.1);

    return {
      transform: `translateX(${baseX}px) scale(${scale})`,
      opacity,
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'absolute',
      left: '50%',
      marginLeft: -(cardWidth / 2),
      zIndex: 10 - distanceFromCenter
    };
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {/* Stronger gradient blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark z-20 pointer-events-none"
           style={{
             background: 'linear-gradient(90deg, rgb(255,255,255) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, rgb(255,255,255) 100%)'
           }} 
      />
      
      <div 
        className="relative h-full"
        style={{ width: `${containerWidth}px`, margin: '0 auto' }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="absolute w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center shadow-xl overflow-hidden border-4 border-white transition-all duration-1000"
            style={calculateCardStyle(index)}
          >
            <img 
              src={item.img} 
              alt={item.text} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const sampleData = [
  { text: "User 1", img: "https://images.pexels.com/photos/14482208/pexels-photo-14482208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { text: "User 2", img: "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { text: "User 3", img: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { text: "User 4", img: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { text: "User 5", img: "https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { text: "User 6", img: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { text: "User 7", img: "https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
];

const Slider01 = () => {
  return <CardSlider data={sampleData} />;
};

export default Slider01;