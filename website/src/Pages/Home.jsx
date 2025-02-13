import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 overflow-hidden">
      
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.1)_5%,_transparent_50%)]"></div>

      {/* Hero Section with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="max-w-3xl text-center z-10"
      >
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4 animate-bounce">
          Welcome to <span className="text-red-500">trydivjs</span> 
        </h1>
        <p className="text-xl text-gray-700 font-medium">
          The <span className='text-neutral-700 font-bold'>laziest</span> way to build UI components. Just one line, and boom  — <span className='text-neutral-700 font-bold'>you have a fully working UI element!</span>
        </p>

        {/* Installation Command */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 1, duration: 0.5 }} 
          className="mt-6 bg-gray-900 text-white p-4 rounded-lg text-lg font-mono shadow-lg"
        >
          <code className="select-all">npm install trydivjs --save-dev</code>
        </motion.div>

        {/* Buttons with Cool Hover Effects */}
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="https://github.com/NeerajKumar-1044/div-js"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 hover:scale-105 transition duration-300"
          >
            View on GitHub ⭐
          </a>
          <Link
            to="/docs"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
          >
            Read Docs 📜
          </Link>
        </div>
      </motion.div>

      {/* Features Section with Floating Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1.2, duration: 1 }} 
        className="mt-12 max-w-5xl text-center"
      >
        <h2 className="text-4xl font-semibold text-gray-800 underline decoration-dotted">
          Why Choose trydivjs? 🤔
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-md rounded-lg transition">
            <h3 className="text-2xl font-bold text-blue-500">🛠️ One-Liner Magic</h3>
            <p className="text-gray-600 mt-2">No setup, no headaches—just import and use!</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-md rounded-lg transition">
            <h3 className="text-2xl font-bold text-blue-500">⚡ Insanely Fast</h3>
            <p className="text-gray-600 mt-2">Super lightweight, zero dependencies, and optimized for speed.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-md rounded-lg transition">
            <h3 className="text-2xl font-bold text-blue-500">📦 Prebuilt Components</h3>
            <p className="text-gray-600 mt-2">Stop reinventing the wheel. Use our pre-styled UI components instantly.</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
      className="flex flex-col items-center mt-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="font-bold"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        View Counts:
      </motion.h2>
      <motion.img 
        src="https://profile-counter.glitch.me/divjs-npm-package/count.svg" 
        alt="Visitor's Count"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
    </motion.div>

      {/* Footer with Fun Text */}
      <motion.footer 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2 }} 
        className="mt-16 text-gray-500 text-lg"
      >
        🚀 Built with 💙 by <span className="font-semibold">Neeraj Kumar</span>. Go break the internet! 😜
      </motion.footer>
      
    </div>
  );
}

export default Home;
