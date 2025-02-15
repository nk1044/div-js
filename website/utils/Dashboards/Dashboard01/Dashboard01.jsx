import React from "react";
import { motion } from "framer-motion";

const animationTokens = {
  colors: {
    primary: "#18CCFC",
    secondary: "#AE48FF",
    accent: "#FF6EC7",
    white: "#FFFFFF",
    black: "#000000",
    backgroundGradient: "bg-gradient-to-br from-gray-900 to-black",
  },
  gradients: {
    beamGradient: {
      type: "linear",
      angle: 45,
      stops: [
        { offset: "0%", color: "#18CCFC", opacity: 0.5 },
        { offset: "50%", color: "#AE48FF", opacity: 0.5 },
        { offset: "100%", color: "#FF6EC7", opacity: 0.5 },
      ],
    },
    complexGradient: {
      stops: [
        { offset: "0%", color: "#18CCFC", opacity: 0.5 },
        { offset: "50%", color: "#AE48FF", opacity: 0.5 },
        { offset: "100%", color: "#FF6EC7", opacity: 0.5 },
      ],
    },
  },
  transitions: {
    fast: { duration: 0.5, ease: "easeInOut" },
    medium: { duration: 1, ease: "easeInOut" },
    slow: { duration: 2, ease: "easeInOut" },
    path: { duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
    complex: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
  },
  sparkles: {
    count: 40,
    size: 4,
    animation: { duration: 4, ease: "easeInOut", repeat: Infinity },
  },
  content: {
    heading: {
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 1 },
    },
    paragraph: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1, delay: 0.5 },
    },
    button: {
      whileHover: { scale: 1.07 },
      whileTap: { scale: 0.95 },
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
  curves: {
    complexPaths: [
      "M0,300 C150,100 350,500 600,300 S850,100 1000,300",
      "M50,500 C200,350 400,650 650,500 S900,350 1150,500",
      "M100,400 C300,250 500,550 700,400 S950,250 1200,400",
      "M0,500 C300,350 600,750 900,500 S1150,350 1300,500",
      "M150,250 C300,50 500,450 750,250 S950,50 1150,250",
    ],
  },
};

const pathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    strokeDasharray: ["10 20", "20 10", "10 20"],
    strokeDashoffset: [0, 20, 0],
  },
};

// ----- Navbar (Notch & Bubble Nav Links) Variants -----

const notchVariants = {
  initial: { width: 200, height: 30, borderRadius: "16px" },
  hover: { width: 240, height: 40, borderRadius: "16px", transition: { duration: 0.3 } },
};

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

const defaultProps = [
  { name: "Home", link: "#" },
  { name: "About", link: "#" },
  { name: "Docs", link: "#" },
  { name: "Contact", link: "#" },
];

const bubbleVariants = {
  initial: { opacity: 0, scale: 0.5 },
  hover: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

// ----- Dashboard01 Component -----

function Dashboard01({ links = defaultProps, previewMode = true }) {
  // When previewMode is true, use absolute positioning so the navbar stays inside its container.
  const navPositionClass = previewMode ? "absolute" : "fixed";

  return (
    <div className={`relative w-full h-screen overflow-hidden ${animationTokens.colors.backgroundGradient}`}>

      {/* Navbar: Notch with Bubble Nav Links */}
      <motion.div
        className={`${navPositionClass} top-0 left-1/2 z-30 pointer-events-auto flex flex-col items-center overflow-visible`}
        style={{ transform: "translateX(-50%)", marginTop: "10px", paddingBottom: "40px" }}
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className="bg-black bg-opacity-80 backdrop-blur-md cursor-pointer relative rounded-2xl"
          variants={notchVariants}
          style={{
            // Apply the glow directly as a box-shadow to the notch container.
            boxShadow: "0 20px 60px rgba(24,204,252,1)",
          }}
        />
        <motion.div
          className="flex gap-4 mt-4"
          variants={bubbleContainerVariants}
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.link}
              className="bg-black text-white px-3 z-40 py-1 rounded-full text-xs shadow-md" // Removed hover:bg-opacity-80
              variants={bubbleVariants}
            >
              {link.name}
            </motion.a>
          ))}

        </motion.div>
      </motion.div>

      {/* Animated Complex Curves Background */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1300 600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={animationTokens.transitions.slow}
      >
        <defs>
          <linearGradient id="complexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {animationTokens.gradients.complexGradient.stops.map((stop, i) => (
              <stop key={i} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity} />
            ))}
          </linearGradient>
        </defs>
        {animationTokens.curves.complexPaths.map((d, idx) => (
          <motion.path
            key={idx}
            d={d}
            fill="none"
            stroke="url(#complexGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            variants={pathVariants}
            initial="initial"
            animate="animate"
            transition={{ ...animationTokens.transitions.complex, delay: idx * 0.8 }}
          />
        ))}
      </motion.svg>

      {/* Sparkles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={animationTokens.transitions.medium}
      >
        {Array.from({ length: animationTokens.sparkles.count }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              ...animationTokens.sparkles.animation,
              delay: Math.random() * 2,
            }}
            style={{ width: animationTokens.sparkles.size, height: animationTokens.sparkles.size }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold mb-4"
          initial={animationTokens.content.heading.initial}
          animate={animationTokens.content.heading.animate}
          transition={animationTokens.content.heading.transition}
        >
          Explore the Unknown
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg md:text-2xl mb-12"
          initial={animationTokens.content.paragraph.initial}
          animate={animationTokens.content.paragraph.animate}
          transition={animationTokens.content.paragraph.transition}
        >
          Where art meets technology.
        </motion.p>

        {/* Futuristic Button with Glowing, Animated Boundary */}
        <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <motion.span
            className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            animate={{ filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"] }}
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm md:text-base font-medium text-white backdrop-blur-3xl shadow-[0_0_8px_rgba(24,204,252,0.8)]">
            Read Docs
          </span>
        </div>
      </div>

      {/* Feature Cards Section */}
      <motion.div
        className="relative z-10 mt-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {["Fast", "Innovative", "Future-Proof"].map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-800 text-white rounded-xl shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={animationTokens.content.button.transition}
            >
              <div className="mb-4">
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0l3.09 6.26L22 7.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 12.14 2 7.27l6.91-1.01L12 0z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Extra Background Motion for Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}

export default Dashboard01;
