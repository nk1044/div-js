import React from "react";
import { motion } from "framer-motion";

function Card02({ 
    image='https://images.pexels.com/photos/264771/pexels-photo-264771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    title = "Premium Product", 
    price = "$79.99",
    rating = "4.8",
    description='Experience luxury with our top-tier product. Designed for comfort, style, and performance.'
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      whileHover={{ rotateY: 10, scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
      className="max-w-md bg-gradient-to-br from-gray-100 to-gray-300 border border-gray-400 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
    >
      <motion.div 
        className="relative overflow-hidden rounded-t-3xl"
      >
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-72 object-cover"
          whileHover={{ scale: 1.1, rotateZ: 3 }}
          transition={{ duration: 0.4 }}
        />
        <motion.span 
          className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          New
        </motion.span>
      </motion.div>
      <div className="p-6 text-center">
        <motion.h3 
          className="text-2xl font-extrabold text-gray-900"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
        <p className="mt-2 text-gray-700 text-sm">{description}</p>
        <div className="mt-4 flex items-center justify-center space-x-3">
          <span className="text-xl font-bold text-green-600">{price}</span>
          <span className="text-sm text-yellow-500 flex items-center">⭐ {rating}</span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.1, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
        >
          Buy Now
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Card02;