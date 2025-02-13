import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Card05({ 
    users = [
        { image: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'John Doe', role: 'Bug Introducer' },
        { image: 'https://randomuser.me/api/portraits/men/4.jpg', name: 'Jonny Smith', role: 'Infinite Loop Specialist' },
        { image: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'David Brown', role: 'JavaScript Sorcerer' }
    ]
}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % users.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [users.length]);

    return (
        <motion.div 
            className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden w-44 h-52 p-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
        >
            <AnimatePresence mode="wait">
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center"
                >
                    <img 
                        src={users[index].image} 
                        alt={users[index].name} 
                        className="w-24 h-24 rounded-full shadow-md border-4 border-indigo-500"
                    />
                    <h3 className="mt-4 text-lg font-bold text-gray-900">{users[index].name}</h3>
                    <p className="text-gray-600 text-sm">{users[index].role}</p>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}

export default Card05;
