import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StackedCardSlider = ({ data }) => {
  const [cards, setCards] = useState(data);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => [...prev.slice(1), prev[0]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 h-96 flex items-center justify-center overflow-hidden">
      {cards.map((item, index) => {
        const isTopCard = index === 0;
        return (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 30, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, y: index * 5, scale: 1 - index * 0.05, rotate: index % 2 === 0 ? -3 : 3 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-64 h-80 rounded-xl shadow-xl border border-white overflow-hidden bg-white flex items-center justify-center"
            style={{ zIndex: data.length - index }}
          >
            <img
              src={item.img}
              alt={item.text}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
              {item.text}
            </div>
          </motion.div>
        );
      })}
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

const Slider04 = () => {
  return <StackedCardSlider data={sampleData} />;
};

export default Slider04;