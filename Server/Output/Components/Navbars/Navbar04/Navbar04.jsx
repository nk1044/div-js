import React from "react";
import { motion } from "framer-motion";

const defaultLinks = [
  { name: "Home", link: "#" },
  { name: "About", link: "#" },
  { name: "Docs", link: "#" },
  { name: "Contact", link: "#" },
];

function Navbar04({ props = defaultLinks }) {

  const targetWidth = 60 * (props.length + 1);
  const getOffset = (i) => {
    const mid = (props.length - 1) / 2;
    return (i - mid) * 60;
  };

  const notchVariants = {
    initial: { width: 200, height: 40 },
    hover: { width: targetWidth, transition: { duration: 0.3 } },
  };

  // Variants for nav links.
  // Each nav link will use its custom offset.
  const navLinkVariants = {
    initial: { x: 0, opacity: 0 },
    hover: (custom) => ({
      x: custom.offset,
      opacity: 1,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <>
      {/* Global styles for neon border glow */}
      <style>{`
        @keyframes neonPulse {
          0% { box-shadow: 0 8px 20px rgba(0, 255, 170, 0.8); }
          50% { box-shadow: 0 16px 40px rgba(0, 255, 170, 1); }
          100% { box-shadow: 0 8px 20px rgba(0, 255, 170, 0.8); }
        }
        .neon-border {
          border: 0px 2px solid rgba(0, 255, 170, 0.8);
          border-radius: 16px;
        }
        .neon-glow {
          animation: neonPulse 1.5s infinite alternate;
        }
      `}</style>

      <motion.div
        className="absolute top-0 left-1/2 z-30"
        style={{ transform: "translateX(-50%)", marginTop: "10px" }}
        initial="initial"
        whileHover="hover"
      >
        {/* Notch container that stretches on hover */}
        <motion.div
          className="relative neon-border neon-glow bg-black bg-opacity-80 backdrop-blur-md"
          variants={notchVariants}
        >
          {/* Nav links placed absolutely in the center */}
          <div className="absolute inset-0 flex items-center justify-center">
            {props.map((prop, i) => (
              <motion.a
                key={i}
                href={prop.link}
                custom={{ offset: getOffset(i) }}
                variants={navLinkVariants}
                className="bg-black text-white px-3 py-1 rounded-full text-xs shadow-md hover:bg-opacity-80 absolute"
              >
                {prop.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Navbar04;
