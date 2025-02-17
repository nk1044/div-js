import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {HealthCheck} from '../server/server.js'

function Home() {
  useEffect(() => {
    HealthCheck();
  }, []);


  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-neutral-900 p-6 overflow-hidden">
      <Helmet>
        <title>trydivjs - The Easiest Way to Build UI Components</title>
        <meta name="description" content="trydivjs - The laziest way to build UI components with just one line. No setup, no hassle, just powerful UI components instantly!" />
        <meta name="keywords" content="trydivjs, UI components, React UI, frontend development, web development" />
        <meta property="og:title" content="trydivjs - The Easiest Way to Build UI Components" />
        <meta property="og:description" content="Super lightweight and fast UI component library for effortless frontend development." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(156,163,175,0.2)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center z-10"
      >
        <h1 className="text-6xl font-extrabold text-blue-400 mb-4 animate-bounce">
          Welcome to <span className="text-red-400">trydivjs</span>
        </h1>
        <p className="text-xl text-gray-300 font-medium">
          The <span className='text-gray-100 font-bold'>laziest</span> way to build UI components. Just one line, and boom  — <span className='text-gray-100 font-bold'>you have a fully working UI element!</span>
        </p>

        {/* Installation Command */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 bg-gray-800 text-white p-4 rounded-lg text-lg font-mono shadow-lg"
        >
          <code className="select-all">npm install trydivjs --save-dev</code>
        </motion.div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://github.com/NeerajKumar-1044/div-js" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 hover:scale-105 transition duration-300">View on GitHub</a>
          <Link to="/docs" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition duration-300">Read Docs</Link>
          <a href="https://www.npmjs.com/package/trydivjs" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 hover:scale-105 transition duration-300">View on npmjs</a>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-12 max-w-5xl text-center"
      >
        <h2 className="text-4xl font-semibold text-gray-200 ">Why Choose trydivjs?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { title: " One-Liner Magic", desc: "No setup, no headaches—just import and use!" },
            { title: "Insanely Fast", desc: "Super lightweight, zero dependencies, and optimized for speed." },
            { title: " Prebuilt Components", desc: "Stop reinventing the wheel. Use our pre-styled UI components instantly." }
          ].map((feature, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 shadow-md rounded-lg transition">
              <h3 className="text-2xl font-bold text-blue-400">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* View Counts */}
      <motion.div className="flex flex-col items-center mt-10" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <motion.h2 className="font-bold text-gray-300" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
          View Counts:
        </motion.h2>
        <motion.img src="https://profile-counter.glitch.me/divjs-npm-package/count.svg" alt="Visitor's Count" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} />
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="relative z-10 mt-16 text-gray-500 text-lg text-center"
      >
        🚀 Built with 💙 by{" "}
        <a
          href="https://www.linkedin.com/in/neerajkumar1044"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300 cursor-pointer"
        >
          Neeraj Kumar
        </a>
        . Go break the internet! 😜
      </motion.footer>


    </div>
  );
}

export default Home;
