import React from "react";
import { motion } from "framer-motion";

const notchVariants = {
  initial: { width: 200, height: 30, borderRadius: "16px" },
  hover: { width: 240, height: 40, borderRadius: "16px", transition: { duration: 0.3 } },
};

const defaultProps = [
  { name: "Home", link: "#" },
  { name: "About", link: "#" },
  { name: "Docs", link: "#" },
  { name: "Contact", link: "#" },
];

const bubbleContainerVariants = {
  initial: { opacity: 0, y: 20 },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.3,
    },
  },
};

const bubbleVariants = {
  initial: { opacity: 0, scale: 0.5 },
  hover: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

function Navbar03({ props = defaultProps, links = defaultProps }) {
  return (
    <>
      {/* Global styles for neon glow effect */}
      <style>
        {`
          @keyframes neonPulse {
            0% { box-shadow: 0 8px 20px rgba(0, 255, 170, 0.8); }
            50% { box-shadow: 0 16px 40px rgba(0, 255, 170, 1); }
            100% { box-shadow: 0 8px 20px rgba(0, 255, 170, 0.8); }
          }
          .neon-glow {
            animation: neonPulse 1.5s infinite alternate;
          }
        `}
      </style>

      <motion.div
        className="absolute top-0 left-1/2 z-30 pointer-events-auto flex flex-col items-center overflow-visible"
        style={{ transform: "translateX(-50%)", marginTop: "10px", paddingBottom: "40px" }}
        initial="initial"
        whileHover="hover"
      >
        {/* Notch Container with enhanced glow applied via box-shadow.
            This container remains completely black (rounded-2xl) */}
        <motion.div
          className="bg-black bg-opacity-80 backdrop-blur-md cursor-pointer relative rounded-2xl"
          variants={notchVariants}
          style={{
            boxShadow: "0 20px 60px rgba(24,204,252,1)",
          }}
        />
        {/* Bubble Nav Links */}
        <motion.div
          className="flex gap-4 mt-4"
          variants={bubbleContainerVariants}
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.link}
              className="bg-black text-white px-3 z-40 py-1 rounded-full text-xs shadow-md"
              variants={bubbleVariants}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Navbar03;
