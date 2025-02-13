import React from "react";
import { motion } from "framer-motion";

function Card01({ 
    image='https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    title = "Card Title", 
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'
 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, rotateY: 10 }} 
      animate={{ opacity: 1, y: 0, rotateY: 0 }} 
      whileHover={{ scale: 1.07, rotateY: 10, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95, rotateY: -10 }}
      className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-3xl"
    >
      <a href="#">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-60 object-cover rounded-t-3xl"
          whileHover={{ scale: 1.1, rotateZ: 3 }}
          transition={{ duration: 0.3 }}
        />
      </a>
      <div className="p-6 text-center">
        <a href="#">
          <motion.h5 
            className="text-3xl font-bold tracking-wide text-gray-900"
            whileHover={{ scale: 1.1, rotateX: 5 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h5>
        </a>
        <motion.p 
          className="mt-4 text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="mt-6 inline-flex items-center px-5 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg hover:from-blue-600 hover:to-indigo-600 focus:ring-4 focus:ring-indigo-300"
          transition={{ duration: 0.3 }}
        >
          Read more
          <svg className="w-5 h-5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Card01;
