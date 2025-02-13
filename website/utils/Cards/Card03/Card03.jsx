import React from "react";
import { motion } from "framer-motion";

function Card03({ 
    image='https://images.pexels.com/photos/14482208/pexels-photo-14482208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    title = "Epic Manga Series", 
    author = "Hiro Mashima",
    genre = "Adventure, Fantasy",
    description='A thrilling tale of magic, adventure, and friendship that takes you through an epic journey across fantastical realms.'
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, rotateX: -10 }} 
      animate={{ opacity: 1, y: 0, rotateX: 0 }} 
      whileHover={{ scale: 1.05, rotateX: 5, boxShadow: "0px 10px 20px rgba(0,0,0,0.4)" }}
      className="relative max-w-md bg-black text-white border border-gray-700 rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl"
    >
      <motion.div className="relative overflow-hidden rounded-t-3xl">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-80 object-cover border-b-4 border-red-500"
          whileHover={{ scale: 1.1, rotateZ: 2 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div 
          className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-2xl font-extrabold">{title}</h3>
          <p className="text-sm text-gray-300">by {author}</p>
        </motion.div>
      </motion.div>
      <div className="p-6">
        <span className="text-xs uppercase tracking-wide bg-red-500 text-white px-3 py-1 rounded-lg">{genre}</span>
        <p className="mt-3 text-gray-300 text-sm">{description}</p>
        <motion.button 
          whileHover={{ scale: 1.1, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
        >
          Read Now
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Card03;