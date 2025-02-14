import React from "react";
import { motion } from "framer-motion";

const notchVariants = {
  initial: { width: 200, height: 30, borderRadius: "16px" },
  hover: { width: 240, height: 40, borderRadius: "16px", transition: { duration: 0.3 } }
};
const defaultProps= [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Docs", link: "#" },
    { name: "Contact", link: "#" },
  ]

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

function Navbar03({props=defaultProps}) {
  return (
    <motion.div
      className="absolute top-0 left-1/2 z-30 flex flex-col items-center"
      style={{ transform: "translateX(-50%)", marginTop: "10px" }}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="bg-black bg-opacity-80 backdrop-blur-md cursor-pointer"
        variants={notchVariants}
      />
      <motion.div
        className="flex gap-4 mt-4"
        variants={bubbleContainerVariants}
      >
        {props.map((prop, i) => (
          <motion.a
            key={i}
            href={prop.link}
            className="bg-black text-white px-3 py-1 rounded-full text-xs shadow-md hover:bg-opacity-80"
            variants={bubbleVariants}
          >
            {prop.name}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Navbar03;
