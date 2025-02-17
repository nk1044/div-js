import React from "react";
import { motion } from "framer-motion";

// ---- Helper Function: Generate Multiple 3D Helical Spring Paths ----
// This function now also applies an additional vertical offset between strands
const generate3DHelicalSpringPaths = (
  width,
  centerY,
  amplitude,
  turns,
  points,
  strands,
  gapBetweenStrands = 10 // additional vertical gap between strands
) => {
  const paths = [];
  for (let s = 0; s < strands; s++) {
    // Phase offset for lateral movement plus a vertical offset for separation
    const phase = (s / strands) * 2 * Math.PI;
    const verticalOffset = (s - (strands - 1) / 2) * gapBetweenStrands;
    let d = "";
    for (let i = 0; i <= points; i++) {
      const t = i / points;
      const x = t * width;
      // Lateral sine oscillation with phase shift
      const sineOffset = amplitude * Math.sin(2 * Math.PI * turns * t + phase);
      // Depth effect via cosine modulation
      const depth = amplitude * 0.3 * Math.cos(2 * Math.PI * turns * t + phase);
      const y = centerY + sineOffset + depth + verticalOffset;
      d += i === 0 ? `M${x.toFixed(2)},${y.toFixed(2)}` : ` L${x.toFixed(2)},${y.toFixed(2)}`;
    }
    paths.push(d);
  }
  return paths;
};

// ---- Animation Tokens ----
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
    // Slightly longer duration for a smoother, continuous drawing
    path: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
    // Rotation for the entire group (removed)
    rotation: { duration: 20, ease: "linear", repeat: Infinity },
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
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.95 },
      transition: { type: "spring", stiffness: 400, damping: 20 },
    },
  },
  // ---- 3D Helical Spring Paths (unchanged) ----
  curves: {
    // Generate multiple strands spanning the SVG width (1300) centered at y = 300.
    // Adjust amplitude, turns, points, strands, and gapBetweenStrands to achieve the desired 3D look.
    complexPaths: generate3DHelicalSpringPaths(1300, 300, 50, 5, 200, 5, 15),
  },
};

// ---- SVG Path Variants (Same as before) ----
const pathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    strokeDasharray: ["10 20", "20 10", "10 20"],
    strokeDashoffset: [0, 20, 0],
  },
};

// ----- Navbar (Notch & Link Styling) -----
// Notch styling with a glow
const notchStyle =
  "bg-black bg-opacity-80 backdrop-blur-md cursor-default flex items-center justify-center p-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]";

// Link styling: text is always white.
const linkStyle =
  "bg-black text-white px-3 py-1 rounded-full text-xs shadow-md";

// Default navigation links
const defaultProps = [
  { name: "Home", link: "#" },
  { name: "About", link: "#" },
  { name: "Docs", link: "#" },
  { name: "Contact", link: "#" },
];

// ----- Landing Page Component -----
function Dashboard02({ links = defaultProps, previewMode = true }) {
  const navPositionClass = previewMode ? "absolute" : "fixed";
  return (
    <div className={`relative w-full h-screen overflow-hidden ${animationTokens.colors.backgroundGradient}`}>
      
      {/* Navbar: Notch with Navigation Links (always visible) */}
      <motion.div
        className={`${navPositionClass} top-0 left-1/2 z-30 pointer-events-auto ${notchStyle}`}
        style={{ transform: "translateX(-50%)", marginTop: "10px" }}
      >
        {links.map((link, i) => (
          <a key={i} href={link.link} className={linkStyle}>
            {link.name}
          </a>
        ))}
      </motion.div>
      
      {/* Animated Complex 3D Helical Spring Background */}
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
        {/* Wrap all paths in a group without rotation */}
        <g>
          {animationTokens.curves.complexPaths.map((d, idx) => (
            <motion.path
              key={idx}
              d={d}
              fill="none"
              stroke="url(#complexGradient)"
              strokeWidth={2 + idx * 0.5} // varying stroke widths for depth
              strokeLinecap="round"
              variants={pathVariants}
              initial="initial"
              animate="animate"
              transition={{ ...animationTokens.transitions.complex, delay: idx * 0.2 }}
            />
          ))}
        </g>
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
          className="text-gray-300 text-lg md:text-2xl mb-12 max-w-3xl"
          initial={animationTokens.content.paragraph.initial}
          animate={animationTokens.content.paragraph.animate}
          transition={animationTokens.content.paragraph.transition}
        >
            Discover the future with our cutting-edge technology. We're here to make your wildest dreams come true.
        </motion.p>

        {/* Revamped Futuristic Button with Glowing, Animated Boundary */}
        <div className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <motion.span
            className="absolute inset-[-150%] bg-[conic-gradient(from_90deg_at_50%_50%,#FF6EC7_0%,#18CCFC_50%,#AE48FF_100%)]"
            animate={{ filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"] }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-base font-bold text-white backdrop-blur-3xl shadow-[0_0_12px_rgba(24,204,252,0.8)]">
            Get Started
          </span>
        </div>
      </div>

      {/* Extra Features Section */}
      <div className="relative z-10 mt-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Our Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Lightning Fast",
                description:
                  "Our code runs so fast, even your grandma's dial-up would be jealous.",
              },
              {
                title: "Cutting-Edge",
                description:
                  "We use the latest tech trends—even if it means breaking half the internet.",
              },
              {
                title: "Future-Proof",
                description:
                  "Our solutions are so ahead of time, even time travelers get confused.",
              },
            ].map((feature, i) => (
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
                <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative z-10 mt-16 py-6 bg-gray-800 text-gray-400 text-center">
        <p>&copy; {new Date().getFullYear()} Tech Torture Inc. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://twitter.com" className="hover:text-white">Twitter</a>
          <a href="https://github.com" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-white">LinkedIn</a>
        </div>
      </footer>

      {/* Extra Background Motion for Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}

export default Dashboard02;
