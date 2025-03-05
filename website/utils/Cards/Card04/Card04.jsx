import React from "react";
import { motion } from "framer-motion";

function Card04({ 
    image='https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    title = "Unlock Creativity", 
    description='Discover new ways to enhance your creative thinking and bring your ideas to life!'
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotate: -5 }} 
      animate={{ opacity: 1, y: 0, rotate: 0 }} 
      whileHover={{ scale: 1.08, rotate: 2, transition: { duration: 0.3 } }}
      className="max-w-xs bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-2xl overflow-hidden flex flex-col items-center text-white p-6 transform-gpu"
    >
      <motion.div 
        className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
        whileHover={{ scale: 1.1 }}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </motion.div>
      <motion.h3 
        className="mt-4 text-lg font-extrabold tracking-wide text-center"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="mt-2 text-center text-sm opacity-90"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
      >
        {description}
      </motion.p>
      <motion.button 
        className="mt-5 px-6 py-2 bg-white text-indigo-600 font-bold rounded-full shadow-md transition-all duration-300 hover:bg-gray-200"
        whileHover={{ scale: 1.1, rotate: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore More
      </motion.button>
    </motion.div>
  );
}

export default Card04;